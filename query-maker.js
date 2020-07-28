let query = [];
let exlines = [];

const fs = require('fs');
const on = require('onion-regex');
const data = fs.readFileSync('legit.txt', 'UTF-8');
const lines = data.split(/\r?\n/);

lines.forEach((line) => {
	try{
	if(line != ''){
		linea = (line.match(on()))[0];
		exlines.push(linea);
		line = linea.substr(0,8);
		query.push("link:"+line+"* .onion");//-"+linea);
	/*	if(line.substr(0,4) != 'http'){
			line = line.substr(0,4);
        		query.push(line);
		}
		else {
			if(line.charAt(4) != 's'){
				line = line.substr(7,4);
			}
			else{
				line = line.substr(8,4);
			}
			query.push(line);
		}*/
	}
	}
	catch(e){console.log(e);}
    });

exports.query = query;
exports.exlines = exlines;
