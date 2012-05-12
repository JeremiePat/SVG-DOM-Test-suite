(function(){
	// Defining constants
	const __SVGNS__ = 'http://www.w3.org/2000/svg';
	
	// Defining variables
	var testDefinition, PATH, NODE;
	
	// Building context for the tests
	PATH = document.createElementNS(__SVGNS__, 'path');
	PATH.setAttributeNS(__SVGNS__, 'd', 'M0,0L10,0');
	NODE = PATH.createSVGPathSegMovetoRel(1,1);
	
	// Building the test suite object
	testDefinition = {
		info : {
			title : 'SVGPathSegMovetoRel',
			comment : 'SVGPathSegMovetoRel corresponds to a "relative moveto" (m) path data command.'
		},
		test : [
			function() {
				var out = {
				    	title: "Check the existance of the SVGPathSegMovetoRel object definition",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && typeof SVGPathSegMovetoRel != 'undefined' && NODE instanceof SVGPathSegMovetoRel && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGPathSegMovetoRel also implement SVGPathSeg",
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
			}
		]
	}

	TESTRUNNER.run(testDefinition);
})();