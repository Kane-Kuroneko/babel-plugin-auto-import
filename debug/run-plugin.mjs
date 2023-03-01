import { createRequire } from 'module';
import babel from '@babel/core';
import parser from '@babel/parser';
import path from 'path';
import generator from '@babel/generator';
import {default as plugin} from '../src/index.js';
const require = createRequire(import.meta.url);

const compileOptions = {
	plugins : [
		[
			plugin ,
			{
				declarations : [
					{
						path : "#toolkit" ,
						namespace : "toolkitNamespace" ,
						default : "toolkit" ,
					} ,
				] ,
			} ,
		] ,
	] ,
};

const compilation = babel.transform(`toolkitNamespace.useless;` , compileOptions);
console.log(compilation.code);

// console.log(generator.default(ast).code);
debugger;
