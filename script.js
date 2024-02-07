document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.backgroundColor = "#F0F0F0";
document.body.style.margin = "0";
document.body.style.padding = "20px";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";

const fullName = "Pwandeep Kaur"; 
const header = document.createElement("h1");
header.textContent = fullName;
header.style.color = "#A9A9A9";
document.body.appendChild(header);


const input1 = document.createElement("input");
input1.type = "text";
const input2 = document.createElement("input");
input2.type = "text";
const button = document.createElement("button");
button.textContent = "Calculate Sum";
document.body.appendChild(input1);
document.body.appendChild(input2);
document.body.appendChild(button);


button.addEventListener("click", () => {
    try {
        const num1 = parseFloat(input1.value);
        const num2 = parseFloat(input2.value);

        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Please enter valid numbers.");
        }

        
        const sum = num1 + num2;
        const sumDiv = document.createElement("div");
        sumDiv.textContent = `Sum: ${sum}`;
        sumDiv.style.color = "#4CAF50";
        sumDiv.style.marginTop = "10px";
        document.body.appendChild(sumDiv);
    } catch (error) {
      
        const errorDiv = document.createElement("div");
        errorDiv.textContent = error.message;
        errorDiv.style.color = "red";
        errorDiv.style.marginTop = "10px";
        document.body.appendChild(errorDiv);
        input1.style.border = "1px solid red";
        input2.style.border = "1px solid red";
    }
});

const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.style.width = '200px';
    input.style.padding = '10px';
    input.style.margin = '10px';
    input.style.border = '1px solid #A9A9A9';
    input.style.borderRadius = '5px';
});


button.style.backgroundColor = "#4CAF50";
button.style.color = "white";
button.style.padding = "10px 20px";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.marginTop = "10px";