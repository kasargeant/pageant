/**
 * @file Pageant.js
 * @description The Pageant class.
 * @author Kyle Alexis Sargeant <kasargeant@gmail.com> {@link https://github.com/kasargeant https://github.com/kasargeant}.
 * @copyright Kyle Alexis Sargeant 2017
 * @license See LICENSE file included in this distribution.
 */

// Imports
const chalk = require("chalk");

/**
 * @class
 * @classdesc A class of static pretty-print console functions.
 * @static
 */
class Pageant {

    static cmd(value) {console.log(chalk.bgMagenta(" " + value));}
    static task(value) {console.log(chalk.bgBlue("  " + value));}
    static action(value) {console.log(chalk.blue("  - " + value));}
    static stage(value) {console.log(chalk.cyan("    -> " + value));}

    static info(value) {console.info(chalk.bgBlue(value));}
    static warning(value) {console.warn(chalk.yellow(value));}
    static error(value) {console.error(chalk.red(value));}

}

// Exports
module.exports = Pageant;


