function chuyen_doi(){
    let a = document.getElementById("amount").value;
    let b = document.getElementById("from").value;
    let c = document.getElementById("to").value;
    let amount = parseFloat(a);
    let from =parseFloat(b);
    let to = parseFloat(c);
    let result = amount*(from/to);
    alert("ket qua" + result);
}