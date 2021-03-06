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

var assert=require("should");



//: @client:
var wrtble=require("./wrtble.support.js");
//: @end-client





//: @client:
describe("wrtble",function(){

describe("`wrtble( 'property', { 'property': 'value' } )`",function(){
it("should return true",function(){
var result=wrtble("property",{"property":"value"});

assert.equal(result,true);
});
});

describe("`wrtble( 'property', { } )`",function(){
it("should return false",function(){
var result=wrtble("property",{});

assert.equal(result,false);
});
});

describe("`non-writable property`",function(){
it("should return false",function(){
var data={};
Object.defineProperty(data,"property",{
"value":123,
"writable":false});


var result=wrtble("property",data);

assert.equal(result,false);
});
});

});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwid3J0YmxlIiwiZGVzY3JpYmUiLCJpdCIsInJlc3VsdCIsImVxdWFsIiwiZGF0YSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3REEsR0FBTUEsUUFBU0MsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLEdBQU1DLFFBQVNELFFBQVMscUJBQVQsQ0FBZjtBQUNBOzs7Ozs7QUFNQTtBQUNBRSxTQUFVLFFBQVYsQ0FBb0IsVUFBTzs7QUFFMUJBLFNBQVUsaURBQVYsQ0FBNkQsVUFBTztBQUNuRUMsR0FBSSxvQkFBSixDQUEwQixVQUFPO0FBQ2hDLEdBQUlDLFFBQVNILE9BQVEsVUFBUixDQUFvQixDQUFFLFdBQVksT0FBZCxDQUFwQixDQUFiOztBQUVBRixPQUFPTSxLQUFQLENBQWNELE1BQWQsQ0FBc0IsSUFBdEI7QUFDQSxDQUpEO0FBS0EsQ0FORDs7QUFRQUYsU0FBVSw2QkFBVixDQUF5QyxVQUFPO0FBQy9DQyxHQUFJLHFCQUFKLENBQTJCLFVBQU87QUFDakMsR0FBSUMsUUFBU0gsT0FBUSxVQUFSLENBQW9CLEVBQXBCLENBQWI7O0FBRUFGLE9BQU9NLEtBQVAsQ0FBY0QsTUFBZCxDQUFzQixLQUF0QjtBQUNBLENBSkQ7QUFLQSxDQU5EOztBQVFBRixTQUFVLHlCQUFWLENBQXFDLFVBQU87QUFDM0NDLEdBQUkscUJBQUosQ0FBMkIsVUFBTztBQUNqQyxHQUFJRyxNQUFPLEVBQVg7QUFDQUMsT0FBT0MsY0FBUCxDQUF1QkYsSUFBdkIsQ0FBNkIsVUFBN0IsQ0FBeUM7QUFDeEMsUUFBUyxHQUQrQjtBQUV4QyxXQUFZLEtBRjRCLENBQXpDOzs7QUFLQSxHQUFJRixRQUFTSCxPQUFRLFVBQVIsQ0FBb0JLLElBQXBCLENBQWI7O0FBRUFQLE9BQU9NLEtBQVAsQ0FBY0QsTUFBZCxDQUFzQixLQUF0QjtBQUNBLENBVkQ7QUFXQSxDQVpEOztBQWNBLENBaENEO0FBaUNBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwid3J0YmxlXCIsXG5cdFx0XHRcInBhdGhcIjogXCJ3cnRibGUvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3dydGJsZS5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwid3J0YmxlXCI6IFwid3J0YmxlXCIsXG5cdFx0XHRcInBhdGhcIjogXCJwYXRoXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCB3cnRibGUgPSByZXF1aXJlKCBcIi4vd3J0YmxlLnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5kZXNjcmliZSggXCJ3cnRibGVcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgd3J0YmxlKCAncHJvcGVydHknLCB7ICdwcm9wZXJ0eSc6ICd2YWx1ZScgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IHdydGJsZSggXCJwcm9wZXJ0eVwiLCB7IFwicHJvcGVydHlcIjogXCJ2YWx1ZVwiIH0gKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgd3J0YmxlKCAncHJvcGVydHknLCB7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGZhbHNlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gd3J0YmxlKCBcInByb3BlcnR5XCIsIHsgfSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgbm9uLXdyaXRhYmxlIHByb3BlcnR5YFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGxldCBkYXRhID0geyB9O1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCBkYXRhLCBcInByb3BlcnR5XCIsIHtcblx0XHRcdFx0XCJ2YWx1ZVwiOiAxMjMsXG5cdFx0XHRcdFwid3JpdGFibGVcIjogZmFsc2Vcblx0XHRcdH0gKTtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IHdydGJsZSggXCJwcm9wZXJ0eVwiLCBkYXRhICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG4iXX0=
//# sourceMappingURL=test.support.js.map
