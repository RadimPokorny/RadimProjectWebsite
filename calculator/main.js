var charChain = "";

function showContent() {
    // Najdi prvek s třídou 'display'
    var displayParagraph = document.querySelector('.display p');

    // Nastav hodnotu charChain jako obsah paragrafu
    displayParagraph.textContent = charChain;
}

function calculate(){

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
            charChain += textContent;
        }
        else if(textContent == "DEL"){
            charChain = charChain.slice(0, -1);
        }
        else if(textContent == "AC"){
            charChain = "";
        }
        else if(textContent == "="){
            calculate();
        }
    }
    

    showContent();
}

