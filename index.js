
var util = require('./lib/util');
console.log('testpkg1');

exports.func1 = func1;
exports.func2 = func2;

function func1() {
	return util.listdir('dir1');
}

function func2() {
	return util.listdir('dir2');
}

