const onionRegex = require('onion-regex');
const fs = require('fs');
const fetch = require('node-fetch');

let rawdata = fs.readFileSync('results/data.json');
let student = JSON.parse(rawdata);
const qm = require('./query-maker.js');

function getTypos(body){ return body.match(onionRegex());}

for(let j=0; j<qm.query.length; j++) {
for(let i=0, link='';i < student[qm.query[j]]['1']['results'].length;i++){

	link = student[qm.query[j]]['1']['results'][i]['link']
	console.log("fetching : " + link);
	fetch(link).then(res => res.text()).then(body => console.log(getTypos(body)));
}
}
