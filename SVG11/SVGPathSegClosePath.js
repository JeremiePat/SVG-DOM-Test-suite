(function(){
	// Defining constants
	const __SVGNS__ = 'http://www.w3.org/2000/svg';
	
	// Defining variables
	var testDefinition, PATH, NODE;
	
	// Building context for the tests
	PATH = document.createElementNS(__SVGNS__, 'path');
	PATH.setAttributeNS(__SVGNS__, 'd', 'M0,0L10,0');
	NODE = PATH.createSVGPathSegClosePath();
	
	// Building the test suite object
	testDefinition = {
		info : {
			title : 'SVGPathSegClosePath',
			comment : 'SVGPathSegClosePath corresponds to a "closepath" (z) path data command.'
		},
		test : [
			function() {
				var out = {
				    	title: "Check the existance of the SVGPathSegClosePath object definition",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && typeof SVGPathSegClosePath != 'undefined' && NODE instanceof SVGPathSegClosePath && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGPathSegClosePath also implement SVGPathSeg",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && typeof SVGPathSeg != 'undefined' && NODE instanceof SVGPathSeg && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			}
		]
	}

	TESTRUNNER.run(testDefinition);
})();