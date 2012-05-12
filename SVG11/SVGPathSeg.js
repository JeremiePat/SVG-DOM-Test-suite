(function(){
	// Defining constants
	const __SVGNS__ = 'http://www.w3.org/2000/svg';
	
	// Defining variables
	var testDefinition, PATH, NODE;
	
	// Building context for the tests
	PATH = document.createElementNS(__SVGNS__, 'path');
	PATH.setAttributeNS(__SVGNS__, 'd', 'M0,0L10,0');
	NODE = PATH.createSVGPathSegClosePath()
	    || PATH.createSVGPathSegMovetoAbs(1,1)
	    || PATH.createSVGPathSegMovetoRel(1,1)
	    || PATH.createSVGPathSegLinetoAbs(1,1)
	    || PATH.createSVGPathSegLinetoRel(1,1)
	    || PATH.createSVGPathSegCurvetoCubicAbs(1,1,1,1,1,1)
	    || PATH.createSVGPathSegCurvetoCubicRel(1,1,1,1,1,1)
	    || PATH.createSVGPathSegCurvetoQuadraticAbs(1,1,1,1)
	    || PATH.createSVGPathSegCurvetoQuadraticRel(1,1,1,1)
	    || PATH.createSVGPathSegArcAbs(1,1,1,1,1,true,true)
	    || PATH.createSVGPathSegArcRel(1,1,1,1,1,true,true)
	    || PATH.createSVGPathSegLinetoHorizontalAbs(1)
	    || PATH.createSVGPathSegLinetoHorizontalRel(1)
	    || PATH.createSVGPathSegLinetoVerticalAbs(1)
	    || PATH.createSVGPathSegLinetoVerticalRel(1)
	    || PATH.createSVGPathSegCurvetoCubicSmoothAbs(1,1,1,1)
	    || PATH.createSVGPathSegCurvetoCubicSmoothRel(1,1,1,1)
	    || PATH.createSVGPathSegCurvetoQuadraticSmoothAbs(1,1)
	    || PATH.createSVGPathSegCurvetoQuadraticSmoothRel(1,1);
	
	// Building the test suite object
	testDefinition = {
		info : {
			title : 'SVGPathSeg',
			comment : 'SVGPathSeg is a base interface that corresponds to a single command within a path data specification'
		},
		test : [
			function() {
				var out = {
				    	title: "Check the existance of the SVGPathSeg object definition",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGPathSeg != 'undefined' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the PATHSEG_UNKNOWN constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGPathSeg != 'undefined' && SVGPathSeg.PATHSEG_UNKNOWN !== undefined && SVGPathSeg.PATHSEG_UNKNOWN === 0 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the PATHSEG_CLOSEPATH constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGPathSeg != 'undefined' && SVGPathSeg.PATHSEG_CLOSEPATH !== undefined && SVGPathSeg.PATHSEG_CLOSEPATH === 1 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the PATHSEG_MOVETO_ABS constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGPathSeg != 'undefined' && SVGPathSeg.PATHSEG_MOVETO_ABS !== undefined && SVGPathSeg.PATHSEG_MOVETO_ABS === 2 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the PATHSEG_MOVETO_REL constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGPathSeg != 'undefined' && SVGPathSeg.PATHSEG_MOVETO_REL !== undefined && SVGPathSeg.PATHSEG_MOVETO_REL === 3 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the PATHSEG_LINETO_ABS constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGPathSeg != 'undefined' && SVGPathSeg.PATHSEG_LINETO_ABS !== undefined && SVGPathSeg.PATHSEG_LINETO_ABS === 4 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the PATHSEG_LINETO_REL constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGPathSeg != 'undefined' && SVGPathSeg.PATHSEG_LINETO_REL !== undefined && SVGPathSeg.PATHSEG_LINETO_REL === 5 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the PATHSEG_CURVETO_CUBIC_ABS constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGPathSeg != 'undefined' && SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS !== undefined && SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS === 6 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the PATHSEG_CURVETO_CUBIC_REL constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGPathSeg != 'undefined' && SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL !== undefined && SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL === 7 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the PATHSEG_CURVETO_QUADRATIC_ABS constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGPathSeg != 'undefined' && SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS !== undefined && SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS === 8 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the PATHSEG_CURVETO_QUADRATIC_REL constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGPathSeg != 'undefined' && SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL !== undefined && SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL === 9 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the PATHSEG_ARC_ABS constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGPathSeg != 'undefined' && SVGPathSeg.PATHSEG_ARC_ABS !== undefined && SVGPathSeg.PATHSEG_ARC_ABS === 10 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the PATHSEG_ARC_REL constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGPathSeg != 'undefined' && SVGPathSeg.PATHSEG_ARC_REL !== undefined && SVGPathSeg.PATHSEG_ARC_REL === 11 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the PATHSEG_LINETO_HORIZONTAL_ABS constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGPathSeg != 'undefined' && SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS !== undefined && SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS === 12 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the PATHSEG_LINETO_HORIZONTAL_REL constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGPathSeg != 'undefined' && SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL !== undefined && SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL === 13 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the PATHSEG_LINETO_VERTICAL_ABS constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGPathSeg != 'undefined' && SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS !== undefined && SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS === 14 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the PATHSEG_LINETO_VERTICAL_REL constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGPathSeg != 'undefined' && SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL !== undefined && SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL === 15 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the PATHSEG_CURVETO_CUBIC_SMOOTH_ABS constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGPathSeg != 'undefined' && SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS !== undefined && SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS === 16 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the PATHSEG_CURVETO_CUBIC_SMOOTH_REL constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGPathSeg != 'undefined' && SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL !== undefined && SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL === 17 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGPathSeg != 'undefined' && SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS !== undefined && SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS === 18 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGPathSeg != 'undefined' && SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL !== undefined && SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL === 19 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the pathSegType attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.pathSegType !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The pathSegType attribute is of type Number",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && !isNaN(NODE.pathSegType) && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the pathSegTypeAsLetter attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.pathSegTypeAsLetter !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The pathSegTypeAsLetter attribute is of type String",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.pathSegTypeAsLetter !== undefined && (typeof NODE.pathSegTypeAsLetter === 'string' || (typeof DOMString !== undefined && NODE.pathSegTypeAsLetter instanceof DOMString)) && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			}
		]
	}

	TESTRUNNER.run(testDefinition);
})();