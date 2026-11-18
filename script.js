// Simple JavaScript for student portfolio webpage

// Function 1: Display an alert and update text on the page
function sayHello() {
    alert("Hello! Thank you for visiting my portfolio website! :)");
    var msgElement = document.getElementById("message");
    msgElement.innerText = "You clicked the button! Welcome to my website.";
}

// Function 2: Toggle the background color of the page
function changeBackground() {
    if (document.body.style.backgroundColor === "lightyellow") {
        document.body.style.backgroundColor = "#f0f4f8";
    } else {
        document.body.style.backgroundColor = "lightyellow";
    }
}
