var CloseNav = document.querySelector(".closeNav");
var OpenBtn = document.querySelector(".open");
var Closebtn = document.querySelector(".close");
var MainBody = document.querySelector(".main");

let counters = document.querySelectorAll(".controls span");
        let container = document.querySelector(".controls");

// Function to close the navigation
function closeNavigation() {
    CloseNav.classList.add("hide");
}

// Event listener for the close button
Closebtn.addEventListener('click', function(event) {
    closeNavigation();
    event.stopPropagation(); // Prevent click from propagating to MainBody
});

// Event listener for the open button
OpenBtn.addEventListener('click', function(event) {
    CloseNav.classList.remove("hide");
    event.stopPropagation(); // Prevent click from propagating to MainBody
});

// Event listener for clicking on the main body to close the navigation
MainBody.addEventListener('click', function(event) {
    // Check if the navigation is open and the click is outside the navigation
    if (!CloseNav.classList.contains("hide")) {
        // Optional: Check if the click target is not inside the navigation or close button
        if (!CloseNav.contains(event.target) && event.target !== Closebtn) {
            closeNavigation();
        }
    }
});

// Optional: Prevent clicks inside the CloseNav from closing it
CloseNav.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent click from propagating to MainBody
});



//SUN Moon toggle functionaliy in navbar
// Select the div and icons
const themeToggle = document.getElementById('themeToggle');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');

// Add event listener to the div
themeToggle.addEventListener('click', function() {
  // Toggle visibility of icons
  if (sunIcon.style.display === 'none') {
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  } else {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  }
});


//Counter JavaScript

        window.addEventListener("scroll", () => {
            let containerTop = container.offsetTop;
            let containerHeight = container.offsetHeight;
            let scrollPosition = window.pageYOffset;

            if (scrollPosition > containerTop - window.innerHeight + 200 || scrollPosition < containerTop - window.innerHeight + 200) {
                counters.forEach(counter => {
                    counter.innerText = 0;
                    let count = 0;
                    function updateCount() {
                        const target = parseInt(counter.dataset.count);
                        if (count < target) {
                            count++;
                            counter.innerText = count;
                            setTimeout(updateCount, 10);
                        } else {
                            counter.innerText = target;
                        }
                    }
                    updateCount();
                });
            }
        });
