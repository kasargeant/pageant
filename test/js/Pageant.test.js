/**
 * @file Pageant.test.js
 * @description Unit tests for the Pageant Class (core functionality).
 * @author Kyle Alexis Sargeant <kasargeant@gmail.com> {@link https://github.com/kasargeant https://github.com/kasargeant}.
 * @copyright Kyle Alexis Sargeant 2017
 * @license See LICENSE.txt file included in this distribution.
 */

"use strict";

// Imports (unmocked)
const Pageant = require("../../src/js/Pageant");
const console = new Pageant();

// Constants
const sampleJS = require("../data/sample");
const sampleJSON = require("../data/sample.json");

const DUMMY_STRING = "Dummy String";

describe("Class: Pageant (Node/16-color ANSI mode)", function() {

    describe("Standard sanity check", function() {
        it("contains spec with an positive expectation", function() {
            expect(true).toBe(true);
        });
        it("contains spec with a negative expectation", function() {
            expect(!true).toBe(false);
        });
    });

    describe("Instantiation", function() {

        it("should be defined", function () {
            expect(console).toBeDefined();
        });

        it("should have a configuration", function () {
            expect(console.config).toBeDefined();
        });

        it("should have a valid color scheme", function () {
            const schemes = ["16", "256", "truecolor"];
            expect(schemes.includes(console.config.scheme)).toBe(true);
        });

    });

    describe("Console standard calls", function() {

        it("should have the standard: log()", function () {
            expect(console.log).toBeDefined();
        });

    });

    describe("Console colorization", function() {

    });

});

