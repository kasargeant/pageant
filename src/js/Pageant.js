/**
 * @file Pageant.js
 * @description The Pageant class.
 * @author Kyle Alexis Sargeant <kasargeant@gmail.com> {@link https://github.com/kasargeant https://github.com/kasargeant}.
 * @copyright Kyle Alexis Sargeant 2017
 * @license See LICENSE file included in this distribution.
 */

// Imports
const Tinter = require("tinter");

/**
 * @class
 * @classdesc A class of colorising and pretty-print console functions for both node and browser.
 */
class Pageant {
    /**
     * @constructor
     * @param {Object} options - An options object for setting configurational details.
     */
    constructor(options = {}) {
        this.defaults = {
            scheme: "16",
            isBrowser: false,
            debug: false
        };
        this._setEnv(this.defaults);

        this.config = Object.assign(this.defaults, options);
        // this.console.log(JSON.stringify(this.config));

        if(!this.config.isBrowser) {
            this._util = require("util");
        }

        this.indentCount = 0;

        this.Color = Tinter;
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Console methods: enhanced

    /**
     * Logs ONLY IF the console's debug configuration has been set.
     * Thus unlike the standard console.debug() which is merely an alias for console.log() - you can
     * switch on or off debug logging in Pageant by setting the options.debug flag at instantiation.
     * @param {*} args - Any JS or JSON values.
     * @returns {void}
     */
    debug(...args) {
        if(this.config.debug) {
            this.log(...args);
        }
    }
    /**
     * Outputs a log message to the enhanced console.
     * @param {*} head - Any JS or JSON value.
     * @param {*} rest - Any other JS or JSON values.
     * @returns {void}
     */
    log(head, ...rest) {
        this.console.log(head, ...rest);
    }

    /**
     * Outputs a warning message to the enhanced console.
     * @param {*} head - Any JS or JSON value.
     * @param {*} rest - Any other JS or JSON values.
     * @returns {void}
     */
    warn(head, ...rest) {
        if(this.config.isBrowser) {
            this.console.log(`%c${head}`, "color:orange;", ...rest);
        } else {
            let temp = this._util.format(head, ...rest);
            this.console.log(Tinter.orange(temp));
        }
    }

    /**
     * Outputs an error message to the enhanced console.
     * @param {*} head - Any JS or JSON value.
     * @param {*} rest - Any other JS or JSON values.
     * @returns {void}
     */
    error(head, ...rest) {
        if(this.config.isBrowser) {
            this.console.error(`%c${head}`, "color:red;", ...rest);
        } else {
            let temp = this._util.format(head, ...rest);
            this.console.error(Tinter.red(temp));
        }
    }

    /**
     * Outputs a exception message to the enhanced console (alias for console.error).
     * @param {*} args - Any JS or JSON values.
     * @returns {void}
     */
    exception(...args) {
        this.error(...args);
    }

    /**
     * Outputs an expanded listing of the value to the enhanced console.
     * @param {*} head - Any JS or JSON value.
     * @param {*} rest - Any other JS or JSON values.
     * @returns {void}
     */
    info(head, ...rest) {
        if(this.config.isBrowser) {
            console.info(head, ...rest);
        } else {
            this.console.log(this._stringifyValue(head));
            for(let i = 0; i < rest.length; i++) {
                this.console.log(this._stringifyValue(rest[i]));
            }
        }
    }

    /**
     * Outputs a stringified and formatted object to the enhanced console.
     * @param {*} object - An object.
     * @returns {void}
     */
    stringify(object) {
        // this.console.log(JSON.stringify(value, null, "\t")); // stringify with 2 spaces at each level
        this.console.log(JSON.stringify(object, null, 2)); // stringify with 2 spaces at each level
    }

    /**
     * Same as standard console - exposed for compatibility only.
     * @param {Object|Array} data - The data to display.
     * @returns {void}
     */
    table(data) {
        this.console.table(data);
    }

    /**
     * Same as standard console - exposed for compatibility only.
     * @returns {void}
     */
    trace() {
        this.console.trace();
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Console methods: compatibility

    /**
     * Same as standard console - exposed for compatibility only.
     * @param {*} args - The arguments for assertion.
     * @returns {void}
     */
    assert(...args) {
        this.console.assert(...args);
    }

    /**
     * Same as standard console - exposed for compatibility only.
     * @returns {void}
     */
    clear() {
        this.console.clear();
    }

    /**
     * Same as standard console - exposed for compatibility only.
     * @param {*} label - The label to be counted.
     * @returns {void}
     */
    count(label) {
        this.console.count(label);
    }

    /**
     * Same as standard console - exposed for compatibility only.
     * @param {*} args - The arguments for assertion.
     * @returns {void}
     */
    dir(...args) {
        this.console.dir(...args);
    }

    /**
     * Same as standard console - exposed for compatibility only.
     * @param {*} args - The arguments for assertion.
     * @returns {void}
     */
    dirxml(...args) {
        this.console.dirxml(...args);
    }

    /**
     * Same as standard console - exposed for compatibility only.
     * @returns {void}
     */
    group() {
        this.console.group();
    }

    /**
     * Same as standard console - exposed for compatibility only.
     * @returns {void}
     */
    groupCollapsed() {
        this.console.groupCollapsed();
    }

    /**
     * Same as standard console - exposed for compatibility only.
     * @returns {void}
     */
    groupEnd() {
        this.console.groupEnd();
    }

    /**
     * Same as standard console - exposed for compatibility only.
     * @param {*} name - A name to identify this profile.
     * @returns {void}
     */
    profile(name) {
        this.console.profile(name);
    }

    /**
     * Same as standard console - exposed for compatibility only.
     * @param {*} name - A name to identify this profile.
     * @returns {void}
     */
    profileEnd(name) {
        this.console.profileEnd(name);
    }

    /**
     * Same as standard console - exposed for compatibility only.
     * @param {*} label - The label to be used.
     * @returns {void}
     */
    time(label) {
        this.console.time(label);
    }

    /**
     * Same as standard console - exposed for compatibility only.
     * @param {*} label - The label to be used.
     * @returns {void}
     */
    timeEnd(label) {
        this.console.timeEnd(label);
    }

    /**
     * Same as standard console - exposed for compatibility only.
     * @param {*} label - The label to be used.
     * @returns {void}
     */
    timeStamp(label) {
        this.console.timeStamp(label);
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    indent() {
        return "  ".repeat(this.indentCount);
    }

    _stringifyFunction(fn) {
        let placeholder = "____PLACEHOLDER____";
        let fns = [];
        let json = JSON.stringify(fn, function(key, value) {
            if(typeof value === "function") {
                fns.push(value);
                return placeholder;
            }
            return value;
        }, 2);
        json = json.replace(new RegExp(`"${placeholder}"`, "g"), function(_) {
            return fns.shift();
        });
        return json;
    }

    _stringifyArray(values) {
        let representation = "[\n";
        this.indentCount++;
        if(values.length > 0) {
            values.map(function(value) {
                representation += this.indent() + `${this._stringifyValue(value)},\n`;
            }.bind(this));
            representation = representation.slice(0, -2); // Remove the trailing comma+space
        }
        this.indentCount--;
        representation += "\n" + this.indent() + "]";
        return representation;
    }

    _stringifyObject(obj) {

        let keys = Object.keys(obj);
        if(keys.length === 0) {return "{}";}

        let representation = "{\n";
        this.indentCount++;

        keys.map(function(key) {
            let value = obj[key];
            // representation += this.indent() + this.yellow(`"${key}"`) + `: ${this._stringifyValue(value)},\n`;
            representation += this.indent() + Tinter.magenta(`"${key}"`) + `: ${this._stringifyValue(value)},\n`;
        }.bind(this));
        representation = representation.slice(0, -2); // Remove the trailing comma+space

        this.indentCount--;
        representation += "\n" + this.indent() + "}";

        return representation;
    }

    _stringifyValue(value) {
        let type = typeof(value);
        switch(type) {
            case "undefined":
                return "";

            case "object":
                if(value.constructor === Array) {
                    return this._stringifyArray(value);
                } else {
                    return this._stringifyObject(value);
                }
                break;
            case "function":
                return this._stringifyFunction(value, "Pageant");

            case "boolean":
                return Tinter.yellow(value);

            case "number":
                return Tinter.blue(value);

            case "string":
                return Tinter.green(`"${value}"`);

            case "symbol":
                return Tinter.cyan(`$${value}`);

            default:
                this.console.log(`Error: Unhandled type: '${type}' for value: ${value}`);
                return;
        }
    }

    _styleValue(value) {
        let type = typeof(value);
        switch(type) {
            case "undefined":
                return "";

            case "object":
                if(value.constructor === Array) {
                    return this._stringifyArray(value);
                } else {
                    return this._stringifyObject(value);
                }
                break;
            case "function":
                return this._stringifyFunction(value, "Pageant");

            case "boolean":
                return Tinter.magenta("" + value);

            case "number":
                return Tinter.blue("" + value);

            case "string":
                return Tinter.green("" + value);

            case "symbol":
                return Tinter.cyan("" + value);

            default:
                this.console.log(`Error: Unhandled type: '${type}' for value: ${value}`);
                return;
        }
    }

    /**
     * NOTE: This must be called BEFORE user options are merged with defaults.
     * @param {Object} defaults - the defaults object.
     * @returns {Object} - the modified defaults object.
     * @private
     */
    _setEnv(defaults) {
        //console.info(process.env);
        //"darwin", "freebsd", "linux", "sunos", "win32"

        // if(process.env.CLICOLOR === "1") {
        //     // No need to do anything
        // } else {console.warn("Warning: Environment variable CLICOLOR is missing or set to zero/no color.");}

        switch(process.env.TERM) {
            case "xterm": this.defaults.scheme =  "16"; break; // In theory, just 8!
            case "xterm-color": this.defaults.scheme =  "16"; break;
            case "xterm-16color": this.defaults.scheme =  "16"; break;
            case "xterm-256color":
                this.defaults.scheme =  "256";
                switch(process.env.TERM_PROGRAM) {
                    case "Apple_Terminal": break;
                    case "iTerm.app": break;
                    default:
                        // Programs like WS have no TERM_PROGRAM VALUE... assume 8/16-color only
                        this.defaults.scheme = "16";
                }
                break;
        }
        //console.log(`setEnv: Determined color scheme: ${this.defaults.scheme}`);

        // TODO - implement smart color selection if COLORFGBG is set.
        // if(process.env.COLORFGBG !== undefined) {
        //     let [fg, bg] = process.env.COLORFGBG.split(";");
        //     console.log(`setEnv: FG: ${fg}`);
        //     console.log(`setEnv: BG: ${bg}`);
        // }

        if(typeof(window) === "undefined") {
            this.console = global.console;
            defaults.isBrowser = false;
        } else {
            this.console = window.console;
            defaults.isBrowser = true;
        }
    }

    /**
     * Demonstrates core console functionality - using whatever color scheme is defined.
     * @returns {void}
     */
    demo() {

        let array = [1, true, "three"];
        let object = {a: 1, b: true, c: "three", d: {msg: "hi!"}};

        this.log("PAGEANT CONSOLE DEMO");
        this.log();
        this.log("Strings:-");
        this.log("This is a standard console.log().");
        this.log("This is a standard console.log() %s %d %s.", "with", 3, "args");
        this.warn("This is a standard console.warn().");
        this.warn("This is a standard console.warn() %s %d %s.", "with", 3, "args");
        this.error("This is a standard console.error().");
        this.log("This is a standard console.error() %s %d %s.", "with", 3, "args");
        this.info("This is a standard console.info().");
        this.info("This is a standard console.info() %s %d %s.", "with", 3, "args");
        this.log();
        this.log("Arrays:-");
        this.log(array);
        this.info(array);
        this.log();
        this.log("Objects:-");
        this.log(object);
        this.info(object);
    }
}

// Exports
module.exports = Pageant;
