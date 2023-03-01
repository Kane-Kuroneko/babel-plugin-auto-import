// const babel = require("@babel/core");
import babel from '@babel/core';
import generator from '@babel/generator';

import plugin from '../src/index.js';

const babelOptions = {
	plugins : [[plugin , { declarations : null }]],
	
};


let input = ` toolkit; `;
let declaration = {
	default: "toolkit",
	path: "#toolkit",
};
let output = `
	import * as toolkit from "#toolkit";

	toolkit;
`;


import {writeFile} from 'fs';
const writeToFile = async () => {
	const ast = babel.parse(`
		import toolkit from '#toolkit';
		import * as toolkitNamespace from '#toolkit';
		
	`);
	writeFile('./ast.json',JSON.stringify(ast,null,"\t"),{encoding:"utf-8"},() => {
		
	});
	console.log(generator.default(ast).code);
	return;
	const output = babel.transform(input, babelOptions).code
};
writeToFile();
