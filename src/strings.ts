import { devStrings, type AppStrings } from './dev_strings.ts';
import {
  prodStrings,
  type RequiredProdStrings,
  type Nullify,
  type Sub,
  type Pending,
  type RequiredProdPaths,
} from './prod_strings.ts';

export { devStrings, prodStrings };
export type {
  AppStrings,
  RequiredProdStrings,
  Nullify,
  Sub,
  Pending,
  RequiredProdPaths,
};

/**
 * Recursively find paths to any null values inside an object or array.
 */
export function findNullValues(obj: unknown, path = ''): string[] {
  const nullPaths: string[] = [];

  if (obj === null) {
    nullPaths.push(path || 'root');
  } else if (Array.isArray(obj)) {
    obj.forEach((item, index) => {
      nullPaths.push(...findNullValues(item, `${path}[${index}]`));
    });
  } else if (typeof obj === 'object' && obj !== null) {
    for (const [key, value] of Object.entries(obj)) {
      const currentPath = path ? `${path}.${key}` : key;
      nullPaths.push(...findNullValues(value, currentPath));
    }
  }

  return nullPaths;
}

/**
 * Check if an object has any null values at any depth.
 */
export function hasNullValues(obj: unknown): boolean {
  return findNullValues(obj).length > 0;
}

/**
 * Determine the current execution mode.
 * Looks at Vite's import.meta.env (MODE, PROD) and Node's process.env (MODE, NODE_ENV).
 */
export function getMode(explicitMode?: string): string {
  if (explicitMode) {
    return explicitMode;
  }

  if (typeof import.meta !== 'undefined' && import.meta.env) {
    if (import.meta.env.MODE) return import.meta.env.MODE;
    if (import.meta.env.PROD) return 'production';
    if (import.meta.env.DEV) return 'development';
  }

  if (typeof process !== 'undefined' && process.env) {
    if (process.env.MODE) return process.env.MODE;
    if (process.env.NODE_ENV) return process.env.NODE_ENV;
  }

  return 'development';
}

/**
 * Check whether the given mode represents production.
 */
export function isProdMode(mode = getMode()): boolean {
  const normalized = String(mode).toLowerCase().trim();
  return (
    normalized === 'prod' ||
    normalized === 'production' ||
    (typeof import.meta !== 'undefined' && import.meta.env?.PROD === true)
  );
}

/**
 * Initialization code that checks the mode.
 * If mode is prod, and any value inside prodStrings is null,
 * it throws an error thereby halting deployment.
 */
export function initializeStrings(explicitMode?: string): AppStrings {
  const mode = getMode(explicitMode);

  if (isProdMode(mode)) {
    const nullFields = findNullValues(prodStrings);
    if (nullFields.length > 0) {
      throw new Error(
        `Halting deployment: Mode is '${mode}' and prodStrings contains ${nullFields.length} required field(s) with null value:\n` +
        nullFields.map((field) => `  - ${field}`).join('\n')
      );
    }
  }

  return devStrings;
}

// Default export of active strings based on current runtime
export const strings: AppStrings = devStrings;
