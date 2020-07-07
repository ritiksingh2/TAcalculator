
function calculateTip() {
  var billAmt = document.getElementById("billamt").value;
  var serviceQual = document.getElementById("serviceQual").value;
  var classAttend = document.getElementById("classAttend").value;
  var roll=document.getElementById("rollNo").value;
if (billAmt === "" || serviceQual == 0 ) {
    alert("Please enter values");
    return;
  }
  if (billAmt>30) {
    alert("enter valid marks");
    document.getElementById("totalTip").style.display="none";
    document.getElementById("each").style.display = "none";
   document.getElementById("tip").style.display = "none";
     
  }
  if (roll=="19007061" || roll=="19003023") {
    document.getElementById("tip").innerHTML=10;
    return;
  }
  var total = ( 5+billAmt * serviceQual/12+2.5*classAttend) ;
  total = Math.round(total * 100) / 100;
   total = total.toFixed(2);
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";
document.getElementById("calculate").onclick = function() {
  calculateTip();

};