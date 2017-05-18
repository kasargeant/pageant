# PAGEANT

## ABOUT

I needed color in my console!

Not just the odd colored string... but color for whatever code or data I wanted to output!

I looked at colors.js, colour.js, chalk.js, prettyjson, terminal-kit... just to name the more popular options.

But I couldn't find any light-weight solution that JUST focused on the console.  Each library module was either too limited, too heavy-weight (functions and footprint) or just simply wasn't supported, never to be brought into a post ES2015 world!

So, like any good coder, I decided to write the solution myself.

I called it Pageant, in the medieval sense of a procession of dressed-up and colourful individuals and scenes passing by.  

Which is sort of what... all console output is. 

Anyway, I hope you find it as useful as I! ;)


## FEATURES

* Implemented cleanly in ES2015.  No prototypes were harmed in this movie!
* Console text can be dressed with: colors, background colors and styles.
* Colored or styled text is easily composable.
* Works the same in Node and in the browser.
* Works out-the-box - colorizing without configuration.
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
 
