/**
 * Adding a sum function the Arrays
 *
 * Array.sum() will sum all the elements of the Array and return the result
 * Array.sum(index) will sum all the element of the Array starting at index "index"
 * Array.sum(start, end) will sum all the element of the Array starting at index "start" and  ending at index "end".
 * If "start" is greater than "end" sum() will return 0
 *
 * For exemple :
 *
 * var foo, bar = [1, 1, 1, 1, 1, 1]
 *
 * foo = bar.sum()     // foo = 6
 * foo = bar.sum(4)    // foo = 2
 * foo = bar.sum(0, 4) // foo = 5
 * foo = bar.sum(3, 3) // foo = 1
 * foo = bar.sum(3, 2) // foo = 0
 */
Array.prototype.sum = function(){
	var index, value, sum = 0,
	    start = arguments[0] || 0,
	    end = arguments[1] || this.length - 1;
	
	if (start <= end) {
		for (index = start; index <= end; index++) {
			value = parseFloat(this[index]);
			sum += isNaN(value) ? 0 : value;
		}
	}
	
	return sum;
};

/*
Array.prototype.sum = function(){
	return this.reduce(function(prev, curr){return prev + curr;}, 0);
}
*/

/**
 * TESTRUNNER definition
 */
var TESTRUNNER = (function() {
	var events = [],
	    testFiles = [],
	    currentTest = 0,
	    
		TESTRUNNER = {
			/**
			 * This method laad the tests to be passed
			 *
			 * @param fileList : An Array containing the whole list of files' URL with tests to perform.
			 */
			load : function(fileList) {
				//console.log('load')
				//console.log(fileList)
				if (fileList && fileList instanceof Array) {
					testFiles = fileList;
					currentTest = 0;
					return true;
				}
				
				return false;
			},
			
			/**
			 * This methode run a test or a test suite
			 *
			 * If used without parameters, it start running the test suite previously loaded through
			 * the "load" method.
			 *
			 * The test definition object should have the following structure :
			 * {
			 *     text : {
			 *         title : "the global title for the test",
			 *         context : "A context string that detail the intend of the test",
			 *         steps : [] // An array of string represanting the title of each step of the test
			 *     },
			 *     test : {
			 *         context : "" // A string that will be evaluate at the begining of the test to provide some context to all the steps of the test
			 *         steps : [] // An Array of strings that will be evaluate individualy. Each step must be able to be evaluate as 1 (pass) or 0 (fail)
			 *     }
			 * }
			 *
			 * @param testDefinition an Object describing the test to execute
			 * @param standalone a boolean indicating if the test is a standalone test (true) or a test from a test suite (false)
			 */
			run : function(testDefinition, standalone){
				//console.log('run')
				//console.log(testDefinition)
				if (testDefinition) {
					execTest(testDefinition);
					if (!standalone) {
						unloadTest(currentTest++);
					}
				}
				
				if (!standalone) {
					//console.log('launch')
					//console.log(currentTest)
					loadTest(currentTest);
				}
			},
	
			/**
			 * This method is used to trigger events from the test
			 *
			 * @param eventName : the name of the triggered event. It can be "start", "step" or "end"
			 * @param context : A contextual object for the triggerd event. 
			 * 
			 * context = {
			 *     id : A unique ID for the current test
			 *     title : The title of the event,
			 *     comment : Any comment about the event,
			 *     conformance : A number between 0 and 1 that indicate the degree of conformance for the test : 0 by default
			 * }
			 */
			trigger : function(eventName, context) {
				var i, eventObject;
				if (eventName in events === false) return;
				
				eventObject = {
					id: context.id || null,
					title: context.title || "",
					comment: context.comment || "",
					conformance: context.conformance || 0
				}
				
				for (var i = events[eventName].length - 1; i >= 0; i--) {
					try {
						events[eventName][i](eventObject);
					} catch (e) {
						if(console && console.log) {
							console.log(e);
						}
					}
				}
			},
	
			/**
			 * This method is used to add an event listener
			 *
			 * @param eventName : the name of the event to listen. It can be "start", "step" or "end"
			 */
			addEventListener : function(eventName, callback) {
				events[eventName] = events[eventName] || [];
				events[eventName].push(callback);
			},
			
			/**
			 * This method is used to remove an event listener
			 *
			 * @param conformance : A number between 0 and 1 that indicate the degree of conformance for the test : 0 by default
			 */
			removeEventListener : function(eventName, callback) {
				if (eventName in events === false) return;
    			events[eventName].splice(events[eventName].indexOf(callback), 1);
			}
		};
	
	function execTest(testObject) {
		var index, result, 
		    total = 0,
		    testId = "T" + Math.round(Math.random() * 1000000);
		//console.log(testObject);
		try {
			TESTRUNNER.trigger("start", {
				id: testId,
				title: testObject.info.title,
				comment: testObject.info.comment,
				conformance: 0
			})
			
			for (index in testObject.test) {
				if(isNaN(index)) continue;
			
				try {
					result = testObject.test[index]();
				} catch (e) {
					if(console && console.log) {
						console.log(e);
					}
					result = {
						title: "Failed test N°" + index,
						comment: e.message,
						result: 0
					}
				}
				
				total += result.result;
			
				TESTRUNNER.trigger("step", {
					id: testId,
					title: result.title,
					comment: result.comment,
					conformance: result.result
				});
			}
		
			// Ending the test
			
			TESTRUNNER.trigger("end", {
				id: testId,
				title: testObject.info.title,
				comment: "Test successfuly passed",
				conformance: total / testObject.test.length
			});
		} catch (e) {
			//console.log(e);
			TESTRUNNER.trigger("end", {
				id: testId,
				title: testObject.info.title,
				comment: "Unable to run the test : " + e.message,
				conformance: 0
			});
		}
	}
	
	/**
	 * This function load the file contaning a test to perform
	 */
	function loadTest(index) {
		var node = document.createElement('script'),
		    head = document.getElementsByTagName('head')[0];
		
		if (index < testFiles.length) {
			//console.log(testFiles[index]);
			node.src = testFiles[index];
			head.appendChild(node);
		}
	}
	
	/**
	 * This function unload the file contaning a test to perform
	 */
	function unloadTest(index) {
		var node, nodes = document.getElementsByTagName("script"),
		    head = document.getElementsByTagName('head')[0];
		
		for (node in nodes) {
			if(nodes[node].src && nodes[node].src.match(testFiles[index])) {
				head.removeChild(nodes[node]);
				break;
			}
		}
	}

	return TESTRUNNER;
})();