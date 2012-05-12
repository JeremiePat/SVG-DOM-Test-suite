(function(){
	// Defining constants
	const __SVGNS__ = 'http://www.w3.org/2000/svg';
	
	// Defining variables
	var testDefinition, SVG, NODE;
	
	// Building context for the tests
	SVG = document.createElementNS(__SVGNS__, 'svg');
	NODE = SVG.createSVGMatrix();
	
	// Building the test suite object
	testDefinition = {
		info : {
			title : 'SVGMatrix',
			comment : 'An SVGMatrix defines a 2x3 transform matrix'
		},
		test : [
			function() {
				var out = {
				    	title: "Check the existance of the SVGMatrix object definition", 
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGMatrix != 'undefined' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the a attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.a !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The a attribute is of type Number",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.a !== undefined && !isNaN(NODE.a) && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the b attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.b !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The b attribute is of type Number",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.b !== undefined && !isNaN(NODE.b) && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the c attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.c !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The c attribute is of type Number",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.c !== undefined && !isNaN(NODE.c) && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the d attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.d !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The d attribute is of type Number",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.d !== undefined && !isNaN(NODE.d) && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the e attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.e !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The e attribute is of type Number",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.e !== undefined && !isNaN(NODE.e) && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the f attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.f !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The f attribute is of type Number",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.f !== undefined && !isNaN(NODE.f) && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the multiply method",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.multiply && typeof NODE.multiply == 'function' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var MATRIX, out = {
				    	title: "The multiply method return an SVGMatrix",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					MATRIX = SVG.createSVGMatrix();
					out.result = (NODE && NODE.multiply && typeof SVGMatrix != 'undefined' && NODE.multiply(MATRIX) instanceof SVGMatrix && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the inverse method",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.inverse && typeof NODE.inverse == 'function' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The inverse method return an SVGMatrix",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.inverse && typeof SVGMatrix != 'undefined' && NODE.inverse() instanceof SVGMatrix && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the translate method",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.translate && typeof NODE.translate == 'function' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The translate method return an SVGMatrix",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.translate && typeof SVGMatrix != 'undefined' && NODE.translate(1,1) instanceof SVGMatrix && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the scale method",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.scale && typeof NODE.scale == 'function' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The scale method return an SVGMatrix",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.scale && typeof SVGMatrix != 'undefined' && NODE.scale(1) instanceof SVGMatrix && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the scaleNonUniform method",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.scaleNonUniform && typeof NODE.scaleNonUniform == 'function' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The scaleNonUniform method return an SVGMatrix",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.scaleNonUniform && typeof SVGMatrix != 'undefined' && NODE.scaleNonUniform(1,1) instanceof SVGMatrix && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the rotate method",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.rotate && typeof NODE.rotate == 'function' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The rotate method return an SVGMatrix",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.rotate && typeof SVGMatrix != 'undefined' && NODE.rotate(0) instanceof SVGMatrix && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the rotateFromVector method",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.rotateFromVector && typeof NODE.rotateFromVector == 'function' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The rotateFromVector method return an SVGMatrix",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.rotateFromVector && typeof SVGMatrix != 'undefined' && NODE.rotateFromVector(1,1) instanceof SVGMatrix && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the flipX method",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.flipX && typeof NODE.flipX == 'function' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The flipX method return an SVGMatrix",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.flipX && typeof SVGMatrix != 'undefined' && NODE.flipX() instanceof SVGMatrix && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the flipY method",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.flipY && typeof NODE.flipY == 'function' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The flipY method return an SVGMatrix",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.flipY && typeof SVGMatrix != 'undefined' && NODE.flipY() instanceof SVGMatrix && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the skewX method",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.skewX && typeof NODE.skewX == 'function' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The skewX method return an SVGMatrix",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.skewX && typeof SVGMatrix != 'undefined' && NODE.skewX(0) instanceof SVGMatrix && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the skewY method",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.skewY && typeof NODE.skewY == 'function' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The skewY method return an SVGMatrix",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.skewY && typeof SVGMatrix != 'undefined' && NODE.skewY(0) instanceof SVGMatrix && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			}
		]
	}

	TESTRUNNER.run(testDefinition);
})();