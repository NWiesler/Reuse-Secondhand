var bubble1 = document.getElementById("bubble1");
var bubble2 = document.getElementById("bubble2");
var bubble3 = document.getElementById("bubble3");
var row2 =document.getElementsByClassName("bubble-row-2");



function romoveRow2() {
    alert("Hello Poftut.com");
    }

bubble1.onclick = function() {
    if(bubble1.className == "bubble"){
        // Show other bubbles
        row2.style.display = none;

    } //else {
        // Show other bubbles
       // bubble1.className = "";
      //  row2.className = "";
   // }

}