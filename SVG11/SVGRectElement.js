(function(){
	// Defining constants
	const __SVGNS__ = 'http://www.w3.org/2000/svg';
	
	// Defining variables
	var testDefinition, NODE;
	
	// Building context for the tests
	NODE = document.createElementNS(__SVGNS__, 'rect');
			
	
	// Building the test suite object
	testDefinition = {
		info : {
			title : 'SVGRectElement',
			comment : 'This interface is used to access and to manipulate the SVG "rect" elements'
		},
		test : [
			function() {
				var out = {
				    	title: "Check the existance of the SVGRectElement object definition", 
				    	comment: "", 
				    	result: 0
				    };
				
				try{
				    out.result = (NODE && typeof SVGRectElement != 'undefined' && NODE instanceof SVGRectElement && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGRectElement also implement SVGElement", 
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
				    	title: "SVGRectElement also implement SVGTests",
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
				    	title: "SVGRectElement also implement SVGLangSpace",
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
				    	title: "SVGRectElement also implement SVGExternalResourcesRequired",
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
				    	title: "SVGRectElement also implement SVGStylable",
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
				    	title: "SVGRectElement also implement SVGTransformable",
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
				    	title: "Support of the width attribute",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.width && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The width attribute is of type SVGAnimatedLength",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.width && typeof SVGAnimatedLength != 'undefined' && NODE.width instanceof SVGAnimatedLength && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the height attribute",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.height && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The height attribute is of type SVGAnimatedLength",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.height && typeof SVGAnimatedLength != 'undefined' && NODE.height instanceof SVGAnimatedLength && 1) || 0;
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
				    	title: "The x attribute is of type SVGAnimatedLength",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.x && typeof SVGAnimatedLength != 'undefined' && NODE.x instanceof SVGAnimatedLength && 1) || 0;
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
				    	title: "The y attribute is of type SVGAnimatedLength",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.y && typeof SVGAnimatedLength != 'undefined' && NODE.y instanceof SVGAnimatedLength && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the rx attribute",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.rx && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The rx attribute is of type SVGAnimatedLength",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.rx && typeof SVGAnimatedLength != 'undefined' && NODE.rx instanceof SVGAnimatedLength && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the ry attribute",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.ry && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The ry attribute is of type SVGAnimatedLength",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.ry && typeof SVGAnimatedLength != 'undefined' && NODE.ry instanceof SVGAnimatedLength && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			}
		]
	}

	TESTRUNNER.run(testDefinition);
})();