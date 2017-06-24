![PAGEANT](/docs/img/pageant_logo.png) [![Build Status](https://travis-ci.org/kasargeant/pageant.svg?branch=master)](https://travis-ci.org/kasargeant/pageant)  [![Coverage Status](https://coveralls.io/repos/github/kasargeant/pageant/badge.svg?branch=master)](https://coveralls.io/github/kasargeant/pageant?branch=master)


### Smart and seamless colored console output across all platforms.

![Smart sheep?](/docs/img/sheep_1024.png)

No configuration necessary.

[ *And no built-ins were harmed in the making of this movie!* ]

## ABOUT

I wanted to enhance the console output of a project I was working on.  I needed color, certainly... but I also needed a smarter way to display more complex, structured information in the console e.g. table data or JS objects.

I looked at what was available on NPM and GitHub and searched for a single solution.  After trying out and experimenting with about twenty different packages - and finding all of them missing something essential.  I needed something:-

* More capable than *chalk.js*, *color.js*, *colour.js*, *col.js*, etc etc...
> ..."Hey, where's my color orange?"
* More standard than things like *prettyjson*
> ..."Look, I just wanted standard JSON... not this YAMLized 'something'!!!"
* Lighter than *terminal-kit*.
> ..."I'm asking for better console output... not a rocket-ship with six different kitchen sinks and a dog kennel!"
* And to work everywhere just the same.  At least in both the browser and with Node.
> "Ok, NPM search results: 0  ...help!!!"

So, finding nothing suitable... I did what any good coder would do... and wrote the solution myself!  

I share it with you now... and I've called it **Pageant**!  (After the ye old medieval-ly colorful procession thingies...)  

But unlike the name, the code is implemented in - very modern - and very vanilla, JavaScript!    

## FEATURES

Ok then, go on... amaze me!

* A safe drop-in replacement for the built-in console - supports all standard functionality.
* Enriches, formats, syntax-hightlights the display of all data - for greater clarity and readability.
* Supports all JS values, objects and code - as well as JSON objects and arrays.
* Uses the full color palette available for 16, 256 and TrueColor capable consoles.
* Works well out-the-box - but can easily be customised by code or by config file.
* Simple to use. 

## INSTALLATION

    npm install pageant

## USAGE

Pageant is safe to use with existing code... just import and assign Pageant at the top of your script:-
                        
```javascript
    const Pageant = require("pageant");
    const console = new Pageant();
```
Then, just as you would normally:-

```javascript
console.log("Hi there!!!");

console.log("%s %s!!!", "hi", "there");

console.log(123, 456);

console.warn("Warning: Ooh 'eck, something's happenin'.");

console.error("Error: Total, complete and absolute system failure and melt-down! Exiting the building is advised.");
```
or if you want enriched data you can:-

```javascript
let valueA = 1;
let valueB = "1";
console.info(valueA);
console.info(valueB);

console.info({
    name: "Almost",
    middle: "A",
    last: "Person",
    isOnline: true
});

let arrayObjects = [
    {id: 10, first: "John", second: "Smith", age: 24, active: true},
    {id: 11, first: "John", second: "Harlow", age: 41, active: true},
    {id: 12, first: "Sally", second: "May", age: 28, active: false}
];
console.table(arrayObjects);
```    

And you will also find that the normal 'dumb' alias of console.debug()... isn't so dumb anymore!

```javascript
console.config.debug = true;
console.debug("This message will shows as debug-mode is set.");

console.config.debug = false;
console.debug("This message will no longer show in the production build.");
```

## CONFIGURATION

    TODO

## DOCUMENTATION

Documentation about usage and configuration can be found in [Wiki:Configuration](https://github.com/kasargeant/pageant/wiki/Configuration) page.

## LICENSE

Pageant was written by Kyle Alexis Sargeant and is shared under the LGPL-3.0 license.  
        
Thus, you can use it freely in anything - both open-source or commercial - without any need to disclose your own code.

 
