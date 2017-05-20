# PAGEANT

## One console to rule them all!!!

![Smart sheep?](/docs/img/sheep_1024.png)

### ...smart and seamless colored console output across all devices.

[ *No prototypes were harmed in the making of this movie!* ]

## ABOUT

I needed something to help make my console output clearer and more useful.

It had to be:-

* More capable than *chalk.js*
> ..."Hey, where's my color orange?"
* Cleaner than *color.js*
> ..."Because, what have you done to that prototype!"
* More interoperable than *prettyjson*.
> ..."Look, I just wanted standard JSON... not this YAMLized 'something'!!!"
* Lighter than *terminal-kit*.
> ..."I'm asking for a better console... not a rocket-ship with six different kitchen sinks and a dog kennel!"
* And to work everywhere just the same.  At least in both the browser and with Node.
> But there simply wasn't anything that did what I wanted....

So I wrote Pageant!  

Implemented in modern vanilla JavaScript.  Not a dependency in sight!
  

## FEATURES

Yes, but what the hell can it do for me???

* Console output is fully-colored... across all devices,
* A short and simple API - utilising a familiar CSS naming scheme. 
* Syntax-highlighting of code and JSON is default.
* Works automatically between 16, 256 and TrueColor capable  consoles.
* Everything can be customised - on the fly - or in a single config file.
* Drop-in replacement for console,
* Drop-in replacement for color.js or chalk.js 
* Simple to use - and just 5 minutes to learn! ;)


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
 
