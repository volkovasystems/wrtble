
const assert = require( "assert" );
const harden = require( "harden" );
const wrtble = require( "./wrtble.js" );

assert.equal( wrtble( "property", { "property": "value" } ), true, "should be true" );

let test = { };
harden( 123, "sample", test );
assert.equal( wrtble( 123, test ), false, "should be false" );

console.log( "ok" );
