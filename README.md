## Queue with Blocking

This is used for sending like an alarm email. You might get trigger in every 20 sec. But you want to receive email in every 15 mins. Queue function will ignore other emails between beginnig of getting trigger first and the latest after 15 min.

### Get Queue

```javascript
const Queue = require("./");

const first = Queue.makeQueue("1st");
const second = Queue.makeQueue("2nd");
```

### Added async func with sec. duration
```javascript
    first.push(async ()=>{
        console.log("it will be written immediately. Because it is first")
    }, 20);
    first.push(async ()=>{
        console.log("It will be written if first one invoked before 20 sec. min. But not, so it will be ignored!")
    }, 20);
    first.push(async ()=>{
    console.log("It will be written. Because 2 sec are run out. For last funct invocated.")
}, 2);
```
Please check test.js.
[test.js](./test.js)
