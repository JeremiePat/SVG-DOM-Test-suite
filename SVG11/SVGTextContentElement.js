(function(){
	// Defining constants
	const __SVGNS__ = 'http://www.w3.org/2000/svg';
	
	// Defining variables
	var testDefinition, SVG, NODE;
	
	// Building context for the tests
	SVG = document.createElementNS(__SVGNS__, 'svg');
	NODE = document.createElementNS(__SVGNS__, 'text');
	NODE.appendChild(document.createTextNode('foo'));
	SVG.appendChild(NODE);
			
	
	// Building the test suite object
	testDefinition = {
		info : {
			title : 'SVGTextContentElement',
			comment : 'This interface is inherited by various text-related interfaces'
		},
		test : [
			function() {
				var out = {
				    	title: "Check the existance of the SVGTextContentElement object definition", 
				    	comment: "", 
				    	result: 0
				    };
				
				try{
				    out.result = (NODE && typeof SVGTextContentElement != 'undefined' && NODE instanceof SVGTextContentElement && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGTextContentElement also implement SVGElement", 
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
				    	title: "SVGTextContentElement also implement SVGTests",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && typeof SVGTests != 'undefined' && NODE instanceof SVGTests && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGTextContentElement also implement SVGLangSpace",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && typeof SVGLangSpace != 'undefined' && NODE instanceof SVGLangSpace && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGTextContentElement also implement SVGExternalResourcesRequired",
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
				    	title: "SVGTextContentElement also implement SVGStylable",
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
				    	title: "Support of the LENGTHADJUST_UNKNOWN constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGTextContentElement != 'undefined' && SVGTextContentElement.LENGTHADJUST_UNKNOWN !== undefined && SVGTextContentElement.LENGTHADJUST_UNKNOWN === 0 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the LENGTHADJUST_SPACING constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGTextContentElement != 'undefined' && SVGTextContentElement.LENGTHADJUST_SPACING !== undefined && SVGTextContentElement.LENGTHADJUST_SPACING === 1 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the LENGTHADJUST_SPACINGANDGLYPHS constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGTextContentElement != 'undefined' && SVGTextContentElement.LENGTHADJUST_SPACINGANDGLYPHS !== undefined && SVGTextContentElement.LENGTHADJUST_SPACINGANDGLYPHS === 2 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the textLength attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.textLength !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The textLength attribute is of type SVGAnimatedLength",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.textLength !== undefined && typeof SVGAnimatedLength != 'undefined' && NODE.textLength instanceof SVGAnimatedLength && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the lengthAdjust attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.lengthAdjust !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The lengthAdjust attribute is of type SVGAnimatedEnumeration",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.lengthAdjust !== undefined && typeof SVGAnimatedEnumeration != 'undefined' && NODE.lengthAdjust instanceof SVGAnimatedEnumeration && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the getNumberOfChars method",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.getNumberOfChars && typeof NODE.getNumberOfChars == 'function' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The getNumberOfChars method return a Number",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.getNumberOfChars && !isNaN(NODE.getNumberOfChars()) && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the getComputedTextLength method",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.getComputedTextLength && typeof NODE.getComputedTextLength == 'function' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The getComputedTextLength method return a Number",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.getComputedTextLength && !isNaN(NODE.getComputedTextLength()) && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the getSubStringLength method",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.getSubStringLength && typeof NODE.getSubStringLength == 'function' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The getSubStringLength method return a Number",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.getSubStringLength && !isNaN(NODE.getSubStringLength(0,1)) && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "getSubStringLength throw an INDEX_SIZE_ERR exception if the 1st parameter is negative",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					NODE.getSubStringLength(-1,1);
				} catch(e) {
					if(e.code === DOMException.INDEX_SIZE_ERR) {
						out.result = 1;
					} else {
						out.comment = e.message;
					}
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "getSubStringLength throw an INDEX_SIZE_ERR exception if the 2nd parameter is negative",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					NODE.getSubStringLength(0,-1);
				} catch(e) {
					if(e.code === DOMException.INDEX_SIZE_ERR) {
						out.result = 1;
					} else {
						out.comment = e.message;
					}
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "getSubStringLength throw an INDEX_SIZE_ERR exception if the 1st parameter is greater than the text length",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					NODE.getSubStringLength(100,1);
				} catch(e) {
					if(e.code === DOMException.INDEX_SIZE_ERR) {
						out.result = 1;
					} else {
						out.comment = e.message;
					}
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the getStartPositionOfChar method",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.getStartPositionOfChar && typeof NODE.getStartPositionOfChar == 'function' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The getStartPositionOfChar method return an SVGPoint",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					CHILD = SVG.cloneNode(true);
					document.body.appendChild(CHILD);
					TEST = document.getElementsByTagName('text')[0];
					out.result = (TEST && TEST.getStartPositionOfChar && typeof SVGPoint != 'undefined' && TEST.getStartPositionOfChar(1) instanceof SVGPoint && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				} finally {
					document.body.removeChild(CHILD);
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "getStartPositionOfChar throw an INDEX_SIZE_ERR exception if its parameter is negative",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					CHILD = SVG.cloneNode(true);
					document.body.appendChild(CHILD);
					TEST = document.getElementsByTagName('text')[0];
					TEST.getStartPositionOfChar(-1);
				} catch(e) {
					if(e.code === DOMException.INDEX_SIZE_ERR) {
						out.result = 1;
					} else {
						out.comment = e.message;
					}
				} finally {
					document.body.removeChild(CHILD);
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "getStartPositionOfChar throw an INDEX_SIZE_ERR exception if its parameter is greater than the text length",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					CHILD = SVG.cloneNode(true);
					document.body.appendChild(CHILD);
					TEST = document.getElementsByTagName('text')[0];
					TEST.getStartPositionOfChar(100);
				} catch(e) {
					if(e.code === DOMException.INDEX_SIZE_ERR) {
						out.result = 1;
					} else {
						out.comment = e.message;
					}
				} finally {
					document.body.removeChild(CHILD);
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the getEndPositionOfChar method",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.getEndPositionOfChar && typeof NODE.getEndPositionOfChar == 'function' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The getEndPositionOfChar method return an SVGPoint",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					CHILD = SVG.cloneNode(true);
					document.body.appendChild(CHILD);
					TEST = document.getElementsByTagName('text')[0];
					out.result = (TEST && TEST.getEndPositionOfChar && typeof SVGPoint != 'undefined' && TEST.getEndPositionOfChar(1) instanceof SVGPoint && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				} finally {
					document.body.removeChild(CHILD);
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "getEndPositionOfChar throw an INDEX_SIZE_ERR exception if its parameter is negative",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					CHILD = SVG.cloneNode(true);
					document.body.appendChild(CHILD);
					TEST = document.getElementsByTagName('text')[0];
					TEST.getEndPositionOfChar(-1);
				} catch(e) {
					if(e.code === DOMException.INDEX_SIZE_ERR) {
						out.result = 1;
					} else {
						out.comment = e.message;
					}
				} finally {
					document.body.removeChild(CHILD);
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "getEndPositionOfChar throw an INDEX_SIZE_ERR exception if its parameter is greater than the text length",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					CHILD = SVG.cloneNode(true);
					document.body.appendChild(CHILD);
					TEST = document.getElementsByTagName('text')[0];
					TEST.getEndPositionOfChar(100);
				} catch(e) {
					if(e.code === DOMException.INDEX_SIZE_ERR) {
						out.result = 1;
					} else {
						out.comment = e.message;
					}
				} finally {
					document.body.removeChild(CHILD);
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the getExtentOfChar method",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.getExtentOfChar && typeof NODE.getExtentOfChar == 'function' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The getExtentOfChar method return an SVGRect",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					CHILD = SVG.cloneNode(true);
					document.body.appendChild(CHILD);
					TEST = document.getElementsByTagName('text')[0];
					out.result = (TEST && TEST.getExtentOfChar && typeof SVGRect != 'undefined' && TEST.getExtentOfChar(1) instanceof SVGRect && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				} finally {
					document.body.removeChild(CHILD);
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "getExtentOfChar throw an INDEX_SIZE_ERR exception if its parameter is negative",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					CHILD = SVG.cloneNode(true);
					document.body.appendChild(CHILD);
					TEST = document.getElementsByTagName('text')[0];
					TEST.getExtentOfChar(-1);
				} catch(e) {
					if(e.code === DOMException.INDEX_SIZE_ERR) {
						out.result = 1;
					} else {
						out.comment = e.message;
					}
				} finally {
					document.body.removeChild(CHILD);
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "getExtentOfChar throw an INDEX_SIZE_ERR exception if its parameter is greater than the text length",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					CHILD = SVG.cloneNode(true);
					document.body.appendChild(CHILD);
					TEST = document.getElementsByTagName('text')[0];
					TEST.getExtentOfChar(100);
				} catch(e) {
					if(e.code === DOMException.INDEX_SIZE_ERR) {
						out.result = 1;
					} else {
						out.comment = e.message;
					}
				} finally {
					document.body.removeChild(CHILD);
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the getRotationOfChar method",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.getRotationOfChar && typeof NODE.getRotationOfChar == 'function' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var TEST, out = {
				    	title: "The getRotationOfChar method return a Number",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					CHILD = SVG.cloneNode(true);
					document.body.appendChild(CHILD);
					TEST = document.getElementsByTagName('text')[0];
					out.result = (TEST && TEST.getRotationOfChar && !isNaN(TEST.getRotationOfChar(1)) && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				} finally {
					document.body.removeChild(CHILD);
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "getRotationOfChar throw an INDEX_SIZE_ERR exception if its parameter is negative",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					CHILD = SVG.cloneNode(true);
					document.body.appendChild(CHILD);
					TEST = document.getElementsByTagName('text')[0];
					TEST.getRotationOfChar(-1);
				} catch(e) {
					if(e.code === DOMException.INDEX_SIZE_ERR) {
						out.result = 1;
					} else {
						out.comment = e.message;
					}
				} finally {
					document.body.removeChild(CHILD);
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "getRotationOfChar throw an INDEX_SIZE_ERR exception if its parameter is greater than the text length",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					CHILD = SVG.cloneNode(true);
					document.body.appendChild(CHILD);
					TEST = document.getElementsByTagName('text')[0];
					TEST.getRotationOfChar(100);
				} catch(e) {
					if(e.code === DOMException.INDEX_SIZE_ERR) {
						out.result = 1;
					} else {
						out.comment = e.message;
					}
				} finally {
					document.body.removeChild(CHILD);
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the getCharNumAtPosition method",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.getCharNumAtPosition && typeof NODE.getCharNumAtPosition == 'function' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var POINT, out = {
				    	title: "The getCharNumAtPosition method return a Number",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					POINT = SVG.createSVGPoint();
					out.result = (NODE && NODE.getCharNumAtPosition && !isNaN(NODE.getCharNumAtPosition(POINT)) && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the selectSubString method",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					out.result = (NODE && NODE.selectSubString && typeof NODE.selectSubString == 'function' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "selectSubString throw an INDEX_SIZE_ERR exception if the 1st parameter is negative",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					NODE.selectSubString(-1,1);
				} catch(e) {
					if(e.code === DOMException.INDEX_SIZE_ERR) {
						out.result = 1;
					} else {
						out.comment = e.message;
					}
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "selectSubString throw an INDEX_SIZE_ERR exception if the 2nd parameter is negative",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					NODE.selectSubString(0,-1);
				} catch(e) {
					if(e.code === DOMException.INDEX_SIZE_ERR) {
						out.result = 1;
					} else {
						out.comment = e.message;
					}
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "selectSubString throw an INDEX_SIZE_ERR exception if the 1st parameter is greater than the text length",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					NODE.selectSubString(100,1);
				} catch(e) {
					if(e.code === DOMException.INDEX_SIZE_ERR) {
						out.result = 1;
					} else {
						out.comment = e.message;
					}
				}
				
				return out;
			}
		]
	}

	TESTRUNNER.run(testDefinition);
})();