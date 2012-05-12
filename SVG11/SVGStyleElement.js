(function(){
	// Defining constants
	const __SVGNS__ = 'http://www.w3.org/2000/svg';
	
	// Defining variables
	var testDefinition, NODE;
	
	// Building context for the tests
	NODE = document.createElementNS(__SVGNS__, 'style');
	
	// Building the test suite object
	testDefinition = {
		info : {
			title : 'SVGStyleElement',
			comment : 'This interface is used to access and to manipulate the SVG "style" elements'
		},
		test : [
			function() {
				var out = {
				    	title: "Check the existance of the SVGStyleElement object definition", 
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && typeof SVGStyleElement != 'undefined' && NODE instanceof SVGStyleElement && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGStyleElement also implement SVGElement", 
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && typeof SVGElement != 'undefined' && NODE instanceof SVGElement && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGStyleElement also implement SVGLangSpace",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && typeof SVGLangSpace != 'undefined' && NODE instanceof SVGLangSpace && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the type attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.type !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The type attribute is of type String",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.type && (typeof NODE.type === 'string' || (typeof DOMString != 'undefined' && NODE.type instanceof DOMString)) && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The type attribute raise a NO_MODIFICATION_ALLOWED_ERR exception on setting",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					if(NODE && NODE.type){
						try {
							NODE.type = "foo";
						} catch(e) {
							out.result = (e.name == "NO_MODIFICATION_ALLOWED_ERR" && 1) || 0;
						}
					}
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the media attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.media !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The media attribute is of type String",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.media && (typeof NODE.media === 'string' || (typeof DOMString != 'undefined' && NODE.media instanceof DOMString)) && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The media attribute raise a NO_MODIFICATION_ALLOWED_ERR exception on setting",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					if(NODE && NODE.media){
						try {
							NODE.media = "foo";
						} catch(e) {
							out.result = (e.name == "NO_MODIFICATION_ALLOWED_ERR" && 1) || 0;
						}
					}
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the title attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.title !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The title attribute is of type String",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.title && (typeof NODE.title === 'string' || (typeof DOMString != 'undefined' && NODE.title instanceof DOMString)) && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The title attribute raise a NO_MODIFICATION_ALLOWED_ERR exception on setting",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					if(NODE && NODE.title){
						try {
							NODE.title = "foo";
						} catch(e) {
							out.result = (e.name == "NO_MODIFICATION_ALLOWED_ERR" && 1) || 0;
						}
					}
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			}
		]
	}

	TESTRUNNER.run(testDefinition);
})();