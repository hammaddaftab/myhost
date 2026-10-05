export type LogLevel = 'DEBUG' | 'INFO' | 'HTTP' | 'WARN' | 'ERROR';

const LOG_LEVELS: Record<LogLevel, number> = {
  DEBUG: 0,
  HTTP: 1,
  INFO: 2,
  WARN: 3,
  ERROR: 4,
};

const configuredLevel = (process.env.LOG_LEVEL?.toUpperCase() as LogLevel) || '';
const currentLevel: LogLevel =
  configuredLevel in LOG_LEVELS
    ? (configuredLevel as LogLevel)
    : process.env.NODE_ENV === 'production'
    ? 'INFO'
    : 'DEBUG';

const isColorSupported =
  Boolean(process.stdout && process.stdout.isTTY) && process.env.NODE_ENV !== 'production';

const colors = {
  reset: '\x1b[0m',
  dim: '\x1b[2m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  magenta: '\x1b[35m',
};

function formatLevel(level: LogLevel): string {
  if (!isColorSupported) {
    return `[${level}]`;
  }
  switch (level) {
    case 'DEBUG':
      return `${colors.magenta}[DEBUG]${colors.reset}`;
    case 'HTTP':
      return `${colors.cyan}[HTTP]${colors.reset} `;
    case 'INFO':
      return `${colors.green}[INFO]${colors.reset} `;
    case 'WARN':
      return `${colors.yellow}[WARN]${colors.reset} `;
    case 'ERROR':
      return `${colors.red}[ERROR]${colors.reset}`;
  }
}

function formatTimestamp(): string {
  const ts = new Date().toISOString();
  return isColorSupported ? `${colors.dim}${ts}${colors.reset}` : ts;
}

export class Logger {
  private shouldLog(level: LogLevel): boolean {
    return LOG_LEVELS[level] >= LOG_LEVELS[currentLevel];
  }

  private print(level: LogLevel, message: string, meta?: unknown) {
    if (!this.shouldLog(level)) return;

    const prefix = `${formatTimestamp()} ${formatLevel(level)}:`;
    if (meta !== undefined) {
      if (meta instanceof Error) {
        console[level === 'ERROR' ? 'error' : 'log'](
          `${prefix} ${message}\n${meta.stack || meta.message}`
        );
      } else if (typeof meta === 'object') {
        try {
          console[level === 'ERROR' ? 'error' : 'log'](
            `${prefix} ${message} ${JSON.stringify(meta)}`
          );
        } catch {
          console[level === 'ERROR' ? 'error' : 'log'](`${prefix} ${message}`, meta);
        }
      } else {
        console[level === 'ERROR' ? 'error' : 'log'](`${prefix} ${message} ${meta}`);
      }
    } else {
      console[level === 'ERROR' ? 'error' : 'log'](`${prefix} ${message}`);
    }
  }

  debug(message: string, meta?: unknown) {
    this.print('DEBUG', message, meta);
  }

  http(message: string, meta?: unknown) {
    this.print('HTTP', message, meta);
  }

  info(message: string, meta?: unknown) {
    this.print('INFO', message, meta);
  }

  warn(message: string, meta?: unknown) {
    this.print('WARN', message, meta);
  }

  error(message: string, errorOrMeta?: unknown) {
    this.print('ERROR', message, errorOrMeta);
  }
}

export const logger = new Logger();
