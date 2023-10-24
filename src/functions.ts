//Type Aliases
type stringOrNumber = string | number;

//Literal Types
let myName: "Dave" | "John"; //only these are accepted

//functions
const add = (a: number, b: number): number => {
  return a + b;
  //if func does not return anything its return type is void
};

// function types

type mathFunction = (a: number, b: number) => number;

const multiply: mathFunction = function (c, d) {
  return c * d;
};

//optional parameters - required first, optional last

const addAll = (a: number, b: number, c?: number): number => {
  // type guard
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};
