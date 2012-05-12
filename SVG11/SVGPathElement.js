(function(){
	// Defining constants
	const __SVGNS__ = 'http://www.w3.org/2000/svg';
	
	// Defining variables
	var testDefinition, TICK, NODE;
	
	// Building context for the tests
	NODE = document.createElementNS(__SVGNS__, 'path');
	NODE.setAttributeNS(__SVGNS__, 'd', 'M0,0L10,0');
	
	// Building the test suite object
	testDefinition = {
		info : {
			title : 'SVGPathElement',
			comment : 'This interface is used to access and to manipulate the SVG "path" elements'
		},
		test : [
			function() {
				var out = {
				    	title: "Check the existance of the SVGPathElement object definition",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && typeof SVGPathElement != 'undefined' && NODE instanceof SVGPathElement && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGPathElement also implement SVGElement", 
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
				    	title: "SVGPathElement also implement SVGTests", 
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
				    	title: "SVGPathElement also implement SVGLangSpace",
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
				    	title: "SVGPathElement also implement SVGExternalResourcesRequired",
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
				    	title: "SVGPathElement also implement SVGStylable",
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
				    	title: "SVGPathElement also implement SVGTransformable",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && typeof SVGTransformable != 'undefined' && NODE instanceof SVGTransformable && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGPathElement also implement SVGAnimatedPathData",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && typeof SVGAnimatedPathData != 'undefined' && NODE instanceof SVGAnimatedPathData && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the pathLength attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.pathLength && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The pathLength attribute is of type SVGAnimatedNumber",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.pathLength && typeof SVGAnimatedNumber != 'undefined' && NODE.pathLength instanceof SVGAnimatedNumber && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the getTotalLength method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.getTotalLength && typeof NODE.getTotalLength == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The getTotalLength method return a Number",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					TICK = NODE.getTotalLength();
				    out.result = (!isNaN(TICK) && TICK >= 0 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the getPointAtLength method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.getPointAtLength && typeof NODE.getPointAtLength == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The getPointAtLength method return an SVGPoint",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.getPointAtLength && typeof NODE.getPointAtLength == "function" && typeof SVGPoint !== 'undifined' && NODE.getPointAtLength(1) instanceof SVGPoint && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the getPathSegAtLength method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.getPathSegAtLength && typeof NODE.getPathSegAtLength == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The getPathSegAtLength method return a Number",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					TICK = NODE.getPathSegAtLength(1);
				    out.result = (!isNaN(TICK) && TICK >= 0 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the createSVGPathSegClosePath method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.createSVGPathSegClosePath && typeof NODE.createSVGPathSegClosePath == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The createSVGPathSegClosePath method return an SVGPathSegClosePath",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.createSVGPathSegClosePath && typeof NODE.createSVGPathSegClosePath == "function" && typeof SVGPathSegClosePath !== 'undifined' && NODE.createSVGPathSegClosePath() instanceof SVGPathSegClosePath && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the createSVGPathSegMovetoAbs method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.createSVGPathSegMovetoAbs && typeof NODE.createSVGPathSegMovetoAbs == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The createSVGPathSegMovetoAbs method return an SVGPathSegMovetoAbs",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.createSVGPathSegMovetoAbs && typeof NODE.createSVGPathSegMovetoAbs == "function" && typeof SVGPathSegMovetoAbs !== 'undifined' && NODE.createSVGPathSegMovetoAbs(1,1) instanceof SVGPathSegMovetoAbs && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the createSVGPathSegMovetoRel method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.createSVGPathSegMovetoRel && typeof NODE.createSVGPathSegMovetoRel == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The createSVGPathSegMovetoRel method return an SVGPathSegMovetoRel",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.createSVGPathSegMovetoRel && typeof NODE.createSVGPathSegMovetoRel == "function" && typeof SVGPathSegMovetoRel !== 'undifined' && NODE.createSVGPathSegMovetoRel(1,1) instanceof SVGPathSegMovetoRel && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the createSVGPathSegLinetoAbs method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.createSVGPathSegLinetoAbs && typeof NODE.createSVGPathSegLinetoAbs == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The createSVGPathSegLinetoAbs method return an SVGPathSegLinetoAbs",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.createSVGPathSegLinetoAbs && typeof NODE.createSVGPathSegLinetoAbs == "function" && typeof SVGPathSegLinetoAbs !== 'undifined' && NODE.createSVGPathSegLinetoAbs(1,1) instanceof SVGPathSegLinetoAbs && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the createSVGPathSegLinetoRel method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.createSVGPathSegLinetoRel && typeof NODE.createSVGPathSegLinetoRel == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The createSVGPathSegLinetoRel method return an SVGPathSegLinetoRel",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.createSVGPathSegLinetoRel && typeof NODE.createSVGPathSegLinetoRel == "function" && typeof SVGPathSegLinetoRel !== 'undifined' && NODE.createSVGPathSegLinetoRel(1,1) instanceof SVGPathSegLinetoRel && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the createSVGPathSegCurvetoCubicAbs method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.createSVGPathSegCurvetoCubicAbs && typeof NODE.createSVGPathSegCurvetoCubicAbs == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The createSVGPathSegCurvetoCubicAbs method return an SVGPathSegCurvetoCubicAbs",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.createSVGPathSegCurvetoCubicAbs && typeof NODE.createSVGPathSegCurvetoCubicAbs == "function" && typeof SVGPathSegCurvetoCubicAbs !== 'undifined' && NODE.createSVGPathSegCurvetoCubicAbs(1,1,1,1,1,1) instanceof SVGPathSegCurvetoCubicAbs && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the createSVGPathSegCurvetoCubicRel method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.createSVGPathSegCurvetoCubicRel && typeof NODE.createSVGPathSegCurvetoCubicRel == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The createSVGPathSegCurvetoCubicRel method return an SVGPathSegCurvetoCubicRel",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.createSVGPathSegCurvetoCubicRel && typeof NODE.createSVGPathSegCurvetoCubicRel == "function" && typeof SVGPathSegCurvetoCubicRel !== 'undifined' && NODE.createSVGPathSegCurvetoCubicRel(1,1,1,1,1,1) instanceof SVGPathSegCurvetoCubicRel && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the createSVGPathSegCurvetoQuadraticAbs method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.createSVGPathSegCurvetoQuadraticAbs && typeof NODE.createSVGPathSegCurvetoQuadraticAbs == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The createSVGPathSegCurvetoQuadraticAbs method return an SVGPathSegCurvetoQuadraticAbs",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.createSVGPathSegCurvetoQuadraticAbs && typeof NODE.createSVGPathSegCurvetoQuadraticAbs == "function" && typeof SVGPathSegCurvetoQuadraticAbs !== 'undifined' && NODE.createSVGPathSegCurvetoQuadraticAbs(1,1,1,1) instanceof SVGPathSegCurvetoQuadraticAbs && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the createSVGPathSegCurvetoQuadraticRel method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.createSVGPathSegCurvetoQuadraticRel && typeof NODE.createSVGPathSegCurvetoQuadraticRel == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The createSVGPathSegCurvetoQuadraticRel method return an SVGPathSegCurvetoQuadraticRel",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.createSVGPathSegCurvetoQuadraticRel && typeof NODE.createSVGPathSegCurvetoQuadraticRel == "function" && typeof SVGPathSegCurvetoQuadraticRel !== 'undifined' && NODE.createSVGPathSegCurvetoQuadraticRel(1,1,1,1) instanceof SVGPathSegCurvetoQuadraticRel && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the createSVGPathSegArcAbs method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.createSVGPathSegArcAbs && typeof NODE.createSVGPathSegArcAbs == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The createSVGPathSegArcAbs method return an SVGPathSegArcAbs",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.createSVGPathSegArcAbs && typeof NODE.createSVGPathSegArcAbs == "function" && typeof SVGPathSegArcAbs !== 'undifined' && NODE.createSVGPathSegArcAbs(1,1,1,1,1,true,true) instanceof SVGPathSegArcAbs && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the createSVGPathSegArcRel method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.createSVGPathSegArcRel && typeof NODE.createSVGPathSegArcRel == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The createSVGPathSegArcRel method return an SVGPathSegArcRel",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.createSVGPathSegArcRel && typeof NODE.createSVGPathSegArcRel == "function" && typeof SVGPathSegArcRel !== 'undifined' && NODE.createSVGPathSegArcRel(1,1,1,1,1,true,true) instanceof SVGPathSegArcRel && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the createSVGPathSegLinetoHorizontalAbs method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.createSVGPathSegLinetoHorizontalAbs && typeof NODE.createSVGPathSegLinetoHorizontalAbs == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The createSVGPathSegLinetoHorizontalAbs method return an SVGPathSegLinetoHorizontalAbs",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.createSVGPathSegLinetoHorizontalAbs && typeof NODE.createSVGPathSegLinetoHorizontalAbs == "function" && typeof SVGPathSegLinetoHorizontalAbs !== 'undifined' && NODE.createSVGPathSegLinetoHorizontalAbs(1) instanceof SVGPathSegLinetoHorizontalAbs && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the createSVGPathSegLinetoHorizontalRel method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.createSVGPathSegLinetoHorizontalRel && typeof NODE.createSVGPathSegLinetoHorizontalRel == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The createSVGPathSegLinetoHorizontalRel method return an SVGPathSegLinetoHorizontalRel",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.createSVGPathSegLinetoHorizontalRel && typeof NODE.createSVGPathSegLinetoHorizontalRel == "function" && typeof SVGPathSegLinetoHorizontalRel !== 'undifined' && NODE.createSVGPathSegLinetoHorizontalRel(1) instanceof SVGPathSegLinetoHorizontalRel && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the createSVGPathSegLinetoVerticalAbs method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.createSVGPathSegLinetoVerticalAbs && typeof NODE.createSVGPathSegLinetoVerticalAbs == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The createSVGPathSegLinetoVerticalAbs method return an SVGPathSegLinetoVerticalAbs",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.createSVGPathSegLinetoVerticalAbs && typeof NODE.createSVGPathSegLinetoVerticalAbs == "function" && typeof SVGPathSegLinetoVerticalAbs !== 'undifined' && NODE.createSVGPathSegLinetoVerticalAbs(1) instanceof SVGPathSegLinetoVerticalAbs && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the createSVGPathSegLinetoVerticalRel method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.createSVGPathSegLinetoVerticalRel && typeof NODE.createSVGPathSegLinetoVerticalRel == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The createSVGPathSegLinetoVerticalRel method return an SVGPathSegLinetoVerticalRel",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.createSVGPathSegLinetoVerticalRel && typeof NODE.createSVGPathSegLinetoVerticalRel == "function" && typeof SVGPathSegLinetoVerticalRel !== 'undifined' && NODE.createSVGPathSegLinetoVerticalRel(1) instanceof SVGPathSegLinetoVerticalRel && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the createSVGPathSegCurvetoCubicSmoothAbs method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.createSVGPathSegCurvetoCubicSmoothAbs && typeof NODE.createSVGPathSegCurvetoCubicSmoothAbs == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The createSVGPathSegCurvetoCubicSmoothAbs method return an SVGPathSegCurvetoCubicSmoothAbs",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.createSVGPathSegCurvetoCubicSmoothAbs && typeof NODE.createSVGPathSegCurvetoCubicSmoothAbs == "function" && typeof SVGPathSegCurvetoCubicSmoothAbs !== 'undifined' && NODE.createSVGPathSegCurvetoCubicSmoothAbs(1,1,1,1) instanceof SVGPathSegCurvetoCubicSmoothAbs && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the createSVGPathSegCurvetoCubicSmoothRel method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.createSVGPathSegCurvetoCubicSmoothRel && typeof NODE.createSVGPathSegCurvetoCubicSmoothRel == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The createSVGPathSegCurvetoCubicSmoothRel method return an SVGPathSegCurvetoCubicSmoothRel",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.createSVGPathSegCurvetoCubicSmoothRel && typeof NODE.createSVGPathSegCurvetoCubicSmoothRel == "function" && typeof SVGPathSegCurvetoCubicSmoothRel !== 'undifined' && NODE.createSVGPathSegCurvetoCubicSmoothRel(1,1,1,1) instanceof SVGPathSegCurvetoCubicSmoothRel && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the createSVGPathSegCurvetoQuadraticSmoothAbs method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.createSVGPathSegCurvetoQuadraticSmoothAbs && typeof NODE.createSVGPathSegCurvetoQuadraticSmoothAbs == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The createSVGPathSegCurvetoQuadraticSmoothAbs method return an SVGPathSegCurvetoQuadraticSmoothAbs",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.createSVGPathSegCurvetoQuadraticSmoothAbs && typeof NODE.createSVGPathSegCurvetoQuadraticSmoothAbs == "function" && typeof SVGPathSegCurvetoQuadraticSmoothAbs !== 'undifined' && NODE.createSVGPathSegCurvetoQuadraticSmoothAbs(1,1) instanceof SVGPathSegCurvetoQuadraticSmoothAbs && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the createSVGPathSegCurvetoQuadraticSmoothRel method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.createSVGPathSegCurvetoQuadraticSmoothRel && typeof NODE.createSVGPathSegCurvetoQuadraticSmoothRel == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The createSVGPathSegCurvetoQuadraticSmoothRel method return an SVGPathSegCurvetoQuadraticSmoothRel",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					out.result = (NODE && NODE.createSVGPathSegCurvetoQuadraticSmoothRel && typeof NODE.createSVGPathSegCurvetoQuadraticSmoothRel == "function" && typeof SVGPathSegCurvetoQuadraticSmoothRel !== 'undifined' && NODE.createSVGPathSegCurvetoQuadraticSmoothRel(1,1) instanceof SVGPathSegCurvetoQuadraticSmoothRel && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			}
		]
	}

	TESTRUNNER.run(testDefinition);
})();