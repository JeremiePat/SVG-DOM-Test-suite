(function(){
	// Defining constants
	const __SVGNS__ = 'http://www.w3.org/2000/svg';
	
	// Defining variables
	var testDefinition, NODE;
	
	// Building context for the tests
	NODE = document.createElementNS(__SVGNS__, 'tspan');
			
	
	// Building the test suite object
	testDefinition = {
		info : {
			title : 'SVGTSpanElement',
			comment : 'This interface is used to access and to manipulate the SVG "tspan" elements'
		},
		test : [
			function() {
				var out = {
				    	title: "Check the existance of the SVGTSpanElement object definition", 
				    	comment: "", 
				    	result: 0
				    };
				
				try{
				    out.result = (NODE && typeof SVGTSpanElement != 'undefined' && NODE instanceof SVGTSpanElement && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGTSpanElement also implement SVGTextPositioningElement", 
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && typeof SVGTextPositioningElement != 'undefined' && NODE instanceof SVGTextPositioningElement && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			}
		]
	}

	TESTRUNNER.run(testDefinition);
})();