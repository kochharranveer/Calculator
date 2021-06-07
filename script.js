let num1 = "0";
let num2 = "0";
var operator = "";
var display = document.createElement('p');
display.className = "Display"
var equation;

let a = "1";
let b = "2";
let c = "3";
let d = "4";
let e = "5";
let f = "6";
let g = "7";
let h = "8";
let i = "9";
let j = "0";
let k = ".";

function Operator (symbol) {
    operator = symbol;
}

function Calculator(code) {

    if (operator == "") {

        switch (code) {

            case "a1" :
                num1 = num1 + a;
            break;
            case "b2" :
                num1 = num1 + b;
            break;
            case "c3" :
                num1 = num1 + c;
            break;
            case "d4" :
                num1 = num1 + d;
            break;
            case "e5" :
                num1 = num1 + e;
            break;
            case "f6" :
                num1 = num1 + f;
            break;
            case "g7" :
                num1 = num1 + g;
            break;
            case "h8" :
                num1 = num1 + h;
            break;
            case "i9" :
                num1 = num1 + i;
            break;
            case "j0" :
                num1 = num1 + j;
            break;
            case "k." :
                num1 = num1 + k;
            break;

        }
        
    }

    if (operator != "") {

        switch (code) {
            case "a1" :
                num2 = num2 + a;
            break;
            case "b2" :
                num2 = num2 + b;
            break;
            case "c3" :
                num2 = num2 + c;
            break;
            case "d4" :
                num2 = num2 + d;
            break;
            case "e5" :
                num2 = num2 + e;
            break;
            case "f6" :
                num2 = num2 + f;
            break;
            case "g7" :
                num2 = num2 + g;
            break;
            case "h8" :
                num2 = num2 + h;
            break;
            case "i9" :
                num2 = num2 + i;
            break;
            case "j0" :
                num2 = num2 + j;
            break;
            case "k." :
                num2 = num2 + k;
            break;
        
        }

    }

};

function SQRT () {

    if (num2 == "0") {
        num1 = Math.sqrt(num1);
    }

    if (num2 != "0") {
        num2 = Math.sqrt(num2);
    }

}

function Print () {
    if (num1 != "0") {
        console.clear();
        console.log(num1)
        equation = num1;
    }
    if (operator != "") {
        console.clear();
        console.log(num1+" "+operator);
        equation = num1+" "+operator;
    }
    if (num2 != "0") {
        console.clear()
        console.log(num1+" "+operator+" "+num2);
        equation = num1+" "+operator+" "+num2;
    }

    display.textContent = equation;
}

function Clear () {
    num1 = "0";
    num2 = "0";
    operator = "";
    console.clear();
    display.textContent = num1;
}

function Result () {

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operator) {
        case "+" :
            num1 = num1 + num2;
        break;
        case "-" :
            num1 = num1 - num2;
        break;
        case "*" :
            num1 = num1 * num2;
        break;
        case "/" :
            num1 = num1 / num2;
        break;
    }

    display.textContent = num1;
    console.log(num1);

    num2 = "0"

}

function Reload() {
    document.body.append(display)
}