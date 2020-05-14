/**
 * https://es6.ruanyifeng.com/#docs/symbol
 * Symbol
 */

const log: { [index: string]: { [index: string]: symbol } } = {};

log.levels = {
  DEBUG: Symbol('debug'),
  INFO: Symbol('info'),
  WARN: Symbol('warn')
};

console.log(log.levels.DEBUG, 'debug message');
console.log(log.levels.INFO, 'info message');