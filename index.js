
var util = require('./lib/util');
console.log('testpkg1');

exports.func1 = func1;

function func1() {
	console.log('func1');
	util.listdir('dir1');
}

function func2() {
	console.log('func2');
	util.listdir('dir2');
}

