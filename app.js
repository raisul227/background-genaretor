let body = document.querySelector("body");

let input1 = document.querySelector("#color1");
let input2 = document.querySelector("#color2");
let text = document.querySelector(".text");

function setgradient() {
    body.style.background = "linear-gradient(to right," + input1.value + "," + input2.value + ")";
    text.textContent = body.style.background + ";"
}

input1.addEventListener("input", setgradient);
input2.addEventListener("input", setgradient);


const obj = {
    name: "Raisul",
    age: 28,
    job: "Web Development"
};

const { name, age } = obj;


function bio(name = "raisul", age = 28, job = "Developer") {
    return `my name is ${name} and I am ${age} years old. I am working as a ${job}`;
}

const compose = (fn1, fn2) => (value) => fn1(fn2(value));