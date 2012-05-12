(function(){
	// Defining constants
	const __SVGNS__ = 'http://www.w3.org/2000/svg';
	
	// Defining variables
	var testDefinition, NODE;
	
	// Building context for the tests
	NODE = document.createElementNS(__SVGNS__, 'marker');
			
	
	// Building the test suite object
	testDefinition = {
		info : {
			title : 'SVGMarkerElement',
			comment : 'This interface is used to access and to manipulate the SVG "marker" elements'
		},
		test : [
			function() {
				var out = {
				    	title: "Check the existance of the SVGMarkerElement object definition", 
				    	comment: "", 
				    	result: 0
				    };
				
				try{
				    out.result = (NODE && typeof SVGMarkerElement != 'undefined' && NODE instanceof SVGMarkerElement && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGMarkerElement also implement SVGElement", 
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
				    	title: "SVGMarkerElement also implement SVGLangSpace", 
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
				    	title: "SVGMarkerElement also implement SVGExternalResourcesRequired", 
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
				    	title: "SVGMarkerElement also implement SVGStylable", 
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
				    	title: "SVGMarkerElement also implement SVGFitToViewBox", 
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && typeof SVGFitToViewBox != 'undefined' && NODE instanceof SVGFitToViewBox && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the SVG_MARKERUNITS_UNKNOWN constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGMarkerElement != 'undefined' && SVGMarkerElement.SVG_MARKERUNITS_UNKNOWN !== undefined && SVGMarkerElement.SVG_MARKERUNITS_UNKNOWN === 0 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the SVG_MARKERUNITS_USERSPACEONUSE constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGMarkerElement != 'undefined' && SVGMarkerElement.SVG_MARKERUNITS_USERSPACEONUSE !== undefined && SVGMarkerElement.SVG_MARKERUNITS_USERSPACEONUSE === 1 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the SVG_MARKERUNITS_STROKEWIDTH constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGMarkerElement != 'undefined' && SVGMarkerElement.SVG_MARKERUNITS_STROKEWIDTH !== undefined && SVGMarkerElement.SVG_MARKERUNITS_STROKEWIDTH === 2 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the SVG_MARKER_ORIENT_UNKNOWN constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGMarkerElement != 'undefined' && SVGMarkerElement.SVG_MARKER_ORIENT_UNKNOWN !== undefined && SVGMarkerElement.SVG_MARKER_ORIENT_UNKNOWN === 0 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the SVG_MARKER_ORIENT_AUTO constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGMarkerElement != 'undefined' && SVGMarkerElement.SVG_MARKER_ORIENT_AUTO !== undefined && SVGMarkerElement.SVG_MARKER_ORIENT_AUTO === 1 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the SVG_MARKER_ORIENT_ANGLE constant",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (typeof SVGMarkerElement != 'undefined' && SVGMarkerElement.SVG_MARKER_ORIENT_ANGLE !== undefined && SVGMarkerElement.SVG_MARKER_ORIENT_ANGLE === 2 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the refX attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.refX !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The refX attribute is of type SVGAnimatedLength",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.refX && typeof SVGAnimatedLength != 'undefined' && NODE.refX instanceof SVGAnimatedLength && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the refY attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.refY !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The refY attribute is of type SVGAnimatedLength",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.refY && typeof SVGAnimatedLength != 'undefined' && NODE.refY instanceof SVGAnimatedLength && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the markerUnits attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.markerUnits !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The markerUnits attribute is of type SVGAnimatedEnumeration",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.markerUnits && typeof SVGAnimatedEnumeration != 'undefined' && NODE.markerUnits instanceof SVGAnimatedEnumeration && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the markerWidth attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.markerWidth !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The markerWidth attribute is of type SVGAnimatedLength",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.markerWidth && typeof SVGAnimatedLength != 'undefined' && NODE.markerWidth instanceof SVGAnimatedLength && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the markerHeight attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.markerHeight !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The markerHeight attribute is of type SVGAnimatedLength",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.markerHeight && typeof SVGAnimatedLength != 'undefined' && NODE.markerHeight instanceof SVGAnimatedLength && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the orientType attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.orientType !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The orientType attribute is of type SVGAnimatedEnumeration",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.orientType && typeof SVGAnimatedEnumeration != 'undefined' && NODE.orientType instanceof SVGAnimatedEnumeration && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the orientAngle attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.orientAngle !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The orientAngle attribute is of type SVGAnimatedAngle",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.orientAngle && typeof SVGAnimatedAngle != 'undefined' && NODE.orientAngle instanceof SVGAnimatedAngle && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the setOrientToAuto method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.setOrientToAuto && typeof NODE.setOrientToAuto === "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the setOrientToAngle method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.setOrientToAngle && typeof NODE.setOrientToAngle === "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			}
		]
	}

	TESTRUNNER.run(testDefinition);
})();