const onionRegex = require('onion-regex');
const fs = require('fs');
const fetch = require('node-fetch');
const sim = require('similarity');

let similarityMin = 0.05 //Set the minimum similarity. Should be between 0 and 1

let rawdata = fs.readFileSync('results/data.json');
let student = JSON.parse(rawdata);
const qm = require('./query-maker.js');

function getTypos(exl,body){
	let td = body.match(onionRegex());
	let returnLinks = [];
	try{
		let len = td.length;
		for(let k = 0; k < len; k++){
			let s = sim(exl.split('.')[0],td[k].split('.')[0]);
			if(s>similarityMin && s<1){ 
				//returnLinks.push(td[k]);
				console.log(exl.split('.')[0]+" : "+td[k].split('.')[0]+" : "+s);
			}
		}
	}
	catch(e){}
	return returnLinks;
}

console.log("~~~Typo squat domains~~~");

for(let j=0; j<qm.query.length; j++) {
for(let i=0, link='';i < student[qm.query[j]]['1']['results'].length;i++){

	link = student[qm.query[j]]['1']['results'][i]['link']
	//console.log("fetching : " + link);
	fetch(link).then(res => res.text()).then(body => getTypos(qm.exlines[j],body));
}
}
