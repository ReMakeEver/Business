var length1 = document.createElement("SCRIPT");var l1Src = document.createAttribute("src");l1Src.value = "https://www.remakenow.us/Software/SecureIt/Version-1.0/len1.js";length1.setAttribute(l1Src);
var length2 = document.createElement("SCRIPT");var l2Src = document.createAttribute("src");l2Src.value = "https://www.remakenow.us/Software/SecureIt/Version-1.0/len2.js";length2.setAttribute(l2Src);
var length3 = document.createElement("SCRIPT");var l3Src = document.createAttribute("src");l3Src.value = "https://www.remakenow.us/Software/SecureIt/Verison-1.0/len3.js";length3.setAttribute(l3Src);
var length4 = document.createElement("SCRIPT");var l4Src = document.createAttribute("src");l4Src.value = "https://www.remakenow.us/Software/SecureIt/Version-1.0/len4.js";length4.setAttribute(l4Src);
var length5 = document.createElement("SCRIPT");var l5Src = document.createAttribute("src");l5Src.value = "https://www.remakenow.us/Software/SecureIt/Version-1.0/len5.js";length5.setAttribute(l5Src);
function addLengths(){
 document.body.appendChild(length1);document.body.appendChild(length2);document.body.appendChild(length3);document.body.appendChild(length4);document.body.appendChild(length5);
}
addLengths();
function encrypt(word){
 if(word.length==1){ len1(word.substring()); }if(word.length==2){ len2(word.substring()); }if(word.length==3){ len3(word.substring()); }if(word.length==4){ len4(word.substring()); }if(word.length==5){ len5(word.substring()); }
}
