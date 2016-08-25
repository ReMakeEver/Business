function theFunctions(functionName){
 this.varA = a;
}
A.prototype = {
 varA: null,
 serverRequest: function(){
 }
};
function WM(function, configure){
 theFunctions.call(this, function);
 this.varC = configure;
}
WM.prototype = Object.create(theFunctions.prototype, {
 varC: {
  value: null,
  enumerable: true,
  configurable: true,
  writable: true
 },
 serverRequest: {
  value: function(){
   theFunctions.doSomething.apply(this, arguments);
  },
  enumerable: true,
  configurable: true,
  writable: true
 }
});
WM.prototype.constructor = wm;
