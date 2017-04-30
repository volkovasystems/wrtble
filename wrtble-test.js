
const assert = require( "assert" );
const wrtble = require( "./wrtble.js" );

assert.equal( wrtble( "property", { "property": "value" } ), true, "should be true" );

console.log( "ok" );
