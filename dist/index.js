"use strict";
/* Problem one */
/* function formatString(input: string, toUpper?: boolean): string */
function formatString(input, toUpper = true) {
    if (toUpper) {
        return input.toUpperCase();
    }
    else {
        return input.toLowerCase();
    }
}
console.log(formatString("LOVE BANGLADESH"));
console.log(formatString("Hello", false)); // "hello" 
// "HELLO"
console.log(formatString("Hello", true)); // "HELLO"
