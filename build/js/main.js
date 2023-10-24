"use strict";
//tsc --init to initialize and make tsconfig.json
// tsc -w to watch all files
let strArr = ["one", "hey", "Dave"]; // can put/push only strings
let guitars = ["Strat", "Les", 5150]; // can put str/bool in any order
let mixedData = ["EVH", 1984, true];
let bands = [];
// To lock order and length create a tuple
let myTuple = ["Dave", 42, true];
//Datatype is locked in
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
let evh = {
    name: "George Harrison",
    active: false,
    albums: ["Abbey Road", "Revolver"],
};
//enums (Not in JS)
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
