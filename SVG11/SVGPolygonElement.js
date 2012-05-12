(function(){
	// Defining constants
	const __SVGNS__ = 'http://www.w3.org/2000/svg';
	
	// Defining variables
	var testDefinition, NODE;
	
	// Building context for the tests
	NODE = document.createElementNS(__SVGNS__, 'polygon');
			
	
	// Building the test suite object
	testDefinition = {
		info : {
			title : 'SVGPolygonElement',
			comment : 'This interface is used to access and to manipulate the SVG "polygon" elements'
		},
		test : [
			function() {
				var out = {
				    	title: "Check the existance of the SVGPolygonElement object definition", 
				    	comment: "", 
				    	result: 0
				    };
				
				try{
				    out.result = (NODE && typeof SVGPolygonElement != 'undefined' && NODE instanceof SVGPolygonElement && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGPolygonElement also implement SVGElement", 
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
				    	title: "SVGPolygonElement also implement SVGTests",
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
				    	title: "SVGPolygonElement also implement SVGLangSpace",
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
				    	title: "SVGPolygonElement also implement SVGExternalResourcesRequired",
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
				    	title: "SVGPolygonElement also implement SVGStylable",
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
				    	title: "SVGPolygonElement also implement SVGTransformable",
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
				    	title: "SVGPolygonElement also implement SVGAnimatedPoints",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && typeof SVGAnimatedPoints != 'undefined' && NODE instanceof SVGAnimatedPoints && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			}
		]
	}

	TESTRUNNER.run(testDefinition);
})();