(function(){
	// Defining constants
	const __SVGNS__ = 'http://www.w3.org/2000/svg';
	
	// Defining variables
	var testDefinition, NODE;
	
	// Building context for the tests
	NODE = document.createElementNS(__SVGNS__, 'altGlyph');
			
	
	// Building the test suite object
	testDefinition = {
		info : {
			title : 'SVGAltGlyphElement',
			comment : 'This interface is used to access and to manipulate the SVG "altGlyph" elements'
		},
		test : [
			function() {
				var out = {
				    	title: "Check the existance of the SVGAltGlyphElement object definition", 
				    	comment: "", 
				    	result: 0
				    };
				
				try{
				    out.result = (NODE && typeof SVGAltGlyphElement != 'undefined' && NODE instanceof SVGAltGlyphElement && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGAltGlyphElement also implement SVGTextPositioningElement", 
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && typeof SVGTextPositioningElement != 'undefined' && NODE instanceof SVGTextPositioningElement && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGAltGlyphElement also implement SVGURIReference", 
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && typeof SVGURIReference != 'undefined' && NODE instanceof SVGURIReference && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the glyphRef attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.glyphRef !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The glyphRef attribute is of type String",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.glyphRef && (typeof NODE.glyphRef === 'string' || (typeof DOMString != 'undefined' && NODE.glyphRef instanceof DOMString)) && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the format attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.format !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The format attribute is of type String",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.format && (typeof NODE.format === 'string' || (typeof DOMString != 'undefined' && NODE.format instanceof DOMString)) && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			}
		]
	}

	TESTRUNNER.run(testDefinition);
})();