var fs = require("fs");
var readline = require("readline");
var object = {};
var rd = readline.createInterface({
    input: fs.createReadStream(__dirname + "/demo.log"),
});

rd.on("line", function (line) {
    object[line.split(":")[0]] = line.split(":")[1];
});
rd.on("close", function () {
    console.log(object);
    if (process.argv[2] === "text") {
        fs.writeFileSync("txt-nih.txt", JSON.stringify(object));
    } else {
        fs.writeFileSync("json-nih.json", JSON.stringify(object));
    }
});
