![PAGEANT](/docs/img/pageant_logo.png)

### Smart and seamless colored console output across all platforms.

![Smart sheep?](/docs/img/sheep_1024.png)

No configuration necessary.

[ *And no built-ins were harmed in the making of this movie!* ]

## ABOUT

I wanted to enhance the console output of a project I was working on.  I needed color, certainly... but I also needed a better way to display things in the console like JSON.

I looked at what was available on NPM and GitHub and searched for a single solution.  After trying out and experimenting with about twenty different packages - and finding all of them missing something essential.  I concluded that what I wanted, had to be:-

* More capable than *chalk.js*, *color.js*, *colour.js*, *col.js*, etc etc...
> ..."Hey, where's my color orange?"
* More standard than things like *prettyjson*
> ..."Look, I just wanted standard JSON... not this YAMLized 'something'!!!"
* Lighter than *terminal-kit*.
> ..."I'm asking for better console output... not a rocket-ship with six different kitchen sinks and a dog kennel!"
* And to work everywhere just the same.  At least in both the browser and with Node.
> "Ok, NPM search results: 0  ...help!!!"

Thus, faced with the abyss... I did what any good coder would do... and wrote the solution myself.  

I share it with you now... and I've called it **Pageant**!  (After the ye old medievally colorful procession thingies...)  

Unlike the name, the code is implemented in very modern and very vanilla JavaScript!  

And not a package dependency in sight! ;)
  

## FEATURES

Go on... amaze me!

* Console output is fully-colored... consistent across Node and browsers,
* Offers developers the entire color palette available for 16, 256 and TrueColor capable consoles.
* A single and simple API - utilising the [CSS3 Named Colors](https://www.w3.org/TR/css-color-4/#named-colors) scheme or, if needed, direct RGB values. 
* Syntax-highlighting of code and JSON by default.
* Everything can be customised - on the fly - or in a single config file.
* A safe drop-in replacement for the built-in console,
* A drop-in replacement for colorizers like: *chalk* and *color.js* 
* So simple to use... 

...that by the end of this page and you'll already have learnt all you need.

Happy colorizing! ;)


## INSTALLATION

    npm install pageant

## USAGE

Pageant doesn't care what you use it for.  It has no dependencies other than an internal one to the system console.

Thus, you can import, rename and reuse it - as you please.

### As a console drop-in...

Completely safe to use with existing code... just import and assign Pageant at the top of your script:-
                        
```javascript
    const Pageant = require("pageant");
    const console = new Pageant({isBrowser: false});
```
Then, just as you would normally:-

```javascript
console.log("Hi there!!!");
console.log(123);
console.log({
    name: "Almost",
    middle: "A",
    last: "Person",
    isOnline: true
});

console.warn("Warning: Ooh 'eck, something's happenin'.");

console.error("Error: Total, complete and absolute system failure and melt-down! Exit is advised.");
```    

However, you will also find that the normal 'dumb' alias of console.debug()... isn't so dumb anymore!

```javascript
console.debug("This message only shows if Pageant is in debug-mode.");
```

Debug-mode and all other Pageant's other settings can be defined either at instantiation:-

```javascript
const console = new Pageant({debug: true});
```    

Or by the creation of a config file whose path is passed to Pageant:-

```javascript
const console = new Pageant({config: "./conf/pageant.json"});
```    

### As a string colorizer and styler...

Pageant doesn't modify JavaScript's built-in string - or any other nastiness!  Instead, it colorizes text by inserting invisible unicode markers to tell the console how to color the text it's working with.

So Pageant's colored strings - are simply ordinary JavaScript strings... and will do anything an ordinary JavaScript string will do.

Ok to start coloring - first we importing and instantiating Pageant at the top of the script - and also tell it - how many colors our console supports:-

```javascript
const Pageant = require("pageant");
const color = new Pageant({
    scheme: "256"
    isBrowser: false
});
```                        

Single style or color:-

```javascript
console.log(color.green("I'm green!"));

console.log(color.redBg("I've a red background!"));

console.log(color.underline("This text uses underline."));
```

Multiple styles using CSS naming:-

```javascript
console.log(color.style("I'm multi-styled!", "cornflowerblue", "orange", "italic"));
```
Composing styles

```javascript
let composed = "I'm " + color.green("green") + " and " + color.red("red") + " together.";
console.log(composed);

let composed = `I'm ${color.green("blue")} and ${color.red("white")} together.";
console.log(composed);
```

TrueColor support.
    
If your console supports TrueColor then Pageant also gives you access to it's full RGB range.

```javascript
console.log(color.style("I'm multi-styled!", [255,255,128], [192, 0, 55], "italic"));
```

    
### Object colorization

//TODO

## LICENSE INFORMATION
 
 Please see LICENSE.txt included in this distribution.
 
