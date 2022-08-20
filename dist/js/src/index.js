var ejs = require('ejs');
var fs = require('fs');

var htmlContent = fs.readFileSync("./main.ejs", "utf-8");

var htmlRenderized = ejs.render(htmlContent, {filename: "main.ejs", exampleRenderEjs: "Hello World!"});

console.log(htmlRenderized);

