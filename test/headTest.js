
const head = require("../head");
const assertEqual = require("../assertEqual");



assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5, 6, 7]), 5);

