var path = require('path');
const fs = require('fs');

exports.listdir = listdir;

function listdir(dir) {
	var d = __dirname;
	var p = path.join(d, "../", dir);
	console.log(p);
	var ret = [];
	fs.readdirSync(p).forEach(file => {
		var fullpath = path.join(p, file);
		console.log(fullpath);
		var obj = JSON.parse(fs.readFileSync(fullpath, 'utf8'));
		ret.push(obj);
	});
	console.log(ret);
	return ret;
}
