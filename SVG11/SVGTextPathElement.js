(function(){
	// Defining constants
	const __SVGNS__ = 'http://www.w3.org/2000/svg';
	
	// Defining variables
	var testDefinition, NODE;
	
	// Building context for the tests
	NODE = document.createElementNS(__SVGNS__, 'textPath');
			
	
	// Building the test suite object
	testDefinition = {
		info : {
			title : 'SVGTextPathElement',
			comment : 'This interface is used to access and to manipulate the SVG "textPath" elements'
		},
		test : [
			function() {
				var out = {
				    	title: "Check the existance of the SVGTextPathElement object definition", 
				    	comment: "", 
				    	result: 0
				    };
				
				try{
				    out.result = (NODE && typeof SVGTextPathElement != 'undefined' && NODE instanceof SVGTextPathElement && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGTextPathElement also implement SVGTextContentElement", 
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && typeof SVGTextContentElement != 'undefined' && NODE instanceof SVGTextContentElement && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGTextPathElement also implement SVGURIReference", 
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
				    	title: "Support of the TEXTPATH_METHODTYPE_UNKNOWN constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGTextPathElement != 'undefined' && SVGTextPathElement.TEXTPATH_METHODTYPE_UNKNOWN !== undefined && SVGTextPathElement.TEXTPATH_METHODTYPE_UNKNOWN === 0 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the TEXTPATH_METHODTYPE_ALIGN constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGTextPathElement != 'undefined' && SVGTextPathElement.TEXTPATH_METHODTYPE_ALIGN !== undefined && SVGTextPathElement.TEXTPATH_METHODTYPE_ALIGN === 1 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the TEXTPATH_METHODTYPE_STRETCH constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGTextPathElement != 'undefined' && SVGTextPathElement.TEXTPATH_METHODTYPE_STRETCH !== undefined && SVGTextPathElement.TEXTPATH_METHODTYPE_STRETCH === 2 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the TEXTPATH_SPACINGTYPE_UNKNOWN constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGTextPathElement != 'undefined' && SVGTextPathElement.TEXTPATH_SPACINGTYPE_UNKNOWN !== undefined && SVGTextPathElement.TEXTPATH_SPACINGTYPE_UNKNOWN === 0 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the TEXTPATH_SPACINGTYPE_AUTO constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGTextPathElement != 'undefined' && SVGTextPathElement.TEXTPATH_SPACINGTYPE_AUTO !== undefined && SVGTextPathElement.TEXTPATH_SPACINGTYPE_AUTO === 1 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the TEXTPATH_SPACINGTYPE_EXACT constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGTextPathElement != 'undefined' && SVGTextPathElement.TEXTPATH_SPACINGTYPE_EXACT !== undefined && SVGTextPathElement.TEXTPATH_SPACINGTYPE_EXACT === 2 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the startOffset attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.startOffset !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The startOffset attribute is of type SVGAnimatedLength",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.startOffset && typeof SVGAnimatedLength != 'undefined' && NODE.startOffset instanceof SVGAnimatedLength && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the method attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.method !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The method attribute is of type SVGAnimatedEnumeration",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.method && typeof SVGAnimatedEnumeration != 'undefined' && NODE.method instanceof SVGAnimatedEnumeration && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the spacing attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.spacing !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The spacing attribute is of type SVGAnimatedEnumeration",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.spacing && typeof SVGAnimatedEnumeration != 'undefined' && NODE.spacing instanceof SVGAnimatedEnumeration && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			}
		]
	}

	TESTRUNNER.run(testDefinition);
})();