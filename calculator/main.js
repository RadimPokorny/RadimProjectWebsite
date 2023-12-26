var charChain = "";

function showContent() {
    var displayParagraph = document.querySelector('.display p');

    displayParagraph.textContent = charChain;
}

function optimizeString() {
    charChain = charChain.replace(/,/g, ".");
    charChain = charChain.replace(/ /g, "");
}

function parse(str) {
    return Function(`'use strict'; return (${str})`)()
  }

function calculate(){
    var result;
    optimizeString()
    result = parse(charChain);
    charChain = String(result);
}

function pressKey(element) {
    var textContent = element.querySelector('p').textContent;

    var containsDigits = /\d/.test(textContent);

    if (containsDigits) {
        charChain += textContent;
    } 
    else if (!isNaN(parseInt(charChain[charChain.length - 1]))){
        if(textContent == "/"){
            charChain += textContent;
        }
        else if(textContent == "*"){
            charChain += textContent;
        }
        else if(textContent == "+"){
            charChain += textContent;
        }
        else if(textContent == "-"){
            charChain += textContent;
        }
        else if(textContent == "%"){
            charChain += textContent;
        }
        else if(textContent == ","){
            charChain += ",";
        }
        else if(textContent == "DEL"){
            charChain = charChain.slice(0, -1);
        }
        else if(textContent == "AC"){
            charChain = "";
        }
        else{
            calculate();
        }
    }
    

    showContent();
}

