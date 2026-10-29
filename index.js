// Select the dodger element for manipulation
// Hint: Use document.getElementById to select the element with id "dodger"

// Function to move the dodger left
// Hint: Define a function moveDodgerLeft()
// Hint: Convert the current left position from a string to an integer
// Hint: Ensure the dodger doesn't move off-screen
// Hint: Update the left position of the dodger

// Function to move the dodger right
// Hint: Define a function moveDodgerRight()
// Hint: Convert the current left position from a string to an integer
// Hint: Ensure the dodger doesn't move off-screen
// Hint: Update the left position of the dodger

// Attach event listener to respond to key presses
// Hint: Use document.addEventListener to listen for "keydown" events
// Hint: Inside the event listener, call moveDodgerLeft if the left arrow key is pressed
// Hint: Call moveDodgerRight if the right arrow key is pressed

let dodgerObject = document.getElementById("dodger");
dodgerObject.style.left = "180px";

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft"){
        moveDodgerLeft();
        console.log(event.key);
    }
    else if (event.key === "ArrowRight"){
        moveDodgerRight();
        console.log(event.key);
    }
});

function moveDodgerLeft(){
    const dodgerLeftPosision = dodgerObject.style.left.replace("px", "");
    let left = parseInt(dodgerLeftPosision, 10);

    //The dodger object's left position should not go beyond the left window of the game bounds
    if (left >= 10){
        console.log(left);
        dodgerObject.style.left = `${left - 10}px`;
        console.log(left);
    }
}

//Given a game width of 400px, move the dodger right within the right bounds of
// the game window
function moveDodgerRight(){
    const dodgerLeftPosision = dodgerObject.style.left.replace("px", "");
    let left = parseInt(dodgerLeftPosision, 10);

    //The dodger (width = 40px) should not move beyond the 400px game window
    if (left <= 360){
        console.log(left);
        dodgerObject.style.left = `${left + 10}px`;
        console.log(left);
    }
}
