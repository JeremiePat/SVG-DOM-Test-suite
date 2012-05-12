(function(){
	// Defining constants
	const __SVGNS__ = 'http://www.w3.org/2000/svg';
	
	// Defining variables
	var testDefinition, ELEMENT, NODE;
	
	// Building context for the tests
	ELEMENT = document.createElementNS('http://www.w3.org/2000/svg', 'use'), 
	NODE = ELEMENT.instanceRoot || ELEMENT.animatedInstanceRoot || null;
			
	
	// Building the test suite object
	testDefinition = {
		info : {
			title : 'SVGElementInstance',
			comment : 'This interface is used to access and to manipulate the shadow tree of a "use" elements'
		},
		test : [
			function() {
				var out = {
				    	title: "Check the existance of the SVGElementInstance object definition", 
				    	comment: "", 
				    	result: 0
				    };
				
				try{
				    out.result = (typeof SVGElementInstance != 'undefined' && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "SVGElementInstance also implement EventTarget", 
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && typeof EventTarget != 'undefined' && NODE instanceof EventTarget && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the correspondingElement attribute",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.correspondingElement && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The correspondingElement attribute is of type SVGElement",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.correspondingElement && typeof SVGElement != 'undefined' && NODE.correspondingElement instanceof SVGElement && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the correspondingUseElement attribute",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.correspondingUseElement && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The correspondingUseElement attribute is of type SVGUseElement",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.correspondingUseElement && typeof SVGUseElement != 'undefined' && NODE.correspondingUseElement instanceof SVGUseElement && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the parentNode attribute",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.parentNode && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The parentNode attribute is of type SVGElementInstance",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.parentNode && typeof SVGElementInstance != 'undefined' && NODE.parentNode instanceof SVGElementInstance && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the childNodes attribute",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.childNodes && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The childNodes attribute is of type SVGElementInstanceList",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.childNodes && typeof SVGElementInstanceList != 'undefined' && NODE.childNodes instanceof SVGElementInstanceList && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the firstChild attribute",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.firstChild && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The firstChild attribute is of type SVGElementInstance",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.firstChild && typeof SVGElementInstance != 'undefined' && NODE.firstChild instanceof SVGElementInstance && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the lastChild attribute",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.lastChild && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The lastChild attribute is of type SVGElementInstance",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.lastChild && typeof SVGElementInstance != 'undefined' && NODE.lastChild instanceof SVGElementInstance && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the previousSibling attribute",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.previousSibling && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The previousSibling attribute is of type SVGElementInstance",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.previousSibling && typeof SVGElementInstance != 'undefined' && NODE.previousSibling instanceof SVGElementInstance && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "Support of the nextSibling attribute",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.nextSibling && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			},
			function() {
				var out = {
				    	title: "The nextSibling attribute is of type SVGElementInstance",
				    	comment: "", 
				    	result: 0
				    };
				
				try {
				    out.result = (NODE && NODE.nextSibling && typeof SVGElementInstance != 'undefined' && NODE.nextSibling instanceof SVGElementInstance && 1) || 0;
				} catch(e) {
					out.comment = e.message;
				}
				
				return out;
			}
		]
	}

	TESTRUNNER.run(testDefinition);
})();