/**
 * @file Pageant.test.js
 * @description Unit tests for the Pageant Class (Node).
 * @author Kyle Alexis Sargeant <kasargeant@gmail.com> {@link https://github.com/kasargeant https://github.com/kasargeant}.
 * @copyright Kyle Alexis Sargeant 2017
 * @license See LICENSE file included in this distribution.
 */

"use strict";

// Environment
const IS_CI = process.env.CI;
const IS_TRAVIS = process.env.TRAVIS;

// Imports
const fs = require.requireActual("fs");
process.env.TINTER_TEST = "16"; // Required to fix color values.
const Pageant = require.requireActual("../../src/js/Pageant");

// Helpers

// Failure-tolerant version of fs.readFileSync(filePath) - won't error if file missing.
const readSync = function(filePath) {
    try {
        return fs.readFileSync(filePath);
    } catch(err) {
        return null;
    }
};

// Failure-tolerant version of fs.unlinkSync(filePath) - won't crash if no file already exists!!!
const deleteSync = function(filePath) {
    try {
        fs.unlinkSync(filePath);
    } catch(err) {
        console.error(err.code);
    }
};

// Constants
let workingDirectory = process.cwd();
if(IS_TRAVIS) {workingDirectory = process.env.TRAVIS_BUILD_DIR;} // Usually: "/home/travis/build/kasargeant/warhorse"

// Unit
const console = new Pageant();

// Tests
describe("Class: Pageant", function() {

    describe("Standard sanity check", function() {
        it("contains spec with an positive expectation", function() {
            expect(true).toBe(true);
        });
        it("contains spec with a negative expectation", function() {
            expect(!true).toBe(false);
        });
    });

    describe("Instantiation", function() {

        it("should be instantiatable", function() {
            expect(console).toBeDefined();
        });
    });
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // STANDARD API
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    describe("Formatted styles", function() {

        console.indentLeft = 0;
        console.indentRight = 80;

        // LOG
        it("should correctly log", function() {
            let output = console.log("This is a log message.");
            expect(output).toBe("This is a log message.");
        });
        it("should correctly log", function() {
            let output = console.log("This is a very long string that's designed to show word-wrapping at some point along it's length.");
            expect(output).toBe("This is a very long string that's designed to show word-wrapping at some point\nalong it's length.");
        });

        // WARN
        it("should correctly warn", function() {
            let output = console.warn("This is a log message.");
            expect(output).toBe("\u{1b}[1m\u{1b}[93mThis is a log message.\u{1b}[0m");
        });
        it("should correctly warn", function() {
            let output = console.warn("This is a very long string that's designed to show word-wrapping at some point along it's length.");
            expect(output).toBe("\u{1b}[1m\u{1b}[93mThis is a very long string that's designed to show word-wrapping at some point\nalong it's length.\u{1b}[0m");
        });

        // ERROR
        it("should correctly error", function() {
            let output = console.error("This is a log message.");
            expect(output).toBe("\u{1b}[1m\u{1b}[91mThis is a log message.\u{1b}[0m");
        });
        it("should correctly error", function() {
            let output = console.error("This is a very long string that's designed to show word-wrapping at some point along it's length.");
            expect(output).toBe("\u{1b}[1m\u{1b}[91mThis is a very long string that's designed to show word-wrapping at some point\nalong it's length.\u{1b}[0m");
        });
    });

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // FORMATTED LOGGING
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    describe("Formatted styles", function() {

        it("should correctly display output formatted with h0", function() {
            let output = console.h0("hi there");
            expect(output).toBe("\u{1b}[7m\u{1b}[1m\u{1b}[40m\u{1b}[1m\u{1b}[97mhi there\u{1b}[0m\n");
        });
        it("should correctly display output formatted with h1", function() {
            let output = console.h1("hi there");
            expect(output).toBe("\u{1b}[3m\u{1b}[1m\u{1b}[44m\u{1b}[1m\u{1b}[97mhi there\u{1b}[0m\n");
        });
        it("should correctly display output formatted with h2", function() {
            let output = console.h2("hi there");
            expect(output).toBe("  \u{1b}[3m\u{1b}[1m\u{1b}[44m\u{1b}[1m\u{1b}[93mhi there\u{1b}[0m\n  ");
        });
        it("should correctly display output formatted with h3", function() {
            let output = console.h3("hi there");
            expect(output).toBe("    \u{1b}[1m\u{1b}[37mhi there\u{1b}[0m");
        });
        it("should correctly display output formatted with h4", function() {
            let output = console.h4("hi there");
            expect(output).toBe("      \u{1b}[1m\u{1b}[32mhi there\u{1b}[0m");
        });

    });


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // INFO
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    describe("Info values", function() {

        it("should correctly display info for a value of type: string", function() {
            let output = console.info("string");
            expect(output).toBe(`\u{1b}[1m\u{1b}[32m"string"\u{1b}[0m`);
        });

    });

});
