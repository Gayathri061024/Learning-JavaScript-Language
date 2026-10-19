
const shapeInput = document.getElementById("shapes");
const result = document.getElementById("result");
const calculateBtn = document.getElementById("btn");
const allFields = document.querySelectorAll(".fields");


const value1Input = document.getElementById("value1");
const value2Input = document.getElementById("value2");
const testBtn = document.getElementById("testBtn");
const testResult = document.getElementById("testResult");



// Intially hide Input fields 

allFields.forEach(function (field) {
    field.style.display = "none";
});

calculateBtn.style.display = "none";

shapeInput.addEventListener("change", function () {

    allFields.forEach(function (field) {
        field.style.display = "none";
    });

    calculateBtn.style.display = "none";
    result.innerHTML = "";

    if (shapeInput.value === "rectangle") {
        document.getElementById("rectangleFields").style.display = "flex";
        calculateBtn.style.display = "block";
    }

    else if (shapeInput.value === "circle") {
        document.getElementById("circleFields").style.display = "flex";
        calculateBtn.style.display = "block";
    }

});



//calculate area

calculateBtn.addEventListener("click", function () {

    let area = 1;
    let message = "";

    let shapeDetails;

    // Rectangle

    const shape = shapeInput.value;


    if (shape === "") {
        result.innerHTML = "Please select a shape.";
        return;
    }

    if (shape === "rectangle") {

        let lengthInput = document.getElementById("length").value;
        let widthInput = document.getElementById("width").value;

        let length = Number(lengthInput);
        let width = Number(widthInput);


        if (lengthInput === "" ||
            widthInput === "" ||
            length <= 0 ||
            width <= 0) {

            result.innerHTML = "Please enter valid length and width.";
            return;
        }

        area *= length;
        area *= width;


        shapeDetails = {
            name: shape,
            length: length,
            width: width,
            area: area

        };
    }


    // circle

    else if (shape === "circle") {
        let radiusInput = document.getElementById("radius").value;
        let radius = Number(radiusInput);


        if (radiusInput === "" || radius <= 0) {
            result.innerHTML = "Please enter a valid radius.";
            return;
        }

        area *= Math.PI;
        area *= radius;
        area *= radius;

        shapeDetails = {
            name: shape,
            radius: radius,
            area: area
        };
    }

    if (shape === "rectangle") {
        result.innerHTML = `
            <p>Shape: ${shapeDetails.name}</p>
            <p>Length: ${shapeDetails.length}</p>
            <p>Width: ${shapeDetails.width}</p>
            <p>Area: ${shapeDetails.area.toFixed(2)}</p>
        `;
    } else {
        result.innerHTML = `
            <p>Shape: ${shapeDetails.name}</p>
            <p>Radius: ${shapeDetails.radius}</p>
            <p>Area: ${shapeDetails.area.toFixed(2)}</p>
        `;
    }


});


testBtn.addEventListener("click", function () {

    const value1 = value1Input.value;
    const value2 = value2Input.value;

    if (value1 === "" ||
        value2 === "" || value1 <= 0 || value2 <= 0) {
        testResult.innerHTML = "Please enter  valid Inputs.";

        return;
    }
     // Explicit type conversion
    const input1 = Number(value1);
    const input2 = Number(value2);


    
    const message = (input1 > 0 && input2 > 0) ? "Valid Input" : "Invalid Input";
    if (message === "Invalid Input") {
        testResult.innerHTML = "Please enter valid positive numbers.";
        return;
    }

    testResult.innerHTML = `
        <h3>Comparison Results</h3>
        <p>First value: ${value1}</p>
        <p>Type of  first value: ${typeof value1}</p>
    
        <p>Second value: ${value2}</p>
        <p>Type of second value: ${typeof value2}</p>

        <p>Explicit type conversion of value1: ${typeof input1}</p>
        

        <p>Loose equality (number == string): ${input1 == value2}</p>
        <p>Strict equality (number === string): ${input1 === value2}</p>
        <p>Not equal (number !=  string): ${input1 != value2}</p>
        <p>Strictly not equal (number !== string): ${input1 !== value2}</p>
        
        <p>Implicit Type Coersion: ${input1 + value2}</p>
   
    `;
});


// Primitive type
let a = 10;
let b = a;
b = 20;

console.log("Primitive a:", a); 
console.log("Primitive b:", b); 

// Reference type
const numbers = [1, 2, 3, 5, 7];
const anotherNumbers = numbers;

anotherNumbers.push(4);

console.log("Original array:", numbers); 
console.log("Copied reference:", anotherNumbers); 
