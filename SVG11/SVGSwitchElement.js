(function(){
	// Defining constants
	const __SVGNS__ = 'http://www.w3.org/2000/svg';
	
	// Defining variables
	var testDefinition, NODE;
	
	// Building context for the tests
	NODE = document.createElementNS(__SVGNS__, 'switch');
	
	// Building the test suite object
	testDefinition = {
		info : {
			title : 'SVGSwitchElement',
			comment : 'This interface is used to access and to manipulate the SVG "switch" elements'
		},
		test : [
			function() {
				var out = {
				    	title: "Check the existance of the SVGSwitchElement object definition", 
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && typeof SVGSwitchElement != 'undefined' && NODE instanceof SVGSwitchElement && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGSwitchElement also implement SVGElement", 
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && typeof SVGElement != 'undefined' && NODE instanceof SVGElement && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGSwitchElement also implement SVGTests", 
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && typeof SVGTests != 'undefined' && NODE instanceof SVGTests && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGSwitchElement also implement SVGLangSpace",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && typeof SVGLangSpace != 'undefined' && NODE instanceof SVGLangSpace && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGSwitchElement also implement SVGExternalResourcesRequired",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && typeof SVGExternalResourcesRequired != 'undefined' && NODE instanceof SVGExternalResourcesRequired && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGSwitchElement also implement SVGStylable",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && typeof SVGStylable != 'undefined' && NODE instanceof SVGStylable && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGSwitchElement also implement SVGTransformable",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && typeof SVGTransformable != 'undefined' && NODE instanceof SVGTransformable && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			}
		]
	}

	TESTRUNNER.run(testDefinition);
})();