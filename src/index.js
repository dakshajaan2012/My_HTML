const road = document.querySelector("#road");
road.width = 1200;

const car = document.querySelector("#car");

// Set initial position of the car
let carPosition = 0;

// Add an event listener to the document to detect key presses
document.addEventListener("keydown", (event) => {
  // Check if the pressed key is "a" (for left) or "d" (for right)
  if (event.key === "a") {
    // Move the car 10px to the left
    carPosition -= 10;
  } else if (event.key === "d") {
    // Move the car 10px to the right
    carPosition += 10;
  }

  // Update the car's position
  car.style.left = `${carPosition}px`;
});
