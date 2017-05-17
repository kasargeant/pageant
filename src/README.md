# PAGEANT

## ABOUT

colors.js and colour.js are popular string styling packages, but they extend String.prototype which can cause problems. 

chalk.js is another that claims to be "done right.  But right or not, it's inflexible for all but simple string cases - and doesn't handle colorisation of other typical console output e.g. Objects and JSON.
 
I needed something not just light-weight and fast - but also cleanly implemented - and capable of colorising ALL console output - rather than just simple strings.

Thus Pageant was created! ;)

## FEATURES

* Console text can be dressed with: colors, background colors and styles.
* Colored or styled text is easily composable.
* Implemented cleanly in ES2015.  No prototypes were harmed in this movie!
* Works out-the-box - colorizing without configuration.
* Works the same in Node and in the browser.
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
 
