let query = [];

const fs = require('fs');
const on = require('onion-regex');
const data = fs.readFileSync('legit.txt', 'UTF-8');
const lines = data.split(/\r?\n/);

lines.forEach((line) => {
	try{
	if(line != ''){
		linea = (line.match(on()))[0];
		line = linea.substr(0,6);
		query.push(line + " -"+linea);
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

console.log(query);
exports.query = query;
