import { useState, useRef, useEffect, useMemo } from 'react';
import { 
  ChevronDown, 
  Search, 
  X, 
  Check, 
  AlertCircle,
  Phone
} from 'lucide-react';
import {
  type CountryCode,
  type CountryItem,
  getAllCountries,
  PRIORITY_COUNTRIES,
  getCountryName,
  getExamplePlaceholder,
  detectCountryFromPhone,
  validateInternationalPhone,
  formatAsYouType,
  normalizeCountryCode
} from '../utils/phoneUtils';
import { getCountryCallingCode, parsePhoneNumberFromString } from 'libphonenumber-js';

export interface InternationalPhoneInputProps {
  id?: string;
  name?: string;
  value: string;
  onChange: (value: string, meta?: { isValid: boolean; country: CountryCode; e164?: string }) => void;
  onBlur?: () => void;
  error?: string | null;
  isValid?: boolean;
  disabled?: boolean;
  defaultCountry?: CountryCode;
  placeholder?: string;
  className?: string;
  required?: boolean;
}

export default function InternationalPhoneInput({
  id,
  name,
  value,
  onChange,
  onBlur,
  error,
  isValid: externalIsValid,
  disabled = false,
  defaultCountry = 'US',
  placeholder: customPlaceholder,
  className = '',
  required = false
}: InternationalPhoneInputProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(defaultCountry);
  const [displayValue, setDisplayValue] = useState('');

  const allCountries = useMemo(() => getAllCountries(), []);

  // Priority countries list
  const priorityList = useMemo(() => {
    return PRIORITY_COUNTRIES.map(code => allCountries.find(c => c.code === code)).filter(Boolean) as CountryItem[];
  }, [allCountries]);

  // Filtered countries based on search query
  const filteredCountries = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return allCountries;
    return allCountries.filter(c => 
      c.name.toLowerCase().includes(q) ||
      c.dialCode.toLowerCase().includes(q) ||
      c.dialCode.replace('+', '').includes(q) ||
      c.code.toLowerCase().includes(q)
    );
  }, [allCountries, searchQuery]);

  // Synchronize internal display state with incoming value
  useEffect(() => {
    if (!value || !value.trim()) {
      setDisplayValue('');
      return;
    }

    const trimmed = value.trim();
    if (trimmed.startsWith('+')) {
      const detected = detectCountryFromPhone(trimmed);
      const activeCountry = detected ? normalizeCountryCode(detected) : selectedCountry;
      if (detected && detected !== selectedCountry) {
        setSelectedCountry(activeCountry);
      }
      const dial = `+${getCountryCallingCode(activeCountry)}`;
      const parsed = parsePhoneNumberFromString(trimmed, activeCountry);
      if (parsed) {
        if (activeCountry === 'US' || activeCountry === 'CA') {
          setDisplayValue(parsed.formatNational());
        } else {
          let intl = parsed.formatInternational();
          if (intl.startsWith(dial)) {
            intl = intl.slice(dial.length).trim();
          }
          intl = intl.replace(/^0\s*/, '');
          setDisplayValue(intl);
        }
      } else {
        const withoutDial = trimmed.startsWith(dial) ? trimmed.slice(dial.length).trim() : trimmed;
        setDisplayValue(withoutDial.replace(/^0\s*/, ''));
      }
    } else {
      const dial = `+${getCountryCallingCode(selectedCountry)}`;
      const parsed = parsePhoneNumberFromString(trimmed, selectedCountry);
      if (parsed) {
        if (selectedCountry === 'US' || selectedCountry === 'CA') {
          setDisplayValue(parsed.formatNational());
        } else {
          let intl = parsed.formatInternational();
          if (intl.startsWith(dial)) {
            intl = intl.slice(dial.length).trim();
          }
          intl = intl.replace(/^0\s*/, '');
          setDisplayValue(intl);
        }
      } else {
        setDisplayValue(trimmed.replace(/^0\s*/, ''));
      }
    }
  }, [value, selectedCountry]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    } else {
      setSearchQuery('');
    }
  }, [isOpen]);

  // Click outside listener to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        inputRef.current?.focus();
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const activeDialCode = useMemo(() => {
    try {
      return `+${getCountryCallingCode(selectedCountry)}`;
    } catch {
      return '+1';
    }
  }, [selectedCountry]);

  const activePlaceholder = useMemo(() => {
    if (selectedCountry === defaultCountry && customPlaceholder) return customPlaceholder;
    return getExamplePlaceholder(selectedCountry);
  }, [customPlaceholder, defaultCountry, selectedCountry]);

  // Validation state
  const validationRes = useMemo(() => {
    return validateInternationalPhone(value, selectedCountry);
  }, [value, selectedCountry]);

  const isFieldValid = externalIsValid !== undefined ? externalIsValid : (validationRes.isValid && Boolean(value.trim()));
  const hasError = Boolean(error);

  // Handle typing in input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;

    // Detect backspace deletion on formatting characters
    const prevDigits = displayValue.replace(/\D/g, '');
    const newDigits = raw.replace(/\D/g, '');
    let cleanRaw = raw;

    if (raw.length < displayValue.length && newDigits.length === prevDigits.length && prevDigits.length > 0) {
      cleanRaw = prevDigits.slice(0, -1);
    }

    if (!cleanRaw.trim()) {
      setDisplayValue('');
      onChange('', { isValid: true, country: selectedCountry });
      return;
    }

    // Format input
    const formatted = formatAsYouType(cleanRaw, selectedCountry);
    setDisplayValue(formatted.display);

    if (formatted.country !== selectedCountry) {
      setSelectedCountry(normalizeCountryCode(formatted.country));
    }

    // Validate and notify parent
    const valResult = validateInternationalPhone(formatted.international, formatted.country);
    onChange(formatted.international, {
      isValid: valResult.isValid,
      country: formatted.country,
      e164: valResult.e164
    });
  };

  // Handle country selection
  const handleSelectCountry = (country: CountryCode) => {
    const normalized = normalizeCountryCode(country);
    setSelectedCountry(normalized);
    setIsOpen(false);

    // If there's an existing number, reformat it under the new country
    const rawDigits = displayValue.replace(/\D/g, '');
    if (rawDigits) {
      const formatted = formatAsYouType(rawDigits, normalized);
      setDisplayValue(formatted.display);
      const valResult = validateInternationalPhone(formatted.international, normalized);
      onChange(formatted.international, {
        isValid: valResult.isValid,
        country: normalized,
        e164: valResult.e164
      });
    }

    inputRef.current?.focus();
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Input container */}
      <div 
        className={`
          flex items-center rounded-xl bg-transparent border transition-all duration-150 relative
          ${hasError 
            ? 'border-error bg-error/[0.02] focus-within:border-error focus-within:ring-1 focus-within:ring-error/20' 
            : isFieldValid 
              ? 'border-primary/70 bg-primary/[0.02] focus-within:border-primary' 
              : 'border-outline-variant/50 focus-within:border-primary'
          }
          ${disabled ? 'opacity-60 pointer-events-none' : ''}
        `}
      >
        {/* Country Selector Button */}
        <button
          type="button"
          disabled={disabled}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-label={`Select country code, currently ${getCountryName(selectedCountry)} ${activeDialCode}`}
          className="flex items-center gap-2 px-3 py-2.5 rounded-l-xl text-on-surface hover:bg-surface-container/60 transition-colors shrink-0 focus:outline-none focus:bg-surface-container/80 cursor-pointer"
        >
          <span className="w-5 h-3.5 rounded-[2px] overflow-hidden inline-flex items-center justify-center shrink-0 border border-outline-variant/30 bg-surface-container shadow-xs">
            <img
              src={`https://flagcdn.com/w40/${selectedCountry.toLowerCase()}.png`}
              alt=""
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </span>
          <span className="text-xs font-semibold text-on-surface-variant font-mono tracking-wide uppercase leading-none">
            {selectedCountry}
          </span>
          <span className="text-xs sm:text-sm font-medium text-on-surface tracking-tight tabular-nums leading-none">
            {activeDialCode}
          </span>
          <ChevronDown className={`w-3.5 h-3.5 text-on-surface-variant/70 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
        </button>

        {/* Vertical divider */}
        <div className="w-[1px] h-5 bg-outline-variant/40 shrink-0" />

        {/* Phone text input */}
        <input
          ref={inputRef}
          id={id}
          name={name}
          type="tel"
          disabled={disabled}
          required={required}
          value={displayValue}
          onChange={handleInputChange}
          onBlur={onBlur}
          placeholder={activePlaceholder}
          autoComplete="tel"
          className="flex-1 min-w-0 px-3 py-2.5 bg-transparent text-xs sm:text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none"
        />

        {/* Status Indicator Icon */}
        <div className="pr-3 flex items-center pointer-events-none shrink-0">
          {hasError ? (
            <AlertCircle className="w-4 h-4 text-error animate-in fade-in duration-150" />
          ) : isFieldValid ? (
            <Check className="w-4 h-4 text-primary animate-in fade-in duration-150" />
          ) : (
            <Phone className="w-3.5 h-3.5 text-on-surface-variant/40" />
          )}
        </div>
      </div>

      {/* Country Selection Dropdown Popover */}
      {isOpen && (
        <div
          ref={dropdownRef}
          role="listbox"
          aria-label="Country list"
          className="absolute left-0 top-[calc(100%+6px)] z-50 w-72 sm:w-80 max-h-80 rounded-2xl bg-surface-container-high border border-outline-variant/50 shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-150 backdrop-blur-md"
        >
          {/* Search Bar Header */}
          <div className="p-2.5 border-b border-outline-variant/30 bg-surface-container-high/90 sticky top-0 z-10">
            <div className="relative flex items-center">
              <Search className="w-3.5 h-3.5 text-on-surface-variant/60 absolute left-2.5 pointer-events-none" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search country or code..."
                className="w-full pl-8 pr-7 py-1.5 text-xs bg-surface-container rounded-xl text-on-surface placeholder:text-on-surface-variant/50 border border-outline-variant/30 focus:outline-none focus:border-primary"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 p-0.5 text-on-surface-variant/60 hover:text-on-surface"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>

          {/* Country List Options */}
          <div className="overflow-y-auto max-h-64 p-1 divide-y divide-outline-variant/10 text-xs">
            {/* When not searching, show Popular section first */}
            {!searchQuery && (
              <div className="mb-1">
                <div className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                  Popular
                </div>
                {priorityList.map((country) => (
                  <button
                    key={`priority-${country.code}`}
                    type="button"
                    onClick={() => handleSelectCountry(country.code)}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-left transition-colors cursor-pointer ${
                      selectedCountry === country.code
                        ? 'bg-primary/10 text-primary font-medium'
                        : 'text-on-surface hover:bg-surface-container'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-5 h-3.5 rounded-[2px] overflow-hidden inline-flex items-center justify-center shrink-0 border border-outline-variant/30 bg-surface-container shadow-xs">
                        <img
                          src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                          alt=""
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      </span>
                      <span className="w-6 text-[11px] font-mono font-bold text-on-surface-variant/90 shrink-0 uppercase text-left leading-none">
                        {country.code}
                      </span>
                      <span className="truncate">{country.name}</span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0 pl-2">
                      <span className="text-[11px] font-mono text-on-surface-variant/80 tabular-nums leading-none">{country.dialCode}</span>
                      {selectedCountry === country.code && (
                        <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                      )}
                    </div>
                  </button>
                ))}
                <div className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant/70 mt-2 border-t border-outline-variant/20 pt-1.5">
                  All Countries
                </div>
              </div>
            )}

            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  onClick={() => handleSelectCountry(country.code)}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-left transition-colors cursor-pointer ${
                    selectedCountry === country.code
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-on-surface hover:bg-surface-container'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-5 h-3.5 rounded-[2px] overflow-hidden inline-flex items-center justify-center shrink-0 border border-outline-variant/30 bg-surface-container shadow-xs">
                      <img
                        src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                        alt=""
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    </span>
                    <span className="w-6 text-[11px] font-mono font-bold text-on-surface-variant/90 shrink-0 uppercase text-left leading-none">
                      {country.code}
                    </span>
                    <span className="truncate">{country.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0 pl-2">
                    <span className="text-[11px] font-mono text-on-surface-variant/80 tabular-nums leading-none">{country.dialCode}</span>
                    {selectedCountry === country.code && (
                      <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                    )}
                  </div>
                </button>
              ))
            ) : (
              <div className="py-6 text-center text-xs text-on-surface-variant">
                No country found matching "{searchQuery}"
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
