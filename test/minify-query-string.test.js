'use strict';

const chai              = require('chai'),
      minifyQueryString = require('./../minify-query-string'),
      assert            = chai.assert,
      equal             = assert.equal;

describe(
		'minifyQueryString', () => {
			
			it(
					'Is function',
					() => assert.isFunction(minifyQueryString)
			);
			
			it(
					'Returns string',
					() => assert.isString(minifyQueryString())
			);
			
			describe(
					'String handling validation', () => {
						
						it(
								'Simple string',
								() => {
									const input    = 'test',
									      expected = 'test';
									
									equal(minifyQueryString(input), expected);
								}
						);
						
						it(
								'String with spaces around',
								() => {
									const input    = ' test  ',
									      expected = 'test';
									
									equal(minifyQueryString(input), expected);
								}
						);
						
						it(
								'Multistring with spaces',
								() => {
									const input    = `
												  
												  test  
												  
												`,
									      expected = 'test';
									
									equal(minifyQueryString(input), expected);
								}
						);
						
					}
			);
			
		}
);
