
const assert = require( "assert" );
const harden = require( "harden" );
const wrtble = require( "./wrtble.js" );

let duration = Date.now( );
assert.equal( wrtble( "property", { "property": "value" } ), true, "should be equal to true" );
duration = Date.now( ) - duration;

let test = { };
harden( 123, "sample", test );
assert.equal( wrtble( 123, test ), false, "should be equal to false" );

console.log( "ok" );
