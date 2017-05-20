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
            scheme: 16,
            isBrowser: false
        };
        this.config = Object.assign(this.defaults, options);

        this.console = (typeof(window) === "undefined") ? global.console : window.console;

        this.indentCount = 0;

        this.styles = [
            "reset",
            "bright",
            "dim",
            "italic",
            "underline",
            "blink",
            "plain",
            "inverse",
            "hidden"
        ];

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
            "gray-bright",
            "red-bright",
            "lime-bright",
            "yellow-bright",
            "blue-bright",
            "fuchsia-bright",
            "aqua-bright",
            "white-bright",
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

        this.ansiColors = {
            "black": 0,
            "maroon": 1,
            "green": 2,
            "olive": 3,
            "navy": 4,
            "purple": 5,
            "teal": 6,
            "silver": 7,
            "gray-bright": 8,
            "red-bright": 9,
            "lime-bright": 10,
            "yellow-bright": 11,
            "blue-bright": 12,
            "fuchsia-bright": 13,
            "aqua-bright": 14,
            "white-bright": 15,
            "black1": 0,
            "navy1": 4,
            "darkblue": 4,
            "mediumblue": 4,
            "mediumblue1": 4,
            "blue": 4,
            "darkgreen": 2,
            "teal1": 6,
            "teal2": 6,
            "darkcyan": 6,
            "royalblue": 4,
            "dodgerblue": 4,
            "green1": 2,
            "teal3": 6,
            "darkcyan1": 6,
            "darkcyan2": 6,
            "darkturquoise": 6,
            "dodgerblue1": 4,
            "green2": 2,
            "darkcyan3": 6,
            "darkcyan4": 6,
            "lightseagreen": 6,
            "darkturquoise1": 6,
            "deepskyblue": 4,
            "lime": 2,
            "springgreen": 2,
            "springgreen1": 2,
            "darkturquoise2": 6,
            "darkturquoise3": 6,
            "deepskyblue1": 4,
            "lime1": 2,
            "springgreen2": 2,
            "springgreen3": 2,
            "mediumspringgreen": 2,
            "cyan": 6,
            "cyan1": 6,
            "maroon1": 1,
            "indigo": 5,
            "indigo1": 5,
            "indigo2": 5,
            "darkviolet": 5,
            "blue1": 4,
            "olive1": 3,
            "dimgray": 7,
            "dimgray1": 7,
            "slateblue": 5,
            "slateblue1": 5,
            "mediumslateblue": 5,
            "olive2": 3,
            "dimgray2": 7,
            "slategray": 7,
            "steelblue": 4,
            "cornflowerblue": 4,
            "cornflowerblue1": 4,
            "olive3": 3,
            "mediumseagreen": 2,
            "cadetblue": 4,
            "cadetblue1": 4,
            "cornflowerblue2": 4,
            "cornflowerblue3": 4,
            "lawngreen": 2,
            "mediumseagreen1": 6,
            "mediumaquamarine": 6,
            "mediumaquamarine1": 6,
            "mediumturquoise": 6,
            "lightskyblue": 4,
            "chartreuse": 2,
            "lightgreen": 2,
            "lightgreen1": 2,
            "mediumaquamarine2": 6,
            "aquamarine": 6,
            "aquamarine1": 6,
            "darkred": 1,
            "purple1": 5,
            "darkmagenta": 5,
            "darkmagenta1": 5,
            "darkviolet1": 5,
            "darkviolet2": 5,
            "olive4": 3,
            "dimgray3": 7,
            "gray": 7,
            "slateblue2": 5,
            "mediumpurple": 5,
            "mediumslateblue1": 5,
            "olive5": 3,
            "gray1": 7,
            "gray2": 7,
            "lightslategray": 7,
            "mediumpurple1": 5,
            "mediumslateblue2": 5,
            "olive6": 3,
            "darkseagreen": 2,
            "darkseagreen1": 2,
            "darkgray": 7,
            "skyblue": 4,
            "lightskyblue1": 4,
            "chartreuse1": 2,
            "yellowgreen": 2,
            "lightgreen2": 2,
            "mediumaquamarine3": 2,
            "skyblue1": 4,
            "lightskyblue2": 4,
            "chartreuse2": 2,
            "lightgreen3": 2,
            "lightgreen4": 2,
            "palegreen": 2,
            "aquamarine2": 6,
            "aquamarine3": 6,
            "darkred1": 1,
            "darkmagenta2": 5,
            "darkmagenta3": 5,
            "darkviolet3": 5,
            "darkviolet4": 5,
            "darkviolet5": 5,
            "darkgoldenrod": 3,
            "indianred": 1,
            "rosybrown": 3,
            "mediumorchid": 5,
            "mediumorchid1": 5,
            "mediumorchid2": 5,
            "darkgoldenrod1": 3,
            "peru": 3,
            "rosybrown1": 3,
            "darkgray1": 7,
            "mediumpurple2": 5,
            "violet": 5,
            "darkgoldenrod2": 3,
            "darkkhaki": 3,
            "tan": 3,
            "darkgray2": 7,
            "lightsteelblue": 4,
            "lightsteelblue1": 4,
            "gold": 3,
            "darkkhaki2": 3,
            "lightgreen5": 2,
            "silver1": 7,
            "lightblue": 4,
            "lightblue1": 4,
            "chartreuse3": 2,
            "greenyellow": 2,
            "palegreen1": 2,
            "palegreen2": 2,
            "paleturquoise": 6,
            "paleturquoise1": 6,
            "red": 1,
            "crimson": 1,
            "mediumvioletred": 5,
            "mediumvioletred1": 5,
            "darkviolet6": 5,
            "magenta": 5,
            "chocolate": 5,
            "indianred1": 5,
            "palevioletred": 5,
            "palevioletred1": 5,
            "orchid": 5,
            "orchid1": 5,
            "darkgoldenrod3": 3,
            "peru1": 3,
            "lightcoral": 5,
            "palevioletred2": 5,
            "orchid2": 5,
            "violet1": 5,
            "goldenrod": 3,
            "sandybrown": 3,
            "tan1": 3,
            "tan2": 3,
            "thistle": 3,
            "plum": 5,
            "gold1": 3,
            "darkkhaki1": 3,
            "burlywood": 3,
            "wheat": 3,
            "lightgray": 7,
            "lavender": 7,
            "yellow": 3,
            "greenyellow1": 2,
            "khaki": 3,
            "palegoldenrod": 3,
            "beige": 3,
            "lightcyan": 6,
            "red1": 1,
            "deeppink": 1,
            "deeppink1": 1,
            "deeppink2": 1,
            "magenta1": 5,
            "magenta2": 5,
            "orangered": 1,
            "tomato": 1,
            "hotpink": 1,
            "hotpink1": 1,
            "hotpink2": 1,
            "violet2": 5,
            "darkorange": 1,
            "coral": 1,
            "lightcoral1": 1,
            "hotpink3": 1,
            "violet3": 5,
            "violet4": 5,
            "orange": 1,
            "sandybrown1": 1,
            "lightsalmon": 1,
            "lightpink": 1,
            "lightpink1": 1,
            "lightpink2": 1,
            "gold2": 3,
            "sandybrown2": 3,
            "khaki1": 3,
            "navajowhite": 7,
            "mistyrose": 7,
            "lavenderblush": 7,
            "yellow1": 3,
            "khaki2": 3,
            "khaki3": 3,
            "moccasin": 3,
            "lightyellow": 3,
            "white": 7,
            "black2": 0,
            "black3": 0,
            "black4": 0,
            "darkslategray": 7,
            "darkslategray1": 7,
            "darkslategray2": 7,
            "darkslategray3": 7,
            "darkslategray4": 7,
            "dimgray4": 7,
            "dimgray5": 7,
            "dimgray6": 7,
            "gray3": 7,
            "gray4": 7,
            "gray5": 7,
            "lightslategray1": 7,
            "darkgray3": 7,
            "darkgray4": 7,
            "darkgray5": 7,
            "silver2": 7,
            "silver3": 7,
            "lightgray1": 7,
            "gainsboro": 7,
            "gainsboro1": 7,
            "honeydew": 7,
        };
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Warhorse specific
    cmd(value) {
        this.config.isBrowser ? this.console.log(`%c${value}`, "background:magenta;") : this.console.log(this.magentaBg(value));
    }

    task(value) {
        value = "  " + value;
        this.config.isBrowser ? this.console.log(`%c${value}`, "background:blue;") : this.console.log(this.blueBg(value));
    }

    action(value) {
        value = "  - " + value;
        this.config.isBrowser ? this.console.log(`%c${value}`, "background:blue;") : this.console.log(this.blueBg(value));
    }
    stage(value) {
        value = "    -> " + value;
        this.config.isBrowser ? this.console.log(`%c${value}`, "color:cyan;") : this.console.log(this.cyan(value));
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Generic
    log(value) {
        this.config.isBrowser ? this.console.log(`%c${value}`, "color:orange;") : this.console.log(this._styleValue(value));
    }
    warning(value) {
        this.config.isBrowser ? this.console.log(`%c${value}`, "color:orange;") : this.console.log(this.yellow(value));
    }
    error(value) {
        this.config.isBrowser ? this.console.log(`%c${value}`, "color:red;") : this.console.log(this.red(value));
    }

    info(value) {
        this.config.isBrowser ? console.info(value) : this.console.log(this._stringifyValue(value));
    }

    stringify(value) {
        // this.console.log(JSON.stringify(value, null, "\t")); // stringify with 2 spaces at each level
        this.console.log(JSON.stringify(value, null, 2)); // stringify with 2 spaces at each level
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

    /**
     * Marks the text string with multiple CSS named color characteristics.
     * @param {string} text - the text string to be colorized.
     * @param {string} ruleText - the css rules (NOTE: supports only 'background' and 'color' rules).
     * @returns {string} - the colorized text string.
     */
    css(text, ruleText=null) {
        // Sanity check
        if(ruleText === null) {return text;}

        let rules = ruleText.split(";");

        // this.console.log("RULES" + rules);
        // this.console.log("RULES LENGTH" + rules.length);

        let result = "";
        for(let rule of rules) {
// this.console.log("RULE" + rule);
            let [style, value] = rule.split(":");
// this.console.log("style: " + style);
// this.console.log("value: " + value);
            if(style !== undefined && value !== undefined) {
                style = style.trim();
                value = value.trim();
                let z = (style === "background") ? 48 : 38;
                let i = this.webColors.indexOf(value);
                if(i === -1) {
                    console.error("Error: Unrecognised style rule passed for web coloration.");
                    return text;
                }
                result += `\x1b[3m\x1b[${z};5;${i}m`;
            }

        }

        return result += `${text}\x1b[0m`;
    }


    _style16(text, color, colorBg, style) {

        let result = "";
        if(style !== undefined) {
            let i = this.styles.indexOf(style);
            if(i === -1) {
                console.error(`Error: Unrecognised text style: '${style}'.`);
                return text;
            }
            result += `\x1b[${i}m`;

        }
        if(colorBg !== undefined) {
            let i = this.ansiColors[colorBg];
            if(i === undefined || i > 15) {
                console.error(`Error: Unrecognised background color: '${colorBg}'.`);
                return text;
            }
            result += `\x1b[${40 + i}m`;

        }
        if(color !== undefined) {
            let i = this.ansiColors[color];
            if(i === undefined || i > 15) {
                console.error(`Error: Unrecognised text color: '${color}'.`);
                return text;
            }
            result += `\x1b[${30 + i}m`;

        }
        return result += `${text}\x1b[0m`;
    }

    _style256(text, color, colorBg, style) {

        let result = "";
        if(style !== undefined) {
            let i = this.styles.indexOf(style);
            if(i === -1) {
                console.error(`Error: Unrecognised text style: '${style}'.`);
                return text;
            }
            result += `\x1b[${i}m`;

        }
        if(colorBg !== undefined) {
            let i = this.webColors.indexOf(colorBg);
            if(i === -1 || i > 255) {
                console.error(`Error: Unrecognised background color: '${colorBg}'.`);
                return text;
            }
            result += `\x1b[48;5;${i}m`;

        }
        if(color !== undefined) {
            let i = this.webColors.indexOf(color);
            if(i === -1 || i > 255) {
                console.error(`Error: Unrecognised text color: '${color}'.`);
                return text;
            }
            result += `\x1b[38;5;${i}m`;

        }
        return result += `${text}\x1b[0m`;
    }

    _styleTruecolor(text, color, colorBg, style) {

        let result = "";
        if(style !== undefined) {
            let i = this.styles.indexOf(style);
            if(i === -1) {
                console.error(`Error: Unrecognised text style: '${style}'.`);
                return text;
            }
            result += `\x1b[${i}m`;
        }
        if(colorBg !== undefined && colorBg.constructor === Array) {
            if(colorBg.length !== 3) {
                console.error(`Error: Unrecognised background color: '${colorBg}'.`);
                return text;
            }
            result += `\x1b[48;2;${colorBg[0]};${colorBg[1]};${colorBg[2]}m`;

        }
        if(color !== undefined && color.constructor === Array) {
            if(color.length !== 3) {
                console.error(`Error: Unrecognised text color: '${color}'.`);
                return text;
            }
            result += `\x1b[38;2;${color[0]};${color[1]};${color[2]}m`;

        }
        return result += `${text}\x1b[0m`;
    }

    /**
     * Marks the text string with multiple CSS named color and style characteristics.
     * @param {string} text - the text string to be colorized and/or styled.
     * @param {string|Array} color - the name of the HTML color.
     * @param {string|Array} colorBg - the name of the HTML background color.
     * @param {string} style - the name of the HTML text style.
     * @returns {string} - the colorized/styled text string.
     */
    style(text, color, colorBg, style) {

        if(this.config.scheme === 16) {
            return this._style16(text, color, colorBg, style);
        } else if(this.config.scheme === 256) {
            return this._style256(text, color, colorBg, style);
        } else if(this.config.scheme === "full") {
            return this._styleTruecolor(text, color, colorBg, style);
        }
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
            case "function":
                return this._stringifyFunction(value, "Pageant");

            case "boolean":
                return this.magenta("" + value);

            case "number":
                return this.blue("" + value);

            case "string":
                return this.green("" + value);

            case "symbol":
                return this.cyan("" + value);

            default:
                this.console.log(`Error: Unhandled type: '${type}' for value: ${value}`);
                return;
        }
    }

}

// Exports
module.exports = Pageant;




//
// const color = new Pageant({
//     scheme: 256,
//     isBrowser: false
// });

// for(let i in color.webColors) {
//     let test = color.css(color.webColors[i], "background:black;color:"+color.webColors[i]);
//     console.log(test);
// }

// for(let style of color.styles) {
//     for(let bg in color.webColors) {
//         for(let fg in color.webColors) {
//             let test = color.style("hi there", color.webColors[fg], color.webColors[bg], style);
//             console.log(test);
//         }
//     }
// }

// for(let style of color.styles) {
//     for (let bgR = 0; bgR < 255; bgR+=8) {
//         for (let bgG = 0; bgG < 255; bgG+=8) {
//             for (let bgB = 0; bgB < 255; bgB+=8) {
//                 for (let fgR = 0; fgR < 255; fgR+=8) {
//                     for (let fgG = 0; fgG < 255; fgG+=8) {
//                         for (let fgB = 0; fgB < 255; fgB+=8) {
//                             let test = color.style("hi there", [fgR, fgG, fgB], [bgR, bgG, bgB], style);
//                             console.log(test);
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }





// let test = color.style("hi there", "cyan", "red", "italic");
// console.log(test);


///////
// Test overriding console
// let console = new Pageant({
//     scheme: 256,
//     isBrowser: false
// });
// const testJSON = require("../scratch/ansiCols.json");
// console.log(testJSON);
// console.log("a string");
// console.log(123);
// console.log(true);