(function(){
	// Defining constants
	const __SVGNS__ = 'http://www.w3.org/2000/svg';
	
	// Defining variables
	var testDefinition, NODE, TICK;
	
	// Building context for the tests
	NODE = document.createElementNS(__SVGNS__, 'svg');
	
	// Building the test suite object
	testDefinition = {
		info : {
			title : 'SVGSVGElement',
			comment : 'This interface is used to access and to manipulate the SVG "svg" elements'
		},
		test : [
			function() {
				var out = {
				    	title: "Check the existance of the SVGSVGElement object definition",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && typeof SVGSVGElement != 'undefined' && NODE instanceof SVGSVGElement && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGSVGElement also implement SVGElement", 
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
				    	title: "SVGSVGElement also implement SVGTests", 
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
				    	title: "SVGSVGElement also implement SVGLangSpace",
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
				    	title: "SVGSVGElement also implement SVGExternalResourcesRequired",
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
				    	title: "SVGSVGElement also implement SVGStylable",
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
				    	title: "SVGSVGElement also implement SVGLocatable",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && typeof SVGLocatable != 'undefined' && NODE instanceof SVGLocatable && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGSVGElement also implement SVGFitToViewBox",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && typeof SVGFitToViewBox != 'undefined' && NODE instanceof SVGFitToViewBox && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGSVGElement also implement SVGZoomAndPan",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && typeof SVGZoomAndPan != 'undefined' && NODE instanceof SVGZoomAndPan && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGSVGElement also implement DocumentEvent",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && typeof DocumentEvent != 'undefined' && NODE instanceof DocumentEvent && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGSVGElement also implement ViewCSS",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && typeof ViewCSS != 'undefined' && NODE instanceof ViewCSS && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGSVGElement also implement DocumentCSS",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && typeof DocumentCSS != 'undefined' && NODE instanceof DocumentCSS && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the x attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.x && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The x attribute is of type SVGAnimatedLength",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.x && typeof SVGAnimatedLength != 'undefined' && NODE.x instanceof SVGAnimatedLength && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the y attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.y && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The y attribute is of type SVGAnimatedLength",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.y && typeof SVGAnimatedLength != 'undefined' && NODE.y instanceof SVGAnimatedLength && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the width attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.width && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The width attribute is of type SVGAnimatedLength",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.width && typeof SVGAnimatedLength != 'undefined' && NODE.width instanceof SVGAnimatedLength && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the height attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.height && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The height attribute is of type SVGAnimatedLength",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.height && typeof SVGAnimatedLength != 'undefined' && NODE.height instanceof SVGAnimatedLength && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the contentScriptType attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.contentScriptType && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The contentScriptType attribute is of type String",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
				    out.result = (NODE && NODE.contentScriptType && (typeof NODE.contentScriptType === 'string' || (typeof DOMString != 'undefined' && NODE.contentScriptType instanceof DOMString)) && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The contentScriptType attribute raise a NO_MODIFICATION_ALLOWED_ERR exception on setting",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					if(NODE && NODE.contentScriptType){
						try {
							NODE.contentScriptType = "foo";
						} catch(e) {
							out.result = (e.name == "NO_MODIFICATION_ALLOWED_ERR" && 1) || 0;
						}
					}
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the contentStyleType attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.contentScriptType && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The contentStyleType attribute is of type String",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.contentStyleType && (typeof NODE.contentStyleType === 'string' || (typeof DOMString != 'undefined' && NODE.contentStyleType instanceof DOMString)) && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The contentStyleType attribute raise a NO_MODIFICATION_ALLOWED_ERR exception on setting",
				    	comment: "", 
				    	result: 0
				    }
				
				try {
					if(NODE && NODE.contentStyleType){
						try {
							NODE.contentStyleType = "foo";
						} catch(e) {
							out.result = (e.name == "NO_MODIFICATION_ALLOWED_ERR" && 1) || 0;
						}
					}
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the viewport attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.viewport && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The viewport attribute is of type SVGRect",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.viewport && typeof SVGRect != 'undefined' && NODE.viewport instanceof SVGRect && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the pixelUnitToMillimeterX attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.pixelUnitToMillimeterX && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The pixelUnitToMillimeterX attribute is of type Number",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.pixelUnitToMillimeterX && !isNaN(NODE.pixelUnitToMillimeterX) && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the pixelUnitToMillimeterY attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.pixelUnitToMillimeterY && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The pixelUnitToMillimeterY attribute is of type Number",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.pixelUnitToMillimeterY && !isNaN(NODE.pixelUnitToMillimeterY) && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the screenPixelToMillimeterX attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.screenPixelToMillimeterX && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The screenPixelToMillimeterX attribute is of type Number",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.screenPixelToMillimeterX && !isNaN(NODE.screenPixelToMillimeterX) && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the screenPixelToMillimeterY attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.screenPixelToMillimeterY && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The screenPixelToMillimeterY attribute is of type Number",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.screenPixelToMillimeterY && !isNaN(NODE.screenPixelToMillimeterY) && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the useCurrentView attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.useCurrentView !== undefined && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The useCurrentView attribute is of type Boolean",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.useCurrentView && (NODE.useCurrentView === true || NODE.useCurrentView === false) && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the currentView attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.currentView && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The currentView attribute is of type SVGViewSpec",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.currentView && typeof SVGViewSpec != 'undefined' && NODE.currentView instanceof SVGViewSpec && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the currentScale attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.currentScale && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The currentScale attribute is of type Number",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.currentScale && !isNaN(NODE.currentScale) && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the currentTranslate attribute",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.currentTranslate && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The currentTranslate attribute is of type SVGPoint",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.currentTranslate && typeof SVGPoint != 'undefined' && NODE.currentTranslate instanceof SVGPoint && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the suspendRedraw method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.suspendRedraw && typeof NODE.suspendRedraw == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The suspendRedraw method return a Number",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					TICK = NODE.suspendRedraw(10);
				    out.result = (!isNaN(TICK) && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the unsuspendRedraw method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.unsuspendRedraw && typeof NODE.unsuspendRedraw == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the unsuspendRedrawAll method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.unsuspendRedrawAll && typeof NODE.unsuspendRedrawAll == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the forceRedraw method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.forceRedraw && typeof NODE.forceRedraw == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the pauseAnimations method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.pauseAnimations && typeof NODE.pauseAnimations == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the unpauseAnimations method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.unpauseAnimations && typeof NODE.unpauseAnimations == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the animationsPaused method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.animationsPaused && typeof NODE.animationsPaused == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The animationsPaused method return a Boolean",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					TICK = NODE.animationsPaused();
				    out.result = ((TICK === false || TICK === true) && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the getCurrentTime method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.getCurrentTime && typeof NODE.getCurrentTime == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The getCurrentTime method return a Number",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					TICK = NODE.getCurrentTime();
				    out.result = (!isNaN(TICK) && TICK >= 0 && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the setCurrentTime method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.setCurrentTime && typeof NODE.setCurrentTime == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the getIntersectionList method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.getIntersectionList && typeof NODE.getIntersectionList == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the getEnclosureList method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.getEnclosureList && typeof NODE.getEnclosureList == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the checkIntersection method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.checkIntersection && typeof NODE.checkIntersection == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the checkEnclosure method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.checkEnclosure && typeof NODE.checkEnclosure == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the createSVGNumber method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.createSVGNumber && typeof NODE.createSVGNumber == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The createSVGNumber method return an SVGNumber",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					TICK = NODE.createSVGNumber();
				    out.result = (typeof SVGNumber != 'undefined' && TICK instanceof SVGNumber && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the createSVGLength method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.createSVGLength && typeof NODE.createSVGLength == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The createSVGLength method return an SVGLength",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					TICK = NODE.createSVGLength();
				    out.result = (typeof SVGLength != 'undefined' && TICK instanceof SVGLength && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the createSVGAngle method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.createSVGAngle && typeof NODE.createSVGAngle == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The createSVGAngle method return an SVGAngle",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					TICK = NODE.createSVGAngle();
				    out.result = (typeof SVGAngle != 'undefined' && TICK instanceof SVGAngle && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the createSVGPoint method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.createSVGPoint && typeof NODE.createSVGPoint == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The createSVGPoint method return an SVGPoint",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					TICK = NODE.createSVGPoint();
				    out.result = (typeof SVGPoint != 'undefined' && TICK instanceof SVGPoint && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the createSVGMatrix method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.createSVGMatrix && typeof NODE.createSVGMatrix == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The createSVGMatrix method return an SVGMatrix",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					TICK = NODE.createSVGMatrix();
				    out.result = (typeof SVGMatrix != 'undefined' && TICK instanceof SVGMatrix && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the createSVGRect method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.createSVGRect && typeof NODE.createSVGRect == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The createSVGRect method return an SVGRect",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					TICK = NODE.createSVGRect();
				    out.result = (typeof SVGRect != 'undefined' && TICK instanceof SVGRect && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the createSVGTransform method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.createSVGTransform && typeof NODE.createSVGTransform == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The createSVGTransform method return an SVGTransform",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					TICK = NODE.createSVGTransform();
				    out.result = (typeof SVGTransform != 'undefined' && TICK instanceof SVGTransform && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the createSVGTransformFromMatrix method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.createSVGTransformFromMatrix && typeof NODE.createSVGTransformFromMatrix == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The createSVGTransformFromMatrix method return an SVGTransform",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
					TICK = NODE.createSVGTransformFromMatrix(NODE.createSVGMatrix());
				    out.result = (typeof SVGTransform != 'undefined' && TICK instanceof SVGTransform && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the getElementById method",
				    	comment: "", 
				    	result: 0
				    }
				
				try{
				    out.result = (NODE && NODE.getElementById && typeof NODE.getElementById == "function" && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			}
		]
	}

	TESTRUNNER.run(testDefinition);
})();