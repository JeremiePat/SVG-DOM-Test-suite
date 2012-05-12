(function(){
	// Defining constants
	const __SVGNS__ = 'http://www.w3.org/2000/svg';
	
	// Defining variables
	var testDefinition, SVG, NODE;
	
	// Building context for the tests
	NODE = document.createElementNS(__SVGNS__, 'linearGradient');
	
	// Building the test suite object
	testDefinition = {
		info : {
			title : 'SVGGradientElement',
			comment : 'This interface is a base interface for gradients'
		},
		test : [
			function() {
				var out = {
				    	title: "Check the existance of the SVGGradientElement object definition", 
				    	comment: "", 
				    	result: 0
				    };
				
				try{
				    out.result = (NODE && typeof SVGGradientElement != 'undefined' && NODE instanceof SVGGradientElement && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGGradientElement also implement SVGElement", 
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
				    	title: "SVGGradientElement also implement SVGURIReference",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && typeof SVGURIReference != 'undefined' && NODE instanceof SVGURIReference && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGGradientElement also implement SVGExternalResourcesRequired",
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
				    	title: "SVGGradientElement also implement SVGStylable",
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
				    	title: "SVGGradientElement also implement SVGUnitTypes",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && typeof SVGUnitTypes != 'undefined' && NODE instanceof SVGUnitTypes && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the SVG_SPREADMETHOD_UNKNOWN constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGGradientElement != 'undefined' && SVGGradientElement.SVG_SPREADMETHOD_UNKNOWN !== undefined && SVGGradientElement.SVG_SPREADMETHOD_UNKNOWN === 0 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the SVG_SPREADMETHOD_PAD constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGGradientElement != 'undefined' && SVGGradientElement.SVG_SPREADMETHOD_PAD !== undefined && SVGGradientElement.SVG_SPREADMETHOD_PAD === 1 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the SVG_SPREADMETHOD_REFLECT constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGGradientElement != 'undefined' && SVGGradientElement.SVG_SPREADMETHOD_REFLECT !== undefined && SVGGradientElement.SVG_SPREADMETHOD_REFLECT === 2 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the SVG_SPREADMETHOD_REPEAT constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGGradientElement != 'undefined' && SVGGradientElement.SVG_SPREADMETHOD_REPEAT !== undefined && SVGGradientElement.SVG_SPREADMETHOD_REPEAT === 3 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the gradientUnits attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.gradientUnits !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The gradientUnits attribute is of type SVGAnimatedEnumeration",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.gradientUnits !== undefined && typeof SVGAnimatedEnumeration != 'undefined' && NODE.gradientUnits instanceof SVGAnimatedEnumeration && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the gradientTransform attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.gradientTransform !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The gradientTransform attribute is of type SVGAnimatedTransformList",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.gradientTransform !== undefined && typeof SVGAnimatedTransformList != 'undefined' && NODE.gradientTransform instanceof SVGAnimatedTransformList && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the spreadMethod attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.spreadMethod !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The spreadMethod attribute is of type SVGAnimatedEnumeration",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.spreadMethod !== undefined && typeof SVGAnimatedEnumeration != 'undefined' && NODE.spreadMethod instanceof SVGAnimatedEnumeration && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			}
		]
	}

	TESTRUNNER.run(testDefinition);
})();