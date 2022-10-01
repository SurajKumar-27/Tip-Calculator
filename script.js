function TipCalculator(){
    var Amount = document.getElementById("amount").value;
    var service = document.getElementById("service").value;
    var persons = document.getElementById("people").value;
    if(Amount===""||service==0){
        alert("Please Enter Values");
        return;
    }
    if(persons===""||persons<=1){
        persons=1;
        document.getElementById('each').style.display='none';
    }
    else{
        document.getElementById('each').style.display='block';
        }
    var total=(Amount * service)/persons;
    total=total.toFixed(2);
    document.getElementById('totaltip').style.display="block";
    document.getElementById('tip').innerHTML = total;
}
document.getElementById("totaltip").style.display = "none";
document.getElementById("each").style.display = "none";
document.getElementById("calculate").onclick = function() {
TipCalculator();
};