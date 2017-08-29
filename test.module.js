"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "wrtble",
			"path": "wrtble/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/wrtble.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"wrtble": "wrtble",
			"path": "path"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const wrtble = require( "./wrtble.js" );
//: @end-server

//: @client:
const wrtble = require( "./wrtble.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge

//: @server:
describe( "wrtble", ( ) => {

	describe( "`wrtble( 'property', { 'property': 'value' } )`", ( ) => {
		it( "should return true", ( ) => {
			let result = wrtble( "property", { "property": "value" } );

			assert.equal( result, true );
		} );
	} );

	describe( "`wrtble( 'property', { } )`", ( ) => {
		it( "should return false", ( ) => {
			let result = wrtble( "property", { } );

			assert.equal( result, false );
		} );
	} );

	describe( "`non-writable property`", ( ) => {
		it( "should return false", ( ) => {
			let data = { };
			Object.defineProperty( data, "property", {
				"value": 123,
				"writable": false
			} );

			let result = wrtble( "property", data );

			assert.equal( result, false );
		} );
	} );

} );
//: @end-server

//: @client:
describe( "wrtble", ( ) => {

	describe( "`wrtble( 'property', { 'property': 'value' } )`", ( ) => {
		it( "should return true", ( ) => {
			let result = wrtble( "property", { "property": "value" } );

			assert.equal( result, true );
		} );
	} );

	describe( "`wrtble( 'property', { } )`", ( ) => {
		it( "should return false", ( ) => {
			let result = wrtble( "property", { } );

			assert.equal( result, false );
		} );
	} );

	describe( "`non-writable property`", ( ) => {
		it( "should return false", ( ) => {
			let data = { };
			Object.defineProperty( data, "property", {
				"value": 123,
				"writable": false
			} );

			let result = wrtble( "property", data );

			assert.equal( result, false );
		} );
	} );

} );
//: @end-client

//: @bridge:
describe( "wrtble", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`wrtble( 'property', { 'property': 'value' } )`", ( ) => {
		it( "should return true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return wrtble( "property", { "property": "value" } );
				}

			).value;

			assert.equal( result, true );
		} );
	} );

	describe( "`wrtble( 'property', { } )`", ( ) => {
		it( "should return false", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return wrtble( "property", { } );
				}

			).value;

			assert.equal( result, false );
		} );
	} );

	describe( "`non-writable property`", ( ) => {
		it( "should return false", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					let data = { };
					Object.defineProperty( data, "property", {
						"value": 123,
						"writable": false
					} );

					return wrtble( "property", data );
				}

			).value;

			assert.equal( result, false );
		} );
	} );

} );
//: @end-bridge
