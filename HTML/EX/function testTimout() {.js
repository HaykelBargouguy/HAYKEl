function testTimout() {
setTimeout(function () {
console.log('Je test le Timout');
},2000);
}
testTimout();var i=0;
testInterval();
function testInterval() {
var code =setInterval(function () {
if(i<22)
{
console.log(i);
i++
}
else{
clearInterval(code);
}
},100,code);