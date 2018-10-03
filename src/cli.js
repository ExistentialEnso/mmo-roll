#!/usr/bin/env node

const random = require('random');

// Our default range for the roll
let min = 1;
let max = 100;

if(process.argv[2]) {
    let range = process.argv[2];

    if(!isNaN(range)) {
        // They only provided a single value, therefore we assume min = 1
        max = Number(range);
    } else {    
        let parts = [];

        // Figure out how we need to split their value to make a range
        if(range.indexOf('-') > -1) {
            parts = range.split('-');
        } else if (range.indexOf(',') > -1) {
            parts = range.split(',');
        } else {
            console.log("Unable to parse value: " + range);
            process.exit();
        }

        // Ensure they didn't provide us with too many parts
        if(parts.length != 2) {
            console.log("Range must include only two parts.");
            process.exit();
        }

        // Ensure both values provided are numbers
        if(isNaN(parts[0])) {
            console.log("Not a number: " + parts[0]);
            process.exit();
        } else if(isNaN(parts[1])) {
            console.log("Not a number: " + parts[0]);
            process.exit();
        }

        min = Number(parts[0]);
        max = Number(parts[1]);
    }
}

let value = random.int(min, max);

console.log(String.raw`You rolled ${value} (${min}-${max})`);