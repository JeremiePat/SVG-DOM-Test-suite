(function(){
	// Defining constants
	const __SVGNS__ = 'http://www.w3.org/2000/svg',
	      __XLINK__ = 'http://www.w3.org/1999/xlink';
	
	// Defining variables
	var testDefinition, NODE, USE;
	
	// Building context for the tests
	USE = document.createElementNS(__SVGNS__, 'use');
	RECT = document.createElementNS(__SVGNS__, 'rect'); 
	RECT.setAttribute('id','foo'); 
	USE.setAttributeNS(__XLINK__, 'href', '#foo'); 
	NODE = (USE.instanceRoot && USE.instanceRoot.childNodes) || null;
	
	// Building the test suite object
	testDefinition = {
		info : {
			title : 'SVGElementInstanceList',
			comment : 'This interface is used to access a list of SVGElementInstance in the shadow tree of a "use" elements'
		},
		test : [
			function() {
				var out = {
				    	title: "Check the existance of the SVGElementInstanceList object definition", 
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGElementInstanceList != 'undefined' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the length attribute", 
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.length && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The length attribute is of type Number",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.length && !isNaN(NODE.length) && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the item function",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.item && typeof NODE.item == 'function' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The item function return a SVGElementInstance",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.item && typeof NODE.item == 'function' && typeof SVGElementInstance != 'undefined' && NODE.item(0) instanceof SVGElementInstance && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			}
		]
	}

	TESTRUNNER.run(testDefinition);
})();