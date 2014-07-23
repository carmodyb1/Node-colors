// Part I, #1

var fs = require("fs");

var red = process.argv[2];
var green = process.argv[3];
var blue = process.argv[4];

var luminosity = (0.2126*red) + (0.7152*green) + (0.0722*blue);

console.log(luminosity);











// var textContent1 = fs.readFileSync(source1, "utf-8");
// var textContent2 = fs.readFileSync(source2, "utf-8");

// var concat = fs.writeFileSync(destination, textContent1 + textContent2);
