module.exports = {

    aNull: null,
    aBoolean: true,
    aNumber: 123.456,
    aStringEmpty: "",
    aString: "JavaScript",
    anArray: ["es51", "es2015", "es2015+JSX"],
    anArrayEmpty: ["es51", "es2015", "es2015+JSX"],
    anObjectEmpty: {},
    anObject: {
        name: "Untitled",
        version: "0.0.0",
        keywords: ["javascript"],
        author: "undefined",
        email: "undefined@undefined.com",
        license: "GPL-3.0"
    },
    anUndefined: undefined,
    anArrayWithinObject: {
        includePaths: ["./src/sass"]
    },
    anObjectWithinArray: [{
        style: [1, 2, 3],
        syntax: "something"
    }],
    aFunction: function(value) {return value * value;}
};
