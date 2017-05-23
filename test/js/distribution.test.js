/**
 * @file distrbution.test.js
 * @description Unit tests for the Pageant Class (Node/16-color ANSI).
 * @author Kyle Alexis Sargeant <kasargeant@gmail.com> {@link https://github.com/kasargeant https://github.com/kasargeant}.
 * @copyright Kyle Alexis Sargeant 2017
 * @license See LICENSE.txt file included in this distribution.
 */

"use strict";

// Imports (unmocked)
const Pageant = require("../../dist/index");
const color = new Pageant({
    isBrowser: false,
    scheme: "16"
});


describe("Distribution test: Pageant", function() {

    describe("Standard sanity check", function () {
        it("contains spec with an positive expectation", function () {
            expect(true).toBe(true);
        });
        it("contains spec with a negative expectation", function () {
            expect(!true).toBe(false);
        });
    });

    describe("Instantiation", function () {
        it("should have instantiated", function () {
            expect(color).toBeDefined();
        });
        it("should have color methods", function () {
            expect(color.red).toBeDefined();
        });
    });
});


