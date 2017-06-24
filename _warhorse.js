/**
 * @file _warhorse.js
 * @description The Warhorse command configuration file (Pageant).
 * @author Kyle Alexis Sargeant <kasargeant@gmail.com> {@link https://github.com/kasargeant https://github.com/kasargeant}.
 * @copyright Kyle Alexis Sargeant 2017
 * @license See LICENSE file included in this distribution.
 */

// Warhorse task definitions
function tasks(warhorse) {
    "use strict";

    return {
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // COMMANDS
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // Commands are used to group together any arbitrary number of tasks.
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        "build": function() {

            warhorse.bundle("js", {
                src: "./src/index.js",
                dst: "./dist/index.js"
            });
            warhorse.minify("js", {
                src: "./dist/index.js",
                dst: "./dist/index.min.js"
            });
        },

        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        "distribute": function() {
            warhorse
                .execute("clean")
                .execute("lint")
                .execute("test")
                .execute("build")
                .execute("document");
        },

        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        "clean": function() {
            warhorse.clean(["./dist/*"]);
        },

        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        "fix": function() {
            warhorse.task("Fix JavaScript code style", "jscs", {
                config: "./conf/jscs.json",
                fix: ""
            }, "./test/data/client_src/js/");
        },

        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        "document": function() {
            warhorse.document("js", {
                conf: "conf/jsdoc.json",
                src: "src/js/"
            });
        },

        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        "lint": function() {
            warhorse.lint("js", {
                type: "quality",
                conf: "conf/jshint.json",
                src: "src/js/",
                exclude: "conf/.jshintignore"
            });

            warhorse.lint("js", {
                type: "style",
                conf: "conf/jscs.json",
                src: "src/js/"
            });
        },

        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        "pack": function() {},

        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        "precompile": function() {},

        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        "test": function() {
            warhorse.test("js", {
                tooling: "jest",
                config: "conf/jest.json",
                src: "./test/js/",
                debug: true
            });
        }
    };
}

// Exports
module.exports = tasks;
