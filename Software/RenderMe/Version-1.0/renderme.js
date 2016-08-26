function createNew(object){
 this.varObj = object;
}
Object.prototype = {
 varObj: null,
 square: function(){
 },
}
