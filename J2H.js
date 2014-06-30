
var fs = require('fs');
var json2html = require('C:/_CvR/Stuff/nodejs/node_modules/node-json2html');
// https://github.com/vavere/htmltidy
var tidy = require('C:/_CvR/Stuff/nodejs/node_modules/htmltidy').tidy;

var dict = process.argv[2];
var dictName = dict+".js";

var filename = process.argv[3];
var sourceFilename = filename+".json";
var targetFilename = filename+".html";

console.log("Dictionary file: "+dictName);
console.log("Source file: "+sourceFilename);
console.log("Target file: "+targetFilename);

var transforms, sourceData, tidyHtml;
var tidyOps = {
	"show-body-only": "yes",
	"indent": "yes",
	"indent-spaces": 4
}

fs.readFile(dictName, 'utf8', function(err, data) {
	if (err) {
		console.error("Could not open file: %s", err);
	} else {
		try {
			eval(data);
		} catch(e) {
			console.log("Error parsing transform file");
			console.log(e);
			return;
		}
		fs.readFile(sourceFilename, 'utf8', function(err, data) {
			if (err) {
				console.error("Could not open file: %s", err);
			} else {
				try {
					sourceData = JSON.parse(data);
				} catch(e) {
					console.log("Error parsing data file");
					console.log(e);
					return;
				}
				var rawHtml = json2html.transform(sourceData, transforms.main);
				tidy(rawHtml, tidyOps, function(err, html) {
					tidyHtml = html;
					fs.writeFile(targetFilename, tidyHtml, function(err) {
						if (err) {
							console.error("Could not write file: %s", err);
						} else {
							//console.log("Done");
							console.log(tidyHtml);
						}
					});
				});
			}
		});
	}
});
