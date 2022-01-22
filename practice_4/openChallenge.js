// Helpers


function compoundInterestCalculator(inicialCapital, interest, time, compounding) {
    if (compounding === "anually"){
        compounding = 1;
    }
    else if (compounding === "semi-annually"){
        compounding = 2;
    }
    else if (compounding === "quarterly"){
        compounding = 4;
    }
    else if (compounding === "monthly"){
        compounding = 12;
    }
    else if (compounding === "weekly"){
        compounding = 48;
    }
    else if (compounding === "daily"){
        compounding = 360;
    }
    else {
        alert("Error");
    }

    let compoundReady = inicialCapital * (1 + (interest / 100) * (1 / compounding));

    for (let i = 1; i < (time * compounding); i++) {
        compoundReady *= (1 + (interest / 100) * (1 /compounding));
    }
    
    return(compoundReady);
};

function ROI (inicial, final) {
    const valueDifference = final - inicial;
    const percentageDifference = (valueDifference * 100) /inicial;
    return percentageDifference;
}

// function test(inicialCapital, interest, time, compounding, contribution) {
//     if (compounding === "anually"){
//         compounding = 1;
//         contribution = contribution * 12;
//     }
//     else if (compounding === "semi-annually"){
//         compounding = 2;
//         contribution = contribution * 6;
//     }
//     else if (compounding === "quarterly"){
//         compounding = 4;
//         contribution = contribution * 3;
//     }
//     else if (compounding === "monthly"){
//         compounding = 12;
//     }
//     else if (compounding === "weekly"){
//         compounding = 48;
//         contribution = contribution / 4;
//     }
//     else if (compounding === "daily"){
//         compounding = 360;
//         contribution = contribution / 30;
//     }
//     else {
//         alert("Error");
//     }
    
//     let compoundReady = inicialCapital * (1 + (interest / 100) * (1 / compounding));

//     for (let i = 1; i < (time * compounding); i++) {
//         compoundReady = compoundReady + contribution;
//         compoundReady *= (1 + (interest / 100) * (1 /compounding));
//     }
    
//     return(compoundReady);
// };


// Functions


function calculateCompoundInterest() {
    const inicial = document.getElementById("inicial");
    const inicialValue = parseInt(inicial.value);

    const time = document.getElementById("years");
    const timeValue = parseInt(time.value);

    const interest = document.getElementById("rate");
    const interestValue = parseInt(interest.value);

    // let contribution = document.getElementById("contribution");
    // let contributionValue = parseInt(contribution.value);

    const capitalization = document.getElementById("selector");
    const capitalizationValue = capitalization.value;

    if(inicialValue >= 0  && timeValue >= 0 && interestValue >= 0) {
        const compoundInterest = compoundInterestCalculator(inicialValue, interestValue, timeValue, capitalizationValue)
        const percentageDifference = ROI(inicialValue, compoundInterest)
        const result = document.getElementById("Result");
        result.innerText = "After " + timeValue + " your capital is: $" + compoundInterest.toFixed(3);
        const result2 = document.getElementById("Result2");
        result2.innerText = "And your ROI is: " + percentageDifference.toFixed(3) + "%";
    }
    else {
        const result = document.getElementById("Result");
        result.innerText = "You cannot enter a negative interest rate, inicial investment or amount of years. Please try again.";
    }  
}