(function(){
	// Defining constants
	const __SVGNS__ = 'http://www.w3.org/2000/svg';
	
	// Defining variables
	var testDefinition, NODE;
	
	// Building context for the tests
	NODE = document.createElementNS(__SVGNS__, 'polyline') || document.createElementNS(__SVGNS__, 'polygon');
			
	
	// Building the test suite object
	testDefinition = {
		info : {
			title : 'SVGAnimatedPoints',
			comment : 'This interface is used to access and to manipulate points définition on the SVG "polygon" and "polyline" elements'
		},
		test : [
			function() {
				var out = {
				    	title: "Check the existance of the SVGAnimatedPoints object definition", 
				    	comment: "", 
				    	result: 0
				    };
				
				try{
				    out.result = (NODE && typeof SVGAnimatedPoints != 'undefined' && NODE instanceof SVGAnimatedPoints && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the points attribute", 
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.points && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The points attribute is of type SVGPointList",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.points && typeof SVGPointList != 'undefined' && NODE.points instanceof SVGPointList && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the animatedPoints attribute",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.animatedPoints && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The animatedPoints attribute is of type SVGPointList",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.animatedPoints && typeof SVGPointList != 'undefined' && NODE.animatedPoints instanceof SVGPointList && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			}
		]
	}
	
	TESTRUNNER.run(testDefinition);
})();