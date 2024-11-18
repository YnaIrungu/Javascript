// script.js
function changeText() {
    const welcomeText = document.getElementById("welcome-text");
    const button = document.getElementById("change-text-btn");
    
    // Change text content
    welcomeText.innerText = "JavaScript is Dynamic and Fun!";
    
    // Add a pulsating animation
    welcomeText.classList.add("pulse-animation");
    
    // Change button color randomly
    button.style.backgroundColor = getRandomColor();
  }
  
  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const customCursor = document.querySelector('.custom-cursor');

// Move the custom cursor with the mouse
document.addEventListener('mousemove', (e) => {
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
});

// Add hover effect
document.addEventListener('mouseenter', () => {
    customCursor.classList.add('hover');
});

document.addEventListener('mouseleave', () => {
    customCursor.classList.remove('hover');
});

// Add click effect
document.addEventListener('mousedown', () => {
    customCursor.classList.add('click');
});

document.addEventListener('mouseup', () => {
    customCursor.classList.remove('click');
});

const quotes = [
    "The best way to predict the future is to invent it. - Alan Kay",
    "JavaScript is the language of the web. - Unknown",
    "Code is like humor. When you have to explain it, it’s bad. - Cory House",
    "The only way to learn a new programming language is by writing programs in it. - Dennis Ritchie",
    "First, solve the problem. Then, write the code. - John Johnson",
    "In programming, the hard part isn’t solving problems, but deciding what problems to solve. - Paul Graham",
    "Good code is its own best documentation. - Steve McConnell",
    "JavaScript is the duct tape of the Internet. - Chris Heilmann",
    "Simplicity is the soul of efficiency. - Austin Freeman",
    "The function of good software is to make the complex appear to be simple. - Grady Booch"
];

const quoteDisplay = document.getElementById('quote-display');
const quoteButton = document.getElementById('quote-button');

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
}

// Load a random quote when the page loads
window.onload = getRandomQuote;

// Add event listener to the button
quoteButton.addEventListener('click', getRandomQuote);

// Set the date of the event
const eventDate = new Date("2024-12-31T00:00:00").getTime(); // Change this to your event date

// Update the countdown every second
const countdownInterval = setInterval(() => {
    const now = new Date().getTime(); // Get the current date and time
    const timeLeft = eventDate - now; // Calculate the time left

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result in the respective elements
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // If the countdown is finished, display a message
    if (timeLeft < 0) {
        clearInterval(countdownInterval); // Stop the countdown
        document.getElementById("countdown").innerHTML = "The event has started!";
    }
}, 1000); // Update every second

window.onscroll = function() {
    const nav = document.querySelector('nav');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        nav.style.backgroundColor = "#222"; // Darker background when scrolling
    } else {
        nav.style.backgroundColor = "#333"; // Original background
    }
};

