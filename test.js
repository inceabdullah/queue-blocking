const utils = require("./utils");
const Queue = require("./");

const first = Queue.makeQueue("1st");
const second = Queue.makeQueue("2nd");
(async ()=>{
    //-----------------------
    // load the first func for first queue with the sec 20. It will run because it is the first one.
    first.push(async ()=>{
        console.log("f-1")
    }, 20);
    // load the first func for second queue with the sec 20. It will run because it is the first one.
    second.push(async ()=>{
        console.log("s-1")
    }, 20);
    //-----------------------------------

    //-----------------------
    //load second one immediately with the sec 20. It will run if first one invoked before 20 sec. min else will be ignored
    first.push(async ()=>{
        console.log("f-2")
    }, 20);
    //load second one immediately with the sec 3. It will run if first one invoked before 3 sec. min.
    second.push(async ()=>{
        console.log("s-2")
    }, 3);
    //-----------------------------------


    //waiting 21 sec.
    await utils.waitSec(21);

    //-----------------------
    //load third one. It will run if last func invocated before 20 sec. min
    first.push(async ()=>{
        console.log("f-3")
    }, 20);
    //load third one. It will run if last func invocated before 30 sec. min else will be ignored
    second.push(async ()=>{
        console.log("s-3")
    }, 30);
    console.log("Added 3rd ones.");
    //-----------------------------------

    //-----------------------
    //load forth one with the sec 2.
    first.push(async ()=>{
        console.log("f-4")
    }, 2);
    //load forth one with the sec 3.
    first.push(async ()=>{
        console.log("s-4")
    }, 3);
    //-----------------------------------

})();
