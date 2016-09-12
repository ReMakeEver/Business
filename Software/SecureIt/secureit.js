var script1 = document.createElement("SCRIPT");var s1Src = document.createAttribute("src");s1Src.value = "https://www.remakenow.us/Software/SecureIt/Version-1.0/encryption.js";script1.setAttribute(s1Src);
function secure(){
 document.body.appendChild(script1);
}
document.body.addEventListener("load", secure);
