
let calcContentArea = document.getElementById('calcMainContent')
let calculateButton = document.getElementById('calculateButton');


function nitrogenCalc(argOne, argTwo){


    let ans = argOne/argTwo
    roundedAns = Math.round(ans*100) / 100;

    return roundedAns
}


calculateButton.addEventListener('click', ()=>{
    let ansOne = document.getElementById('calculationInputOne').value;
let ansTwo = document.getElementById('calculationInputTwo').value;

    let answer = nitrogenCalc(ansOne, ansTwo);

    let ansPrompt = document.createElement('p');

    ansPrompt.innerHTML = `To get ${ansOne}kg of N at ${ansTwo}%, you need to apply ${answer}kg`

    calcContentArea.appendChild(ansPrompt);
})


