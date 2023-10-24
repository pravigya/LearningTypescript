//tsc --init to initialize and make tsconfig.json
// tsc -w to watch all files

let strArr = ["one", "hey", "Dave"]; // can put/push only strings
let guitars = ["Strat", "Les", 5150]; // can put str/bool in any order
let mixedData = ["EVH", 1984, true];

let bands: string[] = [];

// To lock order and length create a tuple
let myTuple: [string, number, boolean] = ["Dave", 42, true];

//Datatype is locked in
const exampleObj = {
  prop1: "Dave",
  prop2: true,
};

//Custom Types
type Guitarist = {
  name: string;
  active: boolean;
  albums: string[];
};

let evh: Guitarist = {
  name: "George Harrison",
  active: false,
  albums: ["Abbey Road", "Revolver"],
};

//enums (Not in JS)
enum Grade {
  U,
  D,
  C,
  B,
  A,
}
