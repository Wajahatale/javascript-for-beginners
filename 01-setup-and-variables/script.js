const heading = document.getElementById("greeting");
const button = document.getElementById("clickMe");

heading.textContent = "Hello from JavaScript!";

let clickCount = 0;

button.addEventListener("click", function() {
    clickCount = clickCount + 1;
    heading.textContent = `Button clicked ${clickCount} times!`;
});