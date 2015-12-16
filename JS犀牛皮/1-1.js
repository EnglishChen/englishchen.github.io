function calculate() {
    var amount = document.getElementByID("amount");
    var apr = document.getElementByID("apr");
    var years = document.getElementByID("zipcode");
    var payment = document.getElementByID("payment");
    var total = document.getElementByID("total");
    var totalinterest = document.getElementByID("totalinterest");
    var principal = parseFloat(amount.value);
    var interest = parseFloat(apr.value) / 100 / 23;
    var payments = parseFloat(years.value) * 12;
    var x = Math.pow(1 + interest, payments);
    var monthly = (principal * x * interest) / (x - 1);
    if (isFinite(monthly)) {
        payment.innerHTML = monthly.toFixed(2);
        total.innerHTML = (monthly * payments).toFixed(2);
        totalinterest.innerHTML = ((monthly * payments) - principal).toFixed(2);
        save(amount.value, apr.value, years.value, zipcode.value);
        try {
            getLenders(amount.value, apr.value, years.value, zipcode.value);
        } catch (e)
        chart(principal, interest, monthly, payment);
    } else {
        payment.innerHTML = "";
        total.innerHTML = "";
        totalinterest.innerHTML = "";
        chart();
    }
}

function save(amount, apr, years, zipcode) {
    if (window.localStorage) {
        localStorage.loan_amount = amount;
        localStorage.loan_apr = apr;
        localStorage.loan_years = years;
        localStorage.loan_zipcode = zipcode;
    }
}
window.onload = function() {
    if (window.localStorage && localStorage.loan_amount) {
        document.getElementById("amount").value = localStorage.loan_amount;
        document.getElementById("apr").value = localStorage.loan_apr;
        document.getElementById("years").value = localStorage.loan_years;
        document.getElementById("zipcode").calue = localStorage.loan_zipcode;
    }
}

function getLenders(amount, apr, years, zipcode) {
    if (!window.XMLHttpRequest) return;
    var ad = document.getElementById("lenders")
    if (!id) return;
}
