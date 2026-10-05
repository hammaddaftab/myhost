import {
  type CountryCode,
  getCountries,
  getCountryCallingCode,
  parsePhoneNumberFromString,
  isValidPhoneNumber,
  validatePhoneNumberLength,
  getExampleNumber,
  AsYouType,
} from 'libphonenumber-js';
import examples from 'libphonenumber-js/examples.mobile.json';

export type { CountryCode };

export interface CountryItem {
  code: CountryCode;
  name: string;
  dialCode: string;
  flag: string;
  placeholder?: string;
}

export interface PhoneValidationResult {
  isValid: boolean;
  error?: string;
  country?: CountryCode;
  e164?: string;
  international?: string;
  national?: string;
}

// Top countries prioritized at the top of the country dropdown
export const PRIORITY_COUNTRIES: CountryCode[] = [
  'US', // United States
  'CA', // Canada
  'GB', // United Kingdom
  'AU', // Australia
  'AE', // United Arab Emirates
  'DE', // Germany
  'FR', // France
  'PK', // Pakistan
  'IN', // India
  'SA', // Saudi Arabia
  'ES', // Spain
  'IT', // Italy
  'MX', // Mexico
  'BR', // Brazil
  'JP', // Japan
  'SG', // Singapore
];

// Map primary calling codes to standard country
const CALLING_CODE_OVERRIDE: Record<string, CountryCode> = {
  '1': 'US',
  '44': 'GB',
  '7': 'RU',
  '61': 'AU',
  '64': 'NZ',
  '590': 'GP',
};

const callingCodeToCountryMap: Record<string, CountryCode> = {};
getCountries().forEach((c) => {
  const dial = getCountryCallingCode(c);
  if (!callingCodeToCountryMap[dial]) {
    callingCodeToCountryMap[dial] = c;
  }
});
Object.assign(callingCodeToCountryMap, CALLING_CODE_OVERRIDE);

/**
 * Returns flag emoji for a given 2-letter country code.
 */
export function getCountryFlag(countryCode: string): string {
  if (!countryCode || countryCode.length !== 2) return '🌐';
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

const displayNames = typeof Intl !== 'undefined' && Intl.DisplayNames
  ? new Intl.DisplayNames(['en'], { type: 'region' })
  : null;

/**
 * Returns country name in English.
 */
export function getCountryName(countryCode: string): string {
  try {
    return displayNames?.of(countryCode) || countryCode;
  } catch {
    return countryCode;
  }
}

/**
 * Returns example placeholder for a country, stripping domestic leading zero
 * since the country calling code is already displayed in the trigger button.
 */
export function getExamplePlaceholder(country: CountryCode): string {
  try {
    const ex = getExampleNumber(country, examples);
    if (ex) {
      if (country === 'US' || country === 'CA') {
        return ex.formatNational();
      }
      const dial = `+${getCountryCallingCode(country)}`;
      const intl = ex.formatInternational();
      if (intl.startsWith(dial)) {
        return intl.slice(dial.length).trim();
      }
      return ex.formatNational().replace(/^0\s*/, '');
    }
  } catch {
    // fallback
  }
  return '555 123 4567';
}

/**
 * Detect country code from leading '+' and calling code digits.
 */
export function detectCountryFromPhone(text: string): CountryCode | null {
  if (!text || !text.startsWith('+')) return null;
  const digits = text.slice(1).replace(/\D/g, '');
  for (let len = 4; len >= 1; len--) {
    const prefix = digits.slice(0, len);
    if (callingCodeToCountryMap[prefix]) {
      return callingCodeToCountryMap[prefix];
    }
  }
  return null;
}

let cachedCountryList: CountryItem[] | null = null;

/**
 * Returns complete list of all supported countries with details.
 */
export function getAllCountries(): CountryItem[] {
  if (cachedCountryList) return cachedCountryList;

  const raw = getCountries();
  const list: CountryItem[] = raw.map((code) => {
    const dial = getCountryCallingCode(code);
    return {
      code,
      name: getCountryName(code),
      dialCode: `+${dial}`,
      flag: getCountryFlag(code),
    };
  });

  // Sort alphabetically by country name
  list.sort((a, b) => a.name.localeCompare(b.name));
  cachedCountryList = list;
  return list;
}

/**
 * Normalizes territories to their primary parent country if needed.
 */
export function normalizeCountryCode(country: CountryCode): CountryCode {
  if (['GG', 'JE', 'IM'].includes(country)) return 'GB';
  if (['VI', 'GU', 'MP'].includes(country)) return 'US';
  return country;
}

/**
 * Validates whether the given phone string is a valid, well-formed international phone number.
 */
export function validateInternationalPhone(
  val: string,
  defaultCountry: CountryCode = 'US'
): PhoneValidationResult {
  const trimmed = val ? val.trim() : '';

  // Empty is valid if the field is optional
  if (!trimmed) {
    return { isValid: true };
  }

  // Check for allowed characters (+, digits, spaces, hyphens, parentheses, dots)
  if (!/^\+?[0-9\s\-().]+$/.test(trimmed)) {
    return {
      isValid: false,
      error: 'Only digits and phone symbols (+, -, parentheses, spaces) are allowed',
    };
  }

  // Count raw digits
  const digitCount = trimmed.replace(/\D/g, '').length;
  if (digitCount < 3) {
    return { isValid: false, error: 'Phone number is too short' };
  }
  if (digitCount > 16) {
    return { isValid: false, error: 'Phone number cannot exceed 15 digits' };
  }

  // Check parentheses balance
  if (trimmed.includes('(') || trimmed.includes(')')) {
    const openCount = (trimmed.match(/\(/g) || []).length;
    const closeCount = (trimmed.match(/\)/g) || []).length;
    if (openCount !== closeCount || trimmed.indexOf('(') > trimmed.indexOf(')')) {
      return { isValid: false, error: 'Please check parentheses in phone number' };
    }
  }

  let country = defaultCountry;
  if (trimmed.startsWith('+')) {
    const detected = detectCountryFromPhone(trimmed);
    if (detected) {
      country = detected;
    } else {
      return { isValid: false, error: 'Invalid country code prefix' };
    }
  }

  const countryName = getCountryName(country);
  const placeholder = getExamplePlaceholder(country);

  // Length check against country dial plan
  const lenStatus = validatePhoneNumberLength(trimmed, country);
  if (lenStatus === 'TOO_SHORT') {
    return {
      isValid: false,
      error: `Phone number is too short for ${countryName} (e.g. ${placeholder})`,
      country,
    };
  }
  if (lenStatus === 'TOO_LONG') {
    return {
      isValid: false,
      error: `Phone number is too long for ${countryName}`,
      country,
    };
  }

  // Parse phone number
  const parsed = parsePhoneNumberFromString(trimmed, country);
  if (!parsed) {
    return {
      isValid: false,
      error: `Please enter a valid phone number for ${countryName} (e.g. ${placeholder})`,
      country,
    };
  }

  if (!parsed.isValid()) {
    return {
      isValid: false,
      error: `Invalid phone number format for ${countryName} (e.g. ${placeholder})`,
      country: parsed.country ? normalizeCountryCode(parsed.country) : country,
    };
  }

  const resolvedCountry = parsed.country ? normalizeCountryCode(parsed.country) : country;

  return {
    isValid: true,
    country: resolvedCountry,
    e164: parsed.number,
    international: parsed.formatInternational(),
    national: parsed.formatNational(),
  };
}

/**
 * Format user input as they type, returning both national display and international representation.
 */
export function formatAsYouType(
  rawInput: string,
  country: CountryCode
): {
  display: string;
  international: string;
  country: CountryCode;
  isValid: boolean;
} {
  const trimmed = rawInput.trim();
  if (!trimmed) {
    return {
      display: '',
      international: '',
      country,
      isValid: true,
    };
  }

  // If user entered with leading +
  if (trimmed.startsWith('+')) {
    const detected = detectCountryFromPhone(trimmed) || country;
    const normalized = normalizeCountryCode(detected);
    const parsed = parsePhoneNumberFromString(trimmed, normalized);
    const dial = `+${getCountryCallingCode(normalized)}`;

    const ayt = new AsYouType(normalized);
    const formatted = ayt.input(trimmed);

    let display = formatted;
    if (display.startsWith(dial)) {
      display = display.slice(dial.length).trim();
    }
    display = display.replace(/^0\s*/, '');

    const isValid = parsed ? parsed.isValid() : isValidPhoneNumber(trimmed);
    const international = parsed ? parsed.formatInternational() : trimmed;

    return {
      display: display || trimmed,
      international,
      country: normalized,
      isValid,
    };
  }

  // Strip redundant leading 0 since country dial code is already displayed
  const cleaned = trimmed.replace(/^0+/, '');
  if (!cleaned) {
    return {
      display: '',
      international: '',
      country,
      isValid: true,
    };
  }

  const dialCode = `+${getCountryCallingCode(country)}`;
  const full = `${dialCode}${cleaned}`;
  const parsed = parsePhoneNumberFromString(full, country);
  const ayt = new AsYouType(country);
  const formattedFull = ayt.input(full);

  let display = formattedFull;
  if (display.startsWith(dialCode)) {
    display = display.slice(dialCode.length).trim();
  }

  if (country === 'US' || country === 'CA') {
    const natAyt = new AsYouType(country);
    display = natAyt.input(cleaned);
  }

  const isValid = parsed ? parsed.isValid() : isValidPhoneNumber(full, country);
  const international = parsed ? parsed.formatInternational() : `${dialCode} ${cleaned}`;

  return {
    display,
    international,
    country,
    isValid,
  };
}
