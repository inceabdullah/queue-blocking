const utils = require("./utils");
module.exports = {
    makeQueue: function(name){
        let timestampSec;
        this.instances = this.instances || [];
        console.log("Made this queue: " + name);
        this.instances.push({name, stack: [], timestampSec});
        const looper = async () => {
            const obj = this.instances.find(({name: _name})=>_name===name);
            if (!obj || (obj && !obj.stack.length)) br1: {
                await utils.waitSec(5);
                return looper();
            }
                const {cb: func, timestampSec: _timestampSec} = obj.stack.shift();
                if ( !timestampSec || (_timestampSec < (Math.round(new Date().getTime()/1000) - timestampSec)) ){
                    await func().catch(err=>{
                        console.log("There is an error");
                        console.error({err});
                    });
                    timestampSec = Math.round(new Date().getTime()/1000);
                    await utils.waitSec(5);
                    return looper();

                } else br2: {
                    await utils.waitSec(0);
                    return looper();
                }
        };
        looper();
        return {
            push: (cb, sec) => {
                const obj = this.instances.find(({name: _name})=>_name===name);
                obj.stack.push({cb, timestampSec: sec});
                return obj.length;
            }
        };
    },
    getInstances: function(){
        return (this.instances || []).map(({name, stack})=>(name + ": " + stack.length)).join(" ");
    }
}
