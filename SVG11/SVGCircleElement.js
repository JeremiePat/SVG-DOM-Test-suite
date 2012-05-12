(function(){
	// Defining constants
	const __SVGNS__ = 'http://www.w3.org/2000/svg';
	
	// Defining variables
	var testDefinition, NODE;
	
	// Building context for the tests
	NODE = document.createElementNS(__SVGNS__, 'circle');
			
	
	// Building the test suite object
	testDefinition = {
		info : {
			title : 'SVGCircleElement',
			comment : 'This interface is used to access and to manipulate the SVG "circle" element'
		},
		test : [
			function() {
				var out = {
				    	title: "Check the existance of the SVGCircleElement object definition", 
				    	comment: "", 
				    	result: 0
				    };
				
				try{
				    out.result = (NODE && typeof SVGCircleElement != 'undefined' && NODE instanceof SVGCircleElement && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGCircleElement also implement SVGElement", 
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
				    	title: "SVGCircleElement also implement SVGTests",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && typeof SVGTests != 'undefined' && NODE instanceof SVGTests && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGCircleElement also implement SVGLangSpace",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && typeof SVGLangSpace != 'undefined' && NODE instanceof SVGLangSpace && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGCircleElement also implement SVGExternalResourcesRequired",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && typeof SVGExternalResourcesRequired != 'undefined' && NODE instanceof SVGExternalResourcesRequired && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGCircleElement also implement SVGStylable",
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
				    	title: "SVGCircleElement also implement SVGTransformable",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && typeof SVGTransformable != 'undefined' && NODE instanceof SVGTransformable && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the r attribute",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.r && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The r attribute is of type SVGAnimatedLength",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.r && typeof SVGAnimatedLength != 'undefined' && NODE.r instanceof SVGAnimatedLength && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the cx attribute",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.cx && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The cx attribute is of type SVGAnimatedLength",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.cx && typeof SVGAnimatedLength != 'undefined' && NODE.cx instanceof SVGAnimatedLength && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the cy attribute",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.cy && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The cy attribute is of type SVGAnimatedLength",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.cy && typeof SVGAnimatedLength != 'undefined' && NODE.cy instanceof SVGAnimatedLength && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			}
		]
	}

	TESTRUNNER.run(testDefinition);
})();