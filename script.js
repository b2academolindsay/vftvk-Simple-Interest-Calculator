
    //Calculating total amount including interest over specific period
function compute()
    { 
       var principal = document.getElementById("principal").value
       var rate = document.getElementById("rate").value;
       var years = document.getElementById ("years").value;
       var year = new Date().getFullYear()+parseInt(years);
       var result = document.getElementById("result").value;
       var interest = parseInt(principal) * parseInt(years) * (rate /100);
       var amount = interest; 
        if (validateAmount()){
       document.getElementById("result").innerHTML="If you deposit <b>"+principal+"</b>,\<br\>at an interest rate of <b>"+rate+"%</b>\<br\>You will receive an amount of <b>"+amount+"</b>,\<br\>in the year <b>"+year+"."; 
    }}

    //Updates interest rate display on rate slider change
function updateRate()
    {
        var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText=rateval + "%";

    }
    //Error message when negative number inputed
function validateAmount()
    {
        var principal = document.getElementById("principal").value;
        var biggerThanZero = parseInt(principal) > 0;
        if (!biggerThanZero) {
            alert("Enter a positive number");
            document.getElementById("principal").focus();
            return false
        }
            return true
    }