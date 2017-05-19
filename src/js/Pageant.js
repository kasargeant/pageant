/**
 * @file Pageant.js
 * @description The Pageant class.
 * @author Kyle Alexis Sargeant <kasargeant@gmail.com> {@link https://github.com/kasargeant https://github.com/kasargeant}.
 * @copyright Kyle Alexis Sargeant 2017
 * @license See LICENSE file included in this distribution.
 */

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
            isBrowser: false
        };
        this.config = Object.assign(this.defaults, options);

        this.indentCount = 0;

        this.styles = {
            plain: "\x1b[0m",
            bright: "\x1b[1m",
            dim: "\x1b[2m",
            italic: "\x1b[3m",
            underline: "\x1b[4m",
            blink: "\x1b[5m",
            inverse: "\x1b[7m",
            hidden: "\x1b[8m"
        };

        this.colors = {
            black: "\x1b[30m",
            red: "\x1b[31m",
            green: "\x1b[32m",
            yellow: "\x1b[33m",
            blue: "\x1b[34m",
            magenta: "\x1b[35m",
            cyan: "\x1b[36m",
            white: "\x1b[37m"
        };

        this.colorsBg = {
            black: "\x1b[40m",
            red: "\x1b[41m",
            green: "\x1b[42m",
            yellow: "\x1b[43m",
            blue: "\x1b[44m",
            magenta: "\x1b[45m",
            cyan: "\x1b[46m",
            white: "\x1b[47m"
        };

        this.webColors = [
            "black",
            "maroon",
            "green",
            "olive",
            "navy",
            "purple",
            "teal",
            "silver",
            "undef0",
            "undef1",
            "undef2",
            "undef3",
            "undef4",
            "undef5",
            "undef6",
            "undef7",
            "black1",
            "navy1",
            "darkblue",
            "mediumblue",
            "mediumblue1",
            "blue",
            "darkgreen",
            "teal1",
            "teal2",
            "darkcyan",
            "royalblue",
            "dodgerblue",
            "green1",
            "teal3",
            "darkcyan1",
            "darkcyan2",
            "darkturquoise",
            "dodgerblue1",
            "green2",
            "darkcyan3",
            "darkcyan4",
            "lightseagreen",
            "darkturquoise1",
            "deepskyblue",
            "lime",
            "springgreen",
            "springgreen1",
            "darkturquoise2",
            "darkturquoise3",
            "deepskyblue1",
            "lime1",
            "springgreen2",
            "springgreen3",
            "mediumspringgreen",
            "cyan",
            "cyan1",
            "maroon1",
            "indigo",
            "indigo1",
            "indigo2",
            "darkviolet",
            "blue1",
            "olive1",
            "dimgray",
            "dimgray1",
            "slateblue",
            "slateblue1",
            "mediumslateblue",
            "olive2",
            "dimgray2",
            "slategray",
            "steelblue",
            "cornflowerblue",
            "cornflowerblue1",
            "olive3",
            "mediumseagreen",
            "cadetblue",
            "cadetblue1",
            "cornflowerblue2",
            "cornflowerblue3",
            "lawngreen",
            "mediumseagreen1",
            "mediumaquamarine",
            "mediumaquamarine1",
            "mediumturquoise",
            "lightskyblue",
            "chartreuse",
            "lightgreen",
            "lightgreen1",
            "mediumaquamarine2",
            "aquamarine",
            "aquamarine1",
            "darkred",
            "purple1",
            "darkmagenta",
            "darkmagenta1",
            "darkviolet1",
            "darkviolet2",
            "olive4",
            "dimgray3",
            "gray",
            "slateblue2",
            "mediumpurple",
            "mediumslateblue1",
            "olive5",
            "gray1",
            "gray2",
            "lightslategray",
            "mediumpurple1",
            "mediumslateblue2",
            "olive6",
            "darkseagreen",
            "darkseagreen1",
            "darkgray",
            "skyblue",
            "lightskyblue1",
            "chartreuse1",
            "yellowgreen",
            "lightgreen2",
            "mediumaquamarine3",
            "skyblue1",
            "lightskyblue2",
            "chartreuse2",
            "lightgreen3",
            "lightgreen4",
            "palegreen",
            "aquamarine2",
            "aquamarine3",
            "darkred1",
            "darkmagenta2",
            "darkmagenta3",
            "darkviolet3",
            "darkviolet4",
            "darkviolet5",
            "darkgoldenrod",
            "indianred",
            "rosybrown",
            "mediumorchid",
            "mediumorchid1",
            "mediumorchid2",
            "darkgoldenrod1",
            "peru",
            "rosybrown1",
            "darkgray1",
            "mediumpurple2",
            "violet",
            "darkgoldenrod2",
            "darkkhaki",
            "tan",
            "darkgray2",
            "lightsteelblue",
            "lightsteelblue1",
            "gold",
            "darkkhaki2",
            "lightgreen5",
            "silver1",
            "lightblue",
            "lightblue1",
            "chartreuse3",
            "greenyellow",
            "palegreen1",
            "palegreen2",
            "paleturquoise",
            "paleturquoise1",
            "red",
            "crimson",
            "mediumvioletred",
            "mediumvioletred1",
            "darkviolet6",
            "magenta",
            "chocolate",
            "indianred1",
            "palevioletred",
            "palevioletred1",
            "orchid",
            "orchid1",
            "darkgoldenrod3",
            "peru1",
            "lightcoral",
            "palevioletred2",
            "orchid2",
            "violet1",
            "goldenrod",
            "sandybrown",
            "tan1",
            "tan2",
            "thistle",
            "plum",
            "gold1",
            "darkkhaki1",
            "burlywood",
            "wheat",
            "lightgray",
            "lavender",
            "yellow",
            "greenyellow1",
            "khaki",
            "palegoldenrod",
            "beige",
            "lightcyan",
            "red1",
            "deeppink",
            "deeppink1",
            "deeppink2",
            "magenta1",
            "magenta2",
            "orangered",
            "tomato",
            "hotpink",
            "hotpink1",
            "hotpink2",
            "violet2",
            "darkorange",
            "coral",
            "lightcoral1",
            "hotpink3",
            "violet3",
            "violet4",
            "orange",
            "sandybrown1",
            "lightsalmon",
            "lightpink",
            "lightpink1",
            "lightpink2",
            "gold2",
            "sandybrown2",
            "khaki1",
            "navajowhite",
            "mistyrose",
            "lavenderblush",
            "yellow1",
            "khaki2",
            "khaki3",
            "moccasin",
            "lightyellow",
            "white",
            "black2",
            "black3",
            "black4",
            "darkslategray",
            "darkslategray1",
            "darkslategray2",
            "darkslategray3",
            "darkslategray4",
            "dimgray4",
            "dimgray5",
            "dimgray6",
            "gray3",
            "gray4",
            "gray5",
            "lightslategray1",
            "darkgray3",
            "darkgray4",
            "darkgray5",
            "silver2",
            "silver3",
            "lightgray1",
            "gainsboro",
            "gainsboro1",
            "honeydew"
        ];
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Warhorse specific
    cmd(value) {
        this.config.isBrowser ? console.log(`%c${value}`, "background:magenta;") : console.log(this.magentaBg(value));
    }

    task(value) {
        value = "  " + value;
        this.config.isBrowser ? console.log(`%c${value}`, "background:blue;") : console.log(this.blueBg(value));
    }

    action(value) {
        value = "  - " + value;
        this.config.isBrowser ? console.log(`%c${value}`, "background:blue;") : console.log(this.blueBg(value));
    }
    stage(value) {
        value = "    -> " + value;
        this.config.isBrowser ? console.log(`%c${value}`, "color:cyan;") : console.log(this.cyan(value));
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Generic
    warning(value) {
        this.config.isBrowser ? console.log(`%c${value}`, "color:orange;") : console.log(this.yellow(value));
    }
    error(value) {
        this.config.isBrowser ? console.log(`%c${value}`, "color:red;") : console.log(this.red(value));
    }

    info(value) {
        this.config.isBrowser ? console.info(value) : console.log(this._stringifyValue(value));
    }

    stringify(value) {
        // console.log(JSON.stringify(value, null, "\t")); // stringify with 2 spaces at each level
        console.log(JSON.stringify(value, null, 2)); // stringify with 2 spaces at each level
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // COLORATION

    /**
     * Marks the text string with a bright style.
     * @param {string} text - the text string to be colorized.
     * @returns {string} - the colorized text string.
     */
    bright(text) {return `\x1b[1m${text}\x1b[0m`;}
    /**
     * Marks the text string with a dim style.
     * @param {string} text - the text string to be colorized.
     * @returns {string} - the colorized text string.
     */
    dim(text) {return `\x1b[2m${text}\x1b[0m`;}
    /**
     * Marks the text string with an italic style.
     * @param {string} text - the text string to be colorized.
     * @returns {string} - the colorized text string.
     */
    italic(text) {return `\x1b[3m${text}\x1b[0m`;}
    /**
     * Marks the text string with an underlined style.
     * @param {string} text - the text string to be colorized.
     * @returns {string} - the colorized text string.
     */
    underline(text) {return `\x1b[4m${text}\x1b[0m`;}
    /**
     * Marks the text string with a blinking style.
     * @param {string} text - the text string to be colorized.
     * @returns {string} - the colorized text string.
     */
    blink(text) {return `\x1b[5m${text}\x1b[0m`;}
    /**
     * Marks the text string with a inversed style.
     * @param {string} text - the text string to be colorized.
     * @returns {string} - the colorized text string.
     */
    inverse(text) {return `\x1b[7m${text}\x1b[0m`;}
    /**
     * Marks the text string as hidden.
     * @param {string} text - the text string to be colorized.
     * @returns {string} - the colorized text string.
     */
    hidden(text) {return `\x1b[8m${text}\x1b[0m`;}

    /**
     * Marks the text string as black.
     * @param {string} text - the text string to be colorized.
     * @returns {string} - the colorized text string.
     */
    black(text) {return `\x1b[30m${text}\x1b[0m`;}
    /**
     * Marks the text string as red.
     * @param {string} text - the text string to be colorized.
     * @returns {string} - the colorized text string.
     */
    red(text) {return `\x1b[31m${text}\x1b[0m`;}
    /**
     * Marks the text string as green.
     * @param {string} text - the text string to be colorized.
     * @returns {string} - the colorized text string.
     */
    green(text) {return `\x1b[32m${text}\x1b[0m`;}
    /**
     * Marks the text string as yellow.
     * @param {string} text - the text string to be colorized.
     * @returns {string} - the colorized text string.
     */
    yellow(text) {return `\x1b[33m${text}\x1b[0m`;}
    /**
     * Marks the text string as blue.
     * @param {string} text - the text string to be colorized.
     * @returns {string} - the colorized text string.
     */
    blue(text) {return `\x1b[34m${text}\x1b[0m`;}
    /**
     * Marks the text string as magenta.
     * @param {string} text - the text string to be colorized.
     * @returns {string} - the colorized text string.
     */
    magenta(text) {return `\x1b[35m${text}\x1b[0m`;}
    /**
     * Marks the text string as cyan.
     * @param {string} text - the text string to be colorized.
     * @returns {string} - the colorized text string.
     */
    cyan(text) {return `\x1b[36m${text}\x1b[0m`;}
    /**
     * Marks the text string as white.
     * @param {string} text - the text string to be colorized.
     * @returns {string} - the colorized text string.
     */
    white(text) {return `\x1b[37m${text}\x1b[0m`;}

    /**
     * Marks the text string with a black background.
     * @param {string} text - the text string to be colorized.
     * @returns {string} - the colorized text string.
     */
    blackBg(text) {return `\x1b[40m${text}\x1b[0m`;}
    /**
     * Marks the text string with a red background.
     * @param {string} text - the text string to be colorized.
     * @returns {string} - the colorized text string.
     */
    redBg(text) {return `\x1b[41m${text}\x1b[0m`;}
    /**
     * Marks the text string with a green background.
     * @param {string} text - the text string to be colorized.
     * @returns {string} - the colorized text string.
     */
    greenBg(text) {return `\x1b[42m${text}\x1b[0m`;}
    /**
     * Marks the text string with a yellow background.
     * @param {string} text - the text string to be colorized.
     * @returns {string} - the colorized text string.
     */
    yellowBg(text) {return `\x1b[43m${text}\x1b[0m`;}
    /**
     * Marks the text string with a blue background.
     * @param {string} text - the text string to be colorized.
     * @returns {string} - the colorized text string.
     */
    blueBg(text) {return `\x1b[44m${text}\x1b[0m`;}
    /**
     * Marks the text string with a magenta background.
     * @param {string} text - the text string to be colorized.
     * @returns {string} - the colorized text string.
     */
    magentaBg(text) {return `\x1b[45m${text}\x1b[0m`;}
    /**
     * Marks the text string with a cyan background.
     * @param {string} text - the text string to be colorized.
     * @returns {string} - the colorized text string.
     */
    cyanBg(text) {return `\x1b[46m${text}\x1b[0m`;}
    /**
     * Marks the text string with a white background.
     * @param {string} text - the text string to be colorized.
     * @returns {string} - the colorized text string.
     */
    whiteBg(text) {return `\x1b[47m${text}\x1b[0m`;}

    rgb(text, r, g, b) {
        let color = this.fg.rgb[36 * r + 6 * g + b];
        return `${color}${text}\x1b[0m`;
    }

    webCode(text, ruleText=null) {
        // Sanity check
        if(ruleText === null) {return text;}

        let rules = ruleText.split(";");

        console.log("RULES" + rules);
        console.log("RULES LENGTH" + rules.length);

        let result = "";
        for(let rule of rules) {
// console.log("RULE" + rule);
            let [style, value] = rule.split(":");
console.log("style: " + style);
console.log("value: " + value);
            if(style !== undefined && value !== undefined) {
                style = style.trim();
                value = value.trim();
                let z = (style === "background") ? 48 : 38;
                let i = this.webColors.indexOf(value);
                if(i === -1) {
                    console.error("Error: Unrecognised style rule passed for web coloration.");
                    return text;
                }
                result += `\x1b[${z};5;${i}m`;
            }

        }

        return result += `${text}\x1b[0m`;
    }

    web(text, rule) {
        let [style, value] = rule.split(":");
        style.trim();
        value.trim();
        let i = this.webColors.indexOf(value);
        if(i === -1) {
            console.error("Error: Unrecognised style rule passed for web coloration.");
            return text;
        }
        return `\x1b[38;5;${i}m${text}\x1b[0m`;
    }

    /**
     * Marks the text string with multiple color and style characteristics.
     * @param {string} text - the text string to be colorized.
     * @param {string} colorBg - the color of the background.
     * @param {string} color - the color of the text string.
     * @param {string} style - the style of the text string.
     * @returns {string} - the colorized text string.
     */
    multi(text, colorBg="black", color="white", style="plain") {
        let colorCode = this.colors[color];
        let colorBgCode = this.colorsBg[colorBg];
        let styleCode = this.styles[style];
        return `${colorBgCode}${colorCode}${styleCode}${text}\x1b[0m`;
    }


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    indent() {
        return "  ".repeat(this.indentCount);
    }

    _stringifyFunction(obj, prop) {
        let placeholder = "____PLACEHOLDER____";
        let fns = [];
        let json = JSON.stringify(obj, function(key, value) {
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
    };

    _stringifyArray(values) {
        let representation = "[\n";
        this.indentCount++;
        if(values.length > 0) {
            values.map(function(value) {
                representation += this.indent() + `${this._stringifyValue(value)},
`;
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
            // representation += this.indent() + `"${key.blue}": ${this._stringifyValue(value)},\n`;
            representation += this.indent() + this.yellow(`"${key}"`) + `: ${this._stringifyValue(value)},
`;
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
            case "function":
                return this._stringifyFunction(value, "Pageant");

            case "boolean":
                return this.magenta(value);

            case "number":
                return this.blue(value);

            case "string":
                return this.green(`"${value}"`);

            case "symbol":
                return this.cyan(`$${value}`);

            default:
                console.log("UNHANDLED TYPE: " + type);
                return;
        }
    }

}

// Exports
module.exports = Pageant;

//
// const color = new Pageant();
//
// // for(let i in color.webColors) {
// //     let test = color.webCode(color.webColors[i], "background:black;color:"+color.webColors[i]);
// //     console.log(test);
// // }
//
// let test = color.webCode("hi there", "background: cyan; color:red;");
// console.log(test);
