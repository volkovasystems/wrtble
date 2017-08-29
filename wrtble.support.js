"use strict";/*;
	@module-license:
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
	@end-module-license

	@module-configuration:
		{
			"package": "wrtble",
			"path": "wrtble/wrtble.js",
			"file": "wrtble.js",
			"module": "wrtble",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/wrtble.git",
			"test": "wrtble-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Checks if property is writable.
	@end-module-documentation

	@include:
		{
			"dscrb": "dscrb",
			"kein": "kein",
			"zelf": "zelf"
		}
	@end-include
*/

var dscrb=require("dscrb");
var kein=require("kein");
var zelf=require("zelf");

var wrtble=function wrtble(property,entity){
/*;
		@meta-configuration:
			{
				"property:required": [
					"number"
					"string",
					"symbol"
				],
				"entity": "*"
			}
		@end-meta-configuration
	*/

if(arguments.length==1){
entity=zelf(this);
}

return kein(property,entity)&&dscrb(property,entity).writable();
};

module.exports=wrtble;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndydGJsZS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImRzY3JiIiwicmVxdWlyZSIsImtlaW4iLCJ6ZWxmIiwid3J0YmxlIiwicHJvcGVydHkiLCJlbnRpdHkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ3cml0YWJsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJhQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMERBLEdBQU1BLE9BQVFDLFFBQVMsT0FBVCxDQUFkO0FBQ0EsR0FBTUMsTUFBT0QsUUFBUyxNQUFULENBQWI7QUFDQSxHQUFNRSxNQUFPRixRQUFTLE1BQVQsQ0FBYjs7QUFFQSxHQUFNRyxRQUFTLFFBQVNBLE9BQVQsQ0FBaUJDLFFBQWpCLENBQTJCQyxNQUEzQixDQUFtQztBQUNqRDs7Ozs7Ozs7Ozs7OztBQWFBLEdBQUlDLFVBQVVDLE1BQVYsRUFBb0IsQ0FBeEIsQ0FBMkI7QUFDMUJGLE9BQVNILEtBQU0sSUFBTixDQUFUO0FBQ0E7O0FBRUQsTUFBU0QsTUFBTUcsUUFBTixDQUFnQkMsTUFBaEIsR0FBNEJOLE1BQU9LLFFBQVAsQ0FBaUJDLE1BQWpCLEVBQTBCRyxRQUExQixFQUFyQztBQUNBLENBbkJEOztBQXFCQUMsT0FBT0MsT0FBUCxDQUFpQlAsTUFBakIiLCJmaWxlIjoid3J0YmxlLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwid3J0YmxlXCIsXG5cdFx0XHRcInBhdGhcIjogXCJ3cnRibGUvd3J0YmxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ3cnRibGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwid3J0YmxlXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy93cnRibGUuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJ3cnRibGUtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRDaGVja3MgaWYgcHJvcGVydHkgaXMgd3JpdGFibGUuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImRzY3JiXCI6IFwiZHNjcmJcIixcblx0XHRcdFwia2VpblwiOiBcImtlaW5cIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBkc2NyYiA9IHJlcXVpcmUoIFwiZHNjcmJcIiApO1xuY29uc3Qga2VpbiA9IHJlcXVpcmUoIFwia2VpblwiICk7XG5jb25zdCB6ZWxmID0gcmVxdWlyZSggXCJ6ZWxmXCIgKTtcblxuY29uc3Qgd3J0YmxlID0gZnVuY3Rpb24gd3J0YmxlKCBwcm9wZXJ0eSwgZW50aXR5ICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwicHJvcGVydHk6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFwibnVtYmVyXCJcblx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwic3ltYm9sXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCJlbnRpdHlcIjogXCIqXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDEgKXtcblx0XHRlbnRpdHkgPSB6ZWxmKCB0aGlzICk7XG5cdH1cblxuXHRyZXR1cm4gKCBrZWluKCBwcm9wZXJ0eSwgZW50aXR5ICkgJiYgZHNjcmIoIHByb3BlcnR5LCBlbnRpdHkgKS53cml0YWJsZSggKSApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB3cnRibGU7XG4iXX0=
//# sourceMappingURL=wrtble.support.js.map
