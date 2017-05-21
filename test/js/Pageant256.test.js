/**
 * @file Pageant16.test.js
 * @description Unit tests for the Pageant Class (Node/256-color [using CSS Named colors]).
 * @author Kyle Alexis Sargeant <kasargeant@gmail.com> {@link https://github.com/kasargeant https://github.com/kasargeant}.
 * @copyright Kyle Alexis Sargeant 2017
 * @license See LICENSE.txt file included in this distribution.
 */

"use strict";

// Imports (unmocked)
const Pageant = require("../../src/js/Pageant");
const color = new Pageant({
    isBrowser: false,
    scheme: "256"
});

// Constants
const DUMMY_STRING = "Dummy String";

describe("Class: Pageant (Node/256-color [using CSS Named colors])", function() {

    describe("Standard sanity check", function() {
        it("contains spec with an positive expectation", function() {
            expect(true).toBe(true);
        });
        it("contains spec with a negative expectation", function() {
            expect(!true).toBe(false);
        });
    });

    describe("Colorization functions", function() {

        it("should be able mark a string as bright", function () {
            expect(color.bright(DUMMY_STRING)).toBe(`\x1b[1m${DUMMY_STRING}\x1b[0m`);
        });

        it("should be able mark a string as dim", function () {
            expect(color.dim(DUMMY_STRING)).toBe(`\x1b[2m${DUMMY_STRING}\x1b[0m`);
        });

        it("should be able mark a string as italic", function () {
            expect(color.italic(DUMMY_STRING)).toBe(`\x1b[3m${DUMMY_STRING}\x1b[0m`);
        });

        it("should be able mark a string as underscored", function () {
            expect(color.underline(DUMMY_STRING)).toBe(`\x1b[4m${DUMMY_STRING}\x1b[0m`);
        });

        it("should be able mark a string as blinking", function () {
            expect(color.blink(DUMMY_STRING)).toBe(`\x1b[5m${DUMMY_STRING}\x1b[0m`);
        });

        it("should be able mark a string as inversed", function () {
            expect(color.inverse(DUMMY_STRING)).toBe(`\x1b[7m${DUMMY_STRING}\x1b[0m`);
        });

        it("should be able mark a string as hidden", function () {
            expect(color.hidden(DUMMY_STRING)).toBe(`\x1b[8m${DUMMY_STRING}\x1b[0m`);
        });

        it("should be able mark a string as black", function () {
            expect(color.black(DUMMY_STRING)).toBe(`\x1b[38;5;0m${DUMMY_STRING}\x1b[0m`);
        });

        it("should be able mark a string as red", function () {
            expect(color.red(DUMMY_STRING)).toBe(`\x1b[38;5;160m${DUMMY_STRING}\x1b[0m`);
        });

        it("should be able mark a string as green", function () {
            expect(color.green(DUMMY_STRING)).toBe(`\x1b[38;5;2m${DUMMY_STRING}\x1b[0m`);
        });

        it("should be able mark a string as yellow", function () {
            expect(color.yellow(DUMMY_STRING)).toBe(`\x1b[38;5;190m${DUMMY_STRING}\x1b[0m`);
        });

        it("should be able mark a string as blue", function () {
            expect(color.blue(DUMMY_STRING)).toBe(`\x1b[38;5;21m${DUMMY_STRING}\x1b[0m`);
        });

        it("should be able mark a string as magenta", function () {
            expect(color.magenta(DUMMY_STRING)).toBe(`\x1b[38;5;165m${DUMMY_STRING}\x1b[0m`);
        });

        it("should be able mark a string as cyan", function () {
            expect(color.cyan(DUMMY_STRING)).toBe(`\x1b[38;5;50m${DUMMY_STRING}\x1b[0m`);
        });

        it("should be able mark a string as white", function () {
            // console.log("IDX: " + color.webColors.indexOf("white"));
            expect(color.white(DUMMY_STRING)).toBe(`\x1b[38;5;231m${DUMMY_STRING}\x1b[0m`);
        });


        it("should be able mark a string with a black background", function () {
            expect(color.blackBg(DUMMY_STRING)).toBe(`\x1b[48;5;0m${DUMMY_STRING}\x1b[0m`);
        });

        it("should be able mark a string with a red background", function () {
            expect(color.redBg(DUMMY_STRING)).toBe(`\x1b[48;5;160m${DUMMY_STRING}\x1b[0m`);
        });

        it("should be able mark a string with a green background", function () {
            expect(color.greenBg(DUMMY_STRING)).toBe(`\x1b[48;5;2m${DUMMY_STRING}\x1b[0m`);
        });

        it("should be able mark a string with a yellow background", function () {
            expect(color.yellowBg(DUMMY_STRING)).toBe(`\x1b[48;5;190m${DUMMY_STRING}\x1b[0m`);
        });

        it("should be able mark a string with a blue background", function () {
            expect(color.blueBg(DUMMY_STRING)).toBe(`\x1b[48;5;21m${DUMMY_STRING}\x1b[0m`);
        });

        it("should be able mark a string with a magenta background", function () {
            expect(color.magentaBg(DUMMY_STRING)).toBe(`\x1b[48;5;165m${DUMMY_STRING}\x1b[0m`);
        });

        it("should be able mark a string with a cyan background", function () {
            expect(color.cyanBg(DUMMY_STRING)).toBe(`\x1b[48;5;50m${DUMMY_STRING}\x1b[0m`);
        });

        it("should be able mark a string with a white background", function () {
            // console.log("IDX: " + color.webColors.indexOf("whiteBg"));
            expect(color.whiteBg(DUMMY_STRING)).toBe(`\x1b[48;5;231m${DUMMY_STRING}\x1b[0m`);
        });

    });

});

