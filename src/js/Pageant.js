/**
 * @file Pageant.js
 * @description The Pageant class.
 * @author Kyle Alexis Sargeant <kasargeant@gmail.com> {@link https://github.com/kasargeant https://github.com/kasargeant}.
 * @copyright Kyle Alexis Sargeant 2017
 * @license See LICENSE file included in this distribution.
 */

// Imports
const Tinter = require("tinter");
const Table = require("easy-table");
const wrap = require("linewrap");

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

        this.width = 0; // width in columns
        this.height = 0; // height in rows

        this.indentCount = 0;

        this.indentLeft = 0;
        this.indentRight = 80;

        this.Color = Tinter;

        process.stdout.on("resize", this._onResize);
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
        if(this.config.isBrowser) {
            this.console.log(head, ...rest);
            return "cabbage!";
        } else {
            let text = this._util.format(head, ...rest);
            text = wrap(this.indentLeft, this.indentRight, {skipScheme: "ansi-color"})(text);
            this.console.log(text);
            return text;
        }
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
            let text = this._util.format(head, ...rest);
            text = wrap(this.indentLeft, this.indentRight)(text);
            text = Tinter.orange(text);
            this.console.log(text);
            return text;
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
            let text = this._util.format(head, ...rest);
            text = wrap(this.indentLeft, this.indentRight)(text);
            text = Tinter.red(text);
            this.console.log(text);
            return text;
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
     * @returns {*}
     */
    info(head, ...rest) {
        if(this.config.isBrowser) {
            console.info(head, ...rest);
            return head;
        } else {
            let text = this._stringifyValue(head);
            this.console.log(text);
            for(let i = 0; i < rest.length; i++) {
                let restText = this._stringifyValue(rest[i]);
                this.console.log(restText);
                text += "\n" + restText;
            }
            return text;
        }
    }

    /**
     * Outputs a stringified and formatted object to the enhanced console.
     * @param {*} object - An object.
     * @returns {void}
     */
    stringify(object) {
        let text = JSON.stringify(object, null, 2);
        // let text = JSON.stringify(value, null, "\t");
        text = wrap(this.indentLeft, this.indentRight)(text);
        this.console.log(text); // stringify with 2 spaces at each level
        return text;
    }

    /**
     * Same as standard console - exposed for compatibility only.
     * @param {Object|Array} data - The data to display.
     * @returns {void}
     */
    table(data) {
        let text = Table.print(data);
        text = wrap(this.indentLeft, this.indentRight)(text);
        this.console.log(text);
        return text;
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
    getSize() {
        if(this.config.isBrowser === false && process.stdout.isTTY) {
            this.width = process.stdout.columns;
            this.height = process.stdout.rows;
            return {width: this.width, height: this.height};
        }
        return {width: 0, height: 0};
    }
    setSize(width=80, height=24) {
        console.log(`\u{1b}[8;${height};${width}t`);
    }

    _onResize() {
        this.width = process.stdout.columns;
        this.height = process.stdout.rows;
        console.log(`${this.width}x${this.height}`);
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

        // Sniff what kind of host we have.
        if(window === undefined) {
            // Standard Node env.
            this.console = global.console;
            defaults.isBrowser = false;
        } else if(window.describe !== undefined) {
            // Test Node env. e.g. Jest
            this.console = global.console;
            defaults.isBrowser = false;
        } else {
            // An actual browser
            this.console = window.console;
            defaults.isBrowser = true;
        }
    }

    h1(value) {
        this.indentLeft = 0;
        return this.log(Tinter.style(value, "white", "navy", "italic"));
    }

    h2(value) {
        this.indentLeft = 2;
        return this.log(Tinter.style(value, "orange", "navy", "italic"));
    }

    h3(value) {
        this.indentLeft = 4;
        return this.log(Tinter.gray(value));
    }
    h4(value) {
        this.indentLeft = 6;
        return this.log(Tinter.green(value));
    }


}

// Exports
module.exports = Pageant;
