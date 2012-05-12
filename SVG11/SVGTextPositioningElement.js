(function(){
	// Defining constants
	const __SVGNS__ = 'http://www.w3.org/2000/svg';
	
	// Defining variables
	var testDefinition, NODE;
	
	// Building context for the tests
	NODE = document.createElementNS(__SVGNS__, 'text');
			
	
	// Building the test suite object
	testDefinition = {
		info : {
			title : 'SVGTextPositioningElement',
			comment : 'This interface is inherited by text-related interfaces'
		},
		test : [
			function() {
				var out = {
				    	title: "Check the existance of the SVGTextPositioningElement object definition", 
				    	comment: "", 
				    	result: 0
				    };
				
				try{
				    out.result = (typeof SVGTextPositioningElement != 'undefined' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGTextPositioningElement also implement SVGTextContentElement", 
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && typeof SVGTextPositioningElement != 'undefined' && typeof SVGTextContentElement != 'undefined' && NODE instanceof SVGTextPositioningElement && NODE instanceof SVGTextContentElement && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the x attribute",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.x && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The x attribute is of type SVGAnimatedLengthList",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.x && typeof SVGAnimatedLengthList != 'undefined' && NODE.x instanceof SVGAnimatedLengthList && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the y attribute",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.y && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The y attribute is of type SVGAnimatedLengthList",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.y && typeof SVGAnimatedLengthList != 'undefined' && NODE.y instanceof SVGAnimatedLengthList && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the dx attribute",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.dx && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The dx attribute is of type SVGAnimatedLengthList",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.dx && typeof SVGAnimatedLengthList != 'undefined' && NODE.dx instanceof SVGAnimatedLengthList && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the dy attribute",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.dy && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The dy attribute is of type SVGAnimatedLengthList",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.dy && typeof SVGAnimatedLengthList != 'undefined' && NODE.dy instanceof SVGAnimatedLengthList && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the rotate attribute",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.rotate && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The rotate attribute is of type SVGAnimatedNumberList",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.rotate && typeof SVGAnimatedNumberList != 'undefined' && NODE.rotate instanceof SVGAnimatedNumberList && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			}
		]
	}

	TESTRUNNER.run(testDefinition);
})();