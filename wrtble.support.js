"use strict"; /*;
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
              			"asyum": "asyum",
              			"dscrb": "dscrb",
              			"zelf": "zelf"
              		}
              	@end-include
              */

var asyum = require("asyum");
var dscrb = require("dscrb");
var zelf = require("zelf");

var wrtble = function wrtble(property, entity) {
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

	if (arguments.length == 1) {
		entity = zelf(this);
	}

	var descriptor = asyum({}, function flush() {});

	try {
		descriptor = dscrb(property, entity);

		return descriptor.writable();

	} catch (error) {
		throw new Error("cannot check if property is writable, " + error.stack);

	} finally {
		descriptor.flush();
	}
};

module.exports = wrtble;

//# sourceMappingURL=wrtble.support.js.map