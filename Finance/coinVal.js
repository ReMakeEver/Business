function getBTCPrice(id){
 var xml;
 if(window.XMLHttpRequest){
  xml = new XMLHttpRequest();
 }else{
  xml = new ActiveXObject("Microsoft.XMLHTTP");
 }
 xml.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
   var price = JSON.parse(this.responseText);
   document.getElementById(id).innerHTML = price.ticker.price;
  }
 };
 xml.open("GET", "https://api.cryptonator.com/api/ticker/btc-usd", true);
 xml.send();
}
function getLTCPrice(id){
 var xml;
 if(window.XMLHttpRequest){
  xml = new XMLHttprequest();
 }else{
  xml = new ActiveXObject("Microsoft.XMLHTTP");
 }
 xml.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
   var price = JSON.parse(this.responseText);
   document.getElementById(id).innerHTML = price.ticker.price;
  }
 };
 xml.open("GET", "https://api.cryptonator.com/api/ticker/ltc-usd", true);
 xml.send();
}
function getCURPrice(id){
 var xml;
 if(window.XMLHttpRequest){
  xml = new XMLHttpRequest();
 }else{
  xml = new ActiveXObject("Microsoft.XMLHTTP");
 }
 xml.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
   var price = JSON.parse(this.responseText);
   document.getElementById(id).innerHTML = price.ticker.price;
  }
 };
 xml.open("GET", "https://api.cryptonator.com/api/ticker/cure-usd", true);
 xml.send();
}
function getVal(text, id){
 var dat = text;
 if(dat=="BTC"||dat=="btc"){
  getBTCPrice(id);
 }else{
  if(dat=="LTC"||dat=="ltc"){
   getLTCPrice(id);
  }else{
   if(dat=="CURE"||dat=="cure"){
    getCURPrice(id);
   }
  }
 }
}
