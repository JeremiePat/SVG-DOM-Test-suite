(function(){
	// Defining constants
	const __SVGNS__ = 'http://www.w3.org/2000/svg';
	
	// Defining variables
	var testDefinition, NODE;
	
	// Building context for the tests
	NODE = document.createElementNS(__SVGNS__, 'linearGradient');
	
	// Building the test suite object
	testDefinition = {
		info : {
			title : 'SVGLinearGradientElement',
			comment : 'This interface correspong to the "linearGradient" element.'
		},
		test : [
			function() {
				var out = {
				    	title: "Check the existance of the SVGLinearGradientElement object definition", 
				    	comment: "", 
				    	result: 0
				    };
				
				try{
				    out.result = (NODE && typeof SVGLinearGradientElement != 'undefined' && NODE instanceof SVGLinearGradientElement && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGLinearGradientElement also implement SVGGradientElement", 
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && typeof SVGGradientElement != 'undefined' && NODE instanceof SVGGradientElement && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the x1 attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.x1 !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The x1 attribute is of type SVGAnimatedLength",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.x1 !== undefined && typeof SVGAnimatedLength != 'undefined' && NODE.x1 instanceof SVGAnimatedLength && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the y1 attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.y1 !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The y1 attribute is of type SVGAnimatedLength",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.y1 !== undefined && typeof SVGAnimatedLength != 'undefined' && NODE.y1 instanceof SVGAnimatedLength && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the x2 attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.x2 !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The x2 attribute is of type SVGAnimatedLength",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.x2 !== undefined && typeof SVGAnimatedLength != 'undefined' && NODE.x2 instanceof SVGAnimatedLength && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the y2 attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.y2 !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The y2 attribute is of type SVGAnimatedLength",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.y2 !== undefined && typeof SVGAnimatedLength != 'undefined' && NODE.y2 instanceof SVGAnimatedLength && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			}
		]
	}

	TESTRUNNER.run(testDefinition);
})();