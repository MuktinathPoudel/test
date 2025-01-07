let output = document.getElementById("output");

function appendToOutput(value) {
    output.value += value;
}

function clearOutput() {
    output.value = "";
}

function calculateResult() {
    try {
        const result = eval(output.value);
        output.value = result;
    } catch (error) {
        output.value = "Error";
    }
}

function onInputChange(event) {
    if (event.key === "Enter") {
        calculateResult();
    }
}
