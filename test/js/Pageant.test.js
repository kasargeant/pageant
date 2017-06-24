/**
 * @file Pageant.test.js
 * @description Unit tests for the Pageant Class.
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
describe("Class: Warhorse", function() {

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
    // TASKS
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    describe("Tasks", function() {

        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // TASK: BUNDLE
        it("should be able to bundle JS code", function() {

        });
    });


});
