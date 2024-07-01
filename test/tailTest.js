
const tail = require("../tail");
const assertEqual = require("../assertEqual");

const words = ["Yo Yo", "Lighthouse", "Labs"];
const words1 = ['welcome', 'to', 'the', 'jungle'];
tail(words, words1);
assertEqual(words.length, 3);
assertEqual(words1.length, 3);