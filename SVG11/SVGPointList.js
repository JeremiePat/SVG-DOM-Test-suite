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
			title : 'SVGPointList',
			comment : 'An SVGPointList defines a list of SVGPoint'
		},
		test : [
			function() {
				var out = {
				    	title: "Check the existance of the SVGPointList object definition", 
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGPointList != 'undefined' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			}
			// TODO:Add complete test suite
		]
	}

	TESTRUNNER.run(testDefinition);
})();