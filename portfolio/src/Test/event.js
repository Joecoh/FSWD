const EventEmitter = require(events);
const EventEmitter = new EventEmitter();

console.log("Default Max Listener:", EventEmitter.getMaxListeners());

eventEmitter.setMaxListeners(7);

console.log("The max Listeners: ", eventEmitter.getMaxListeners());

function listener1(){
    console.log("Pizza Order Places! ");
    setTimeout(()=>{
        console.log("The pizza will be ready in 2 minitues");
    }, 2000);
}
function listener2(){
    console.log("Drinks are being served! ");
    const interval = setInterval(() =>{
    console.log("Refilling Drinks in every 3 minitues");

    }, 180000
    );
}