(function(){
	// Defining constants
	const __SVGNS__ = 'http://www.w3.org/2000/svg';
	
	// Defining variables
	var testDefinition, SVG, NODE;
	
	// Building context for the tests
	SVG = document.createElementNS(__SVGNS__, 'svg');
	NODE = SVG.createSVGTransform();
	
	// Building the test suite object
	testDefinition = {
		info : {
			title : 'SVGTransform',
			comment : 'SVGTransform is the interface for one of the component transformations within an SVGTransformList'
		},
		test : [
			function() {
				var out = {
				    	title: "Check the existance of the SVGTransform object definition", 
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGTransform != 'undefined' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the SVG_TRANSFORM_UNKNOWN constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGTransform != 'undefined' && SVGTransform.SVG_TRANSFORM_UNKNOWN !== undefined && SVGTransform.SVG_TRANSFORM_UNKNOWN === 0 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the SVG_TRANSFORM_MATRIX constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGTransform != 'undefined' && SVGTransform.SVG_TRANSFORM_MATRIX !== undefined && SVGTransform.SVG_TRANSFORM_MATRIX === 1 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the SVG_TRANSFORM_TRANSLATE constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGTransform != 'undefined' && SVGTransform.SVG_TRANSFORM_TRANSLATE !== undefined && SVGTransform.SVG_TRANSFORM_TRANSLATE === 2 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the SVG_TRANSFORM_SCALE constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGTransform != 'undefined' && SVGTransform.SVG_TRANSFORM_SCALE !== undefined && SVGTransform.SVG_TRANSFORM_SCALE === 3 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the SVG_TRANSFORM_ROTATE constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGTransform != 'undefined' && SVGTransform.SVG_TRANSFORM_ROTATE !== undefined && SVGTransform.SVG_TRANSFORM_ROTATE === 4 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the SVG_TRANSFORM_SKEWX constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGTransform != 'undefined' && SVGTransform.SVG_TRANSFORM_SKEWX !== undefined && SVGTransform.SVG_TRANSFORM_SKEWX === 5 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the SVG_TRANSFORM_SKEWY constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGTransform != 'undefined' && SVGTransform.SVG_TRANSFORM_SKEWY !== undefined && SVGTransform.SVG_TRANSFORM_SKEWY === 6 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the type attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.type !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The type attribute is of type Number",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.type !== undefined && !isNaN(NODE.type) && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the matrix attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.matrix !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The matrix attribute is of type SVGMatrix",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.matrix !== undefined && typeof SVGMatrix != 'undefined' && NODE.matrix instanceof SVGMatrix && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the angle attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.angle !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The angle attribute is of type Number",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.angle !== undefined && !isNaN(NODE.angle) && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the setMatrix method",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.setMatrix && typeof NODE.setMatrix == 'function' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the setTranslate method",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.setTranslate && typeof NODE.setTranslate == 'function' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the setScale method",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.setScale && typeof NODE.setScale == 'function' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the setRotate method",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.setRotate && typeof NODE.setRotate == 'function' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the setSkewX method",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.setSkewX && typeof NODE.setSkewX == 'function' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the setSkewY method",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.setSkewY && typeof NODE.setSkewY == 'function' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			}
		]
	}

	TESTRUNNER.run(testDefinition);
})();