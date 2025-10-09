/**
 * Custom Logger for React Native
 * Ensures console logs appear in both Metro bundler terminal and device
 */

type LogLevel = 'log' | 'info' | 'warn' | 'error' | 'debug';

class Logger {
  private enabled: boolean = __DEV__;

  /**
   * Enable or disable logging
   */
  setEnabled(enabled: boolean) {
    this.enabled = enabled;
  }

  /**
   * Log general messages
   */
  log(...args: any[]) {
    if (this.enabled) {
      console.log('[LOG]', ...args);
    }
  }

  /**
   * Log informational messages
   */
  info(...args: any[]) {
    if (this.enabled) {
      console.info('[INFO]', ...args);
    }
  }

  /**
   * Log warning messages
   */
  warn(...args: any[]) {
    if (this.enabled) {
      console.warn('[WARN]', ...args);
    }
  }

  /**
   * Log error messages
   */
  error(...args: any[]) {
    if (this.enabled) {
      console.error('[ERROR]', ...args);
    }
  }

  /**
   * Log debug messages
   */
  debug(...args: any[]) {
    if (this.enabled) {
      console.debug('[DEBUG]', ...args);
    }
  }

  /**
   * Log with custom tag
   */
  tagged(tag: string, level: LogLevel = 'log') {
    return (...args: any[]) => {
      if (this.enabled) {
        const logFn = console[level] || console.log;
        logFn(`[${tag.toUpperCase()}]`, ...args);
      }
    };
  }
}

export default new Logger();

