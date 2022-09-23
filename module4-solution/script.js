// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!

*/

// STEP 1:
// Wrap the entire contents of script.js inside of an IIFE
// See Lecture 52, part 2
// (Note, Step 2 will be done in the SpeakHello.js file.)
(function (){
    console.log("Part 1");
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    
    // STEP 10:
    // Loop over the names array and say either 'Hello' or "Good Bye"
    // using either the helloSpeaker's or byeSpeaker's 'speak' method.
    // See Lecture 50, part 1
    for (var i = 0; i < names.length; i++) {

        // STEP 11:
        // Retrieve the first letter of the current name in the loop.
        // Use the string object's 'charAt' function. Since we are looking for
        // names that start with either upper case or lower case 'J'/'j', call
        // string object's 'toLowerCase' method on the result so we can compare
        // to lower case character 'j' afterwards.
        // Look up these methods on Mozilla Developer Network web site if needed.
        var firstLetter = names[i].charAt(0).toLowerCase();

        // STEP 12:
        // Compare the 'firstLetter' retrieved in STEP 11 to lower case
        // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
        // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
        // name in the loop.
        if (firstLetter === "j") {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
        
    }
    
    //Part 2
    console.log("----------------------");
    console.log("Part 2");
    function jChecker(name){
        var firstLetter = name.charAt(0).toLowerCase();
        if (firstLetter === "j") {
            return byeSpeaker.speakSimple(name);
        } else {
            return helloSpeaker.speakSimple(name);
        }
    }

    var speakSimpleArray = names.map(jChecker);

    for(var i = 0; i < speakSimpleArray.length; i++){
        console.log(speakSimpleArray[i]);
    }

    //Part 3
    console.log("----------------------");
    console.log("Part 3");

    var sortedGreetings = names.reduce(
        (previousValue, currentValue) => {
                if(currentValue.charAt(0).toLowerCase() !== "j"){
                     previousValue.hello.push(helloSpeaker.speakSimple(currentValue));
                } else {
                    previousValue.bye.push(byeSpeaker.speakSimple(currentValue))
                }
                return previousValue;
        },{hello: [], bye: []})

    for(var i = 0; i < sortedGreetings.hello.length; i++){
        console.log(sortedGreetings.hello[i]);
    }
    for(var i = 0; i < sortedGreetings.bye.length; i++){
        console.log(sortedGreetings.bye[i]);
    }  

    /* Using group by */
    // function groupBy(objectArray, property) {
    //     return objectArray.reduce((previousValue, currentValue) => {
    //         if(currentValue.charAt(0).toLowerCase() !== property){
    //             if(!previousValue["hello"]){
    //                 previousValue["hello"] = [];
    //             }
    //             previousValue["hello"].push(helloSpeaker.speakSimple(currentValue))
    //         } else {
    //             if(!previousValue["bye"]){
    //                 previousValue["bye"] = [];
    //             }
    //             previousValue["bye"].push(byeSpeaker.speakSimple(currentValue))
    //         }
    //         return previousValue;
    //     }, {});
    // }
    // var groupedPeople = groupBy(names, "j");
    // console.log(groupedPeople);
    // for(var i = 0; i < groupedPeople.hello.length; i++){
    //     console.log(groupedPeople.hello[i]);
    // }
    // for(var i = 0; i < groupedPeople.bye.length; i++){
    //     console.log(groupedPeople.bye[i]);
    // }

    /* Using 1 empty array */
    // var hello = names.reduce(
    //     (previousValue, currentValue) => {
    //         if(currentValue.charAt(0).toLowerCase() !== "j"){
    //             return [...previousValue, helloSpeaker.speakSimple(currentValue)];  
    //         } 
    //         return previousValue;
    //     },[]
    // )
    // for(var i = 0; i < hello.length; i++){
    //     console.log(hello[i]);
    // }
    // var bye = names.reduce(
    //     (previousValue, currentValue) => {
    //         if(currentValue.charAt(0).toLowerCase() === "j"){
    //             return [...previousValue, byeSpeaker.speakSimple(currentValue)]; 
    //         } 
    //         return previousValue;
    //     }, []
    // )
    // for(var i = 0; i < bye.length; i++){
    //     console.log(bye[i]);
    // }
    
})();
