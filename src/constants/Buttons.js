export const Buttons = [
  // functions
  {
    slug: "reset",
    name: "AC",
    type: "function",
    formula: null,
    order: 0,
  },
  {
    slug: "plus_minus",
    name: "±",
    type: "function",
    formula: null, // todo
    order: 1,
  },
  {
    slug: "percent",
    name: "%",
    type: "function",
    formula: "/100",
    order: 2,
  },
  {
    slug: "del",
    name: "DEL",
    type: "function",
    formula: null,
    order: 16,
  },

  // operators
  {
    slug: "add",
    name: "+",
    type: "operator",
    formula: "+",
    order: 15,
  },
  {
    slug: "sub",
    name: "-",
    type: "operator",
    formula: "-",
    order: 11,
  },
  {
    slug: "multiply",
    name: "×",
    type: "operator",
    formula: "*",
    order: 7,
  },
  {
    slug: "divide",
    name: "÷",
    type: "operator",
    formula: "/",
    order: 3,
  },
  {
    slug: "equals",
    name: "=",
    type: "operator",
    formula: null,
    order: 19,
  },
  {
    slug: "bracket_left",
    name: "(",
    type: "operator",
    formula: "(",
    order: 20,
  },
  {
    slug: "bracket_right",
    name: ")",
    type: "operator",
    formula: ")",
    order: 21,
  },

  // numbers
  {
    slug: "1",
    name: "1",
    type: "number",
    formula: "1",
    order: 12,
  },
  {
    slug: "2",
    name: "2",
    type: "number",
    formula: "2",
    order: 13,
  },
  {
    slug: "3",
    name: "3",
    type: "number",
    formula: "3",
    order: 14,
  },
  {
    slug: "4",
    name: "4",
    type: "number",
    formula: "4",
    order: 8,
  },
  {
    slug: "5",
    name: "5",
    type: "number",
    formula: "5",
    order: 9,
  },
  {
    slug: "6",
    name: "6",
    type: "number",
    formula: "6",
    order: 10,
  },
  {
    slug: "7",
    name: "7",
    type: "number",
    formula: "7",
    order: 4,
  },
  {
    slug: "8",
    name: "8",
    type: "number",
    formula: "8",
    order: 5,
  },
  {
    slug: "9",
    name: "9",
    type: "number",
    formula: "9",
    order: 6,
  },
  {
    slug: "0",
    name: "0",
    type: "number",
    formula: "0",
    order: 17,
  },
  {
    slug: ".",
    name: ".",
    type: "number",
    formula: ".",
    order: 18,
  },
];

export const TrigButtons = [
  {
    slug: "pi",
    name: "π",
    type: "trig",
    formula: "Math.PI",
    order: 0,
  },
  {
    slug: "power",
    name: "x^",
    type: "trig",
    formula: "Math.pow", // confirm this formula
    order: 1,
  },
  {
    slug: "square_root",
    name: "√",
    type: "trig",
    formula: "Math.sqrt", // confirm this formula
    order: 2,
  },
  {
    slug: "square",
    name: "x2",
    type: "trig",
    formula: "Math.pow", // confirm this formula
    order: 3,
  },
  {
    slug: "cos",
    name: "cos",
    type: "trig",
    formula: "Math.cos", // confirm this formula
    order: 4,
  },
  {
    slug: "sin",
    name: "sin",
    type: "trig",
    formula: "Math.sin", // confirm this formula
    order: 5,
  },
  {
    slug: "tan",
    name: "tan",
    type: "trig",
    formula: "Math.tan", // confirm this formula
    order: 6,
  },
];
