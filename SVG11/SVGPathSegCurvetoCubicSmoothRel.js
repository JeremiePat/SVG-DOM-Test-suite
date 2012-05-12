(function(){
	// Defining constants
	const __SVGNS__ = 'http://www.w3.org/2000/svg';
	
	// Defining variables
	var testDefinition, PATH, NODE;
	
	// Building context for the tests
	PATH = document.createElementNS(__SVGNS__, 'path');
	PATH.setAttributeNS(__SVGNS__, 'd', 'M0,0L10,0');
	NODE = PATH.createSVGPathSegCurvetoCubicSmoothRel(1,1,1,1);
	
	// Building the test suite object
	testDefinition = {
		info : {
			title : 'SVGPathSegCurvetoCubicSmoothRel',
			comment : 'SVGPathSegCurvetoCubicSmoothRel corresponds to a "relative smooth cubic curveto" (s) path data command.'
		},
		test : [
			function() {
				var out = {
				    	title: "Check the existance of the SVGPathSegCurvetoCubicSmoothRel object definition",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && typeof SVGPathSegCurvetoCubicSmoothRel != 'undefined' && NODE instanceof SVGPathSegCurvetoCubicSmoothRel && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGPathSegCurvetoCubicSmoothRel also implement SVGPathSeg",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && typeof SVGPathSeg != 'undefined' && NODE instanceof SVGPathSeg && 1) || 0;
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
				    out.result = (NODE && !isNaN(NODE.x) && 1) || 0;
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
				    out.result = (NODE && !isNaN(NODE.y) && 1) || 0;
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
				    	title: "The x2 attribute is of type Number",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && !isNaN(NODE.x2) && 1) || 0;
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
				    	title: "The y2 attribute is of type Number",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && !isNaN(NODE.y2) && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			}
		]
	}

	TESTRUNNER.run(testDefinition);
})();