const display = document.querySelector("#display");

function appendToDisplay(input) {
    display.value += input; 
}

function clearDisplay() {
    display.value = "";
}

function deleteLast(input) {
    display.value = display.value.slice(0, -1);
}

function calcFatorial() {
    let num = display.value;
    if(num < 0) {
        display.value = "Error";
        return;
    }
    let aux = 1;
    for(let c=num; c>=1; c--) {
        aux *= c;
    }
    display.value = aux.toString();
}

function calcRadix() {
    try{
        if(display.value === "") {
            alert("Insert a value");
        }else{
            let result = Math.sqrt(eval(display.value));
            display.value = result;
        }
    }catch(e) {
        alert("invalid expression")
    }
}

function calcPotency() {
    try{
        let result = Math.pow(eval(display.value));
        display.value = result.toFixed(2);
    }catch(e) {
        alert("Invalid expression")
    }
}

function calcLog() {
    try{
        if(display.value === "") {
            alert("Insert a number");
        }else{
            let result = Math.log10(eval(display.value));
            display.value = result.toFixed(4);
        }
        
    }catch(e) {
        alert("Invalid expression");
    }
}

function calcSin() {
    try{
        if(result.value === "") {
            alert("Insert a value");
        }else{
            const result = Math.sin(eval(display.value));
            display.value = result.toFixed(4);
        }
    }catch(e) {
        alert("Invalid expression")
    }
}

function calcCos() {
    try{
        if(result.value) {
            alert("Insert a value");
        }else{
            const result = Math.cos(eval(display.value));
            display.value = result.toFixed(4);
        }
    }catch(e) {
        alert("Invalid expression")
    }
}

function calcTan() {
    try{
        if(result.value) {
            alert("Insert a value");
        }else{
            const result = Math.tan(eval(display.value));
            display.value = result.toFixed(4);
        }
    }catch(e) {
        alert("Invalid expression")
    }
}

function calcPi() {
    try{
        const result = Math.PI(displ)
    }catch(e) {
        alert("Invalid expression")
    }
}

function calcPi() {
    appendToDisplay('π');
}

function calculate() {
    try {
        // Substitui todos os símbolos π pelo valor de Math.PI
        display.value = display.value.replace(/π/g, Math.PI);
        // Substitui o operador de potência ^ por ** para avaliação
        display.value = display.value.replace(/\^/g, "**");
        // Avalia a expressão e limita a duas casas decimais
        let result = eval(display.value);
        display.value = result
    } catch (e) {
        display.value = "Error";
    }
}


