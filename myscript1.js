// ------------------------------------------------------------------------------
// Assignment 2
// Written by: Polina Anis'kina ID:26991092
// For SOEN 287 Section S – Winter 2017
// -----------------------------------------------------------------------------


// Get three different integers from the user
document.write("<h1>Welcome to Counter System </h1>");
var a = prompt("Enter first integer \n", "");
var b = prompt("Enter second integer \n", "");
var c = prompt("Enter third integer \n", "");
var zero = 0;
var pos = 0;
var neg = 0;
var array = [a, b, c];

// Computing the number of positive, negative, and zero numbers

for (var x in array) {
    if (array[x] > 0) {
        pos++;
    } else if (array[x] < 0) {
        neg++;
    } else {
        zero++;
    }
}

// Display number of numbers
document.write("Zeroes numbers entered by the user =  ", zero, "<br /> <br/>");
document.write("Positive numbers entered by the user = ", pos, "<br /> <br/>");
document.write("Negative numbers entered by the user = ", neg, "<br/> <br/> \n");
