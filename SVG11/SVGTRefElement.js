(function(){
	// Defining constants
	const __SVGNS__ = 'http://www.w3.org/2000/svg';
	
	// Defining variables
	var testDefinition, NODE;
	
	// Building context for the tests
	NODE = document.createElementNS(__SVGNS__, 'tref');
			
	
	// Building the test suite object
	testDefinition = {
		info : {
			title : 'SVGTRefElement',
			comment : 'This interface is used to access and to manipulate the SVG "tref" elements'
		},
		test : [
			function() {
				var out = {
				    	title: "Check the existance of the SVGTRefElement object definition", 
				    	comment: "", 
				    	result: 0
				    };
				
				try{
				    out.result = (NODE && typeof SVGTRefElement != 'undefined' && NODE instanceof SVGTRefElement && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGTRefElement also implement SVGTextPositioningElement", 
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
				    	title: "SVGTRefElement also implement SVGURIReference", 
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && typeof SVGURIReference != 'undefined' && NODE instanceof SVGURIReference && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			}
		]
	}

	TESTRUNNER.run(testDefinition);
})();