// Global variables
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let pay = document.getElementById("pay");
let region = document.getElementById("region");
let submitButton = document.getElementById("submitButton");
let clearButton = document.getElementById("clearButton");
let msg = document.getElementById("msg");

clearFunction = function() {
    firstName.value = "";
    lastName.value = "";
    pay.value = "";
    region.value = "";
}

clearButton.addEventListener("click", clearFunction);

// Her definerer jeg en funktion til at 'capitalize' en string.
// I msg.innerText længere nede, kalder jeg denne funktion.
capitalize = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

calculateFunction = function() {
    let sum = "";
    let returnSum = "";

    if (firstName.value !== "" && lastName.value !== "" && region.value !== "" && pay.value !== "") { 
        if (region.value === "sjaelland") {
            sum = parseInt(pay.value) * 0.37;
            returnSum = pay.value - sum;
        } else if (region.value === "jylland") {
            sum = parseInt(pay.value) * 0.40
            returnSum = pay.value - sum;
        } else if (region.value === "fyn") {
            sum = parseInt(pay.value) * 0.38
            returnSum = pay.value - sum;
        } else if (region.value === "bornholm") {
            sum = parseInt(pay.value) * 0.35
            returnSum = pay.value - sum;
        }
        msg.innerText = capitalize(firstName.value) + " " + capitalize(lastName.value) + " Du bor på " + " " + capitalize(region.value) + " og skal betale " + sum + " dkk i skat. Du har derfor " + returnSum + " dkk tilbage efter skat.";
    } else {
        msg.innerText = "Du skal udfylde alle felter";
    }
    clearFunction();
}

submitButton.addEventListener("click", calculateFunction);
