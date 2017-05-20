# PAGEANT

## One console to rule them all!!!

![Smart sheep?](/docs/img/sheep_1024.png)

### ...smart and seamless colored console output across all devices.

## ABOUT

I needed something to help make my console output clearer and more useful.

* Cleaner than *color.js*,
* Much more capable than *chalk.js*.
* Lighter than *terminal-kit*.
* And faster than all of them!

But there wasn't anything.

So I designed Pageant.

And implemented it in clean and modern ES2015.
  
*And no prototypes were harmed in the making of this movie!*


## FEATURES

* Console output is colored... across all devices,
* Syntax-highlighting of code and JSON is default.
* Everything can be customised: colors, background colors and styles.
* Works automatically with 16, 256 and TrueColor consoles.
* A single and simple API that does all the heavy-lifting for you.
* Drop-in replacement for console,
* Drop-in replacement for color.js or chalk.js 
* Simple to use - 5 minutes to learn!


## INSTALLATION

    npm install pageant

## USAGE

### Setup

First import Pageant and instantiate with a useful identifier:-
                        
    const Pageant = require("pageant");
    const color = new Pageant({isBrowser: false});

### String colorization

Single style or color:-

    console.log(color.green("I'm green!"));

    console.log(color.redBg("I've a red background!"));

    console.log(color.underline("This text uses underline."));

Multiple styles

    console.log(color.multi("I'm multi-styled!", "yellow", "blue", "italic"));


Composing styles

    let composed = "I'm " + color.green("green") + " and " + color.red("red") + " together.";
    console.log(composed);
    
    let composed = `I'm ${color.green("blue")} and ${color.red("white")} together.";
    console.log(composed);
    
### Object colorization

//TODO

## LICENSE INFORMATION
 
 Please see LICENSE.txt included in this distribution.
 
