## Queue with Blocking

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
