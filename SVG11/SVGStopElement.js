(function(){
	// Defining constants
	const __SVGNS__ = 'http://www.w3.org/2000/svg';
	
	// Defining variables
	var testDefinition, NODE;
	
	// Building context for the tests
	NODE = document.createElementNS(__SVGNS__, 'stop');
	
	// Building the test suite object
	testDefinition = {
		info : {
			title : 'SVGStopElement',
			comment : 'This interface correspong to the "stop" element.'
		},
		test : [
			function() {
				var out = {
				    	title: "Check the existance of the SVGStopElement object definition", 
				    	comment: "", 
				    	result: 0
				    };
				
				try{
				    out.result = (NODE && typeof SVGStopElement != 'undefined' && NODE instanceof SVGStopElement && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGStopElement also implement SVGElement", 
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && typeof SVGElement != 'undefined' && NODE instanceof SVGElement && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGStopElement also implement SVGStylable", 
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && typeof SVGStylable != 'undefined' && NODE instanceof SVGStylable && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the offset attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.offset !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The offset attribute is of type SVGAnimatedNumber",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.offset !== undefined && typeof SVGAnimatedNumber != 'undefined' && NODE.offset instanceof SVGAnimatedNumber && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			}
		]
	}

	TESTRUNNER.run(testDefinition);
})();