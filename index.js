// Module provenant de npm
const slugify = require('slugify');

// Module crée par le dev
const { calc } = require('./modules/calc');

console.log(calc(2, 5));
console.log(slugify('Bienvenue a Paris', {lower: true}));
// Bienvenue a Paris
// bienvenue-a-paris
