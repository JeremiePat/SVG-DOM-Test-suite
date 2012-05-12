(function(){
	// Defining constants
	const __SVGNS__ = 'http://www.w3.org/2000/svg';
	
	// Defining variables
	var testDefinition, NODE;
	
	// Building context for the tests
	NODE = document.createElementNS(__SVGNS__, 'altGlyphItem');
			
	
	// Building the test suite object
	testDefinition = {
		info : {
			title : 'SVGAltGlyphItemElement',
			comment : 'This interface is used to access and to manipulate the SVG "altGlyphItem" elements'
		},
		test : [
			function() {
				var out = {
				    	title: "Check the existance of the SVGAltGlyphItemElement object definition", 
				    	comment: "", 
				    	result: 0
				    };
				
				try{
				    out.result = (NODE && typeof SVGAltGlyphItemElement != 'undefined' && NODE instanceof SVGAltGlyphItemElement && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGAltGlyphItemElement also implement SVGElement", 
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && typeof SVGElement != 'undefined' && NODE instanceof SVGElement && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			}
		]
	}

	TESTRUNNER.run(testDefinition);
})();