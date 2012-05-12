(function(){
	// Defining constants
	const __SVGNS__ = 'http://www.w3.org/2000/svg';
	
	// Defining variables
	var testDefinition, SVG, NODE;
	
	// Building context for the tests
	SVG = document.createElementNS(__SVGNS__, 'svg');
	NODE = SVG.createSVGPoint();
	
	// Building the test suite object
	testDefinition = {
		info : {
			title : 'SVGPoint',
			comment : 'An SVGPoint defines an (x, y) coordinate pair'
		},
		test : [
			function() {
				var out = {
				    	title: "Check the existance of the SVGPoint object definition", 
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGPoint != 'undefined' && 1) || 0;
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
				    }
				
				try{
				    out.result = (NODE && NODE.x !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The x attribute is of type Number",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.x !== undefined && !isNaN(NODE.x) && 1) || 0;
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
				    }
				
				try{
				    out.result = (NODE && NODE.y !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The y attribute is of type Number",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.y !== undefined && !isNaN(NODE.y) && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the matrixTransform method",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.matrixTransform && typeof NODE.matrixTransform == 'function' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var MATRIX, out = {
				    	title: "The matrixTransform method return an SVGPoint",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					MATRIX = SVG.createSVGMatrix();
					out.result = (NODE && NODE.matrixTransform && typeof SVGPoint != 'undefined' && NODE.matrixTransform(MATRIX) instanceof SVGPoint && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			}
		]
	}

	TESTRUNNER.run(testDefinition);
})();