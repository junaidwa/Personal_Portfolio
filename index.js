var CloseNav = document.querySelector(".closeNav");
var OpenBtn = document.querySelector(".open");
var Closebtn = document.querySelector(".close");
var MainBody = document.querySelector(".main");
var Nav_link= document.querySelectorAll(".closeNav .midclosenav .nav-links");
// Select all navigation links
var navLinks = document.querySelectorAll(".closeNav .midclosenav .nav-links");

// Loop through each link and add a click event listener
navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        // Call the function to close the navigation menu
        closeNavigation();
        // Prevent the click event from propagating further
        event.stopPropagation();
    });
});

//Progress  bar Functionality
document.querySelector('.Progressbar').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Enables smooth scrolling
    });
});
// let ATScroolPrgress=()=>{
//     let ProgressDIV= document.querySelector('.Progressbar');
//     let ProgessSpan= document.querySelector('.ProgressCircle');
//     let pos = document.documentElement.scrollTop;
//     let CalHeight= document.documentElement.scrollHeight- document.documentElement.clientHeight;
//     let ScrollValue= Math.round(pos*100/CalHeight);
//     ProgressDIV.style.background=`conic-gradient( #c0c0ff ${ScrollValue}%rgb(22, 22, 110) ${ScrollValue}%)`;
//     ProgessSpan.textContent=`${ScrollValue}%`

// }
// window.onscroll=ATScroolPrgress;
// window.onload=ATScroolPrgress;



let ATScrollProgress = () => {
    let ProgressSpan = document.querySelector('.ProgressCircle');
    let pos = document.documentElement.scrollTop;
    let CalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let ScrollValue = Math.round((pos * 100) / CalHeight);

    // Update the border gradient to reflect scrolling
    ProgressSpan.style.setProperty(
        '--progress-gradient',
        `conic-gradient(red ${ScrollValue}%, gray ${ScrollValue}%)`
    );

    // Update the text content with the percentage
    ProgressSpan.textContent = ScrollValue === 100 ? "↑" : `${ScrollValue}%`;

    // Dynamically set the border (through the ::before pseudo-element)
    ProgressSpan.style.background = `conic-gradient(red ${ScrollValue}%, gray ${ScrollValue}%)`;
};

window.onscroll = ATScrollProgress;
window.onload = ATScrollProgress;


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

        let hasAnimated = false; // Flag to track if the animation has been triggered

window.addEventListener("scroll", () => {
    let containerTop = container.offsetTop;
    let containerHeight = container.offsetHeight;
    let scrollPosition = window.pageYOffset;

    // Check if the container is in view and the animation hasn't run yet
    if (scrollPosition > containerTop - window.innerHeight + 200 && !hasAnimated) {
        hasAnimated = true; // Set the flag to true to prevent re-triggering

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


        //Skill section css
        document.querySelectorAll('.skill-container').forEach(container => {
            const percentage = container.getAttribute('data-skill');
            const circle = container.querySelector('.circle');
            const percentageText = container.querySelector('.percentage');

            circle.style.setProperty('--percentage', `${percentage}%`);
            percentageText.textContent = `${percentage}%`;
        });








/////////////Scroll behaviour//////////////////////


        document.querySelectorAll('.nav-links').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault(); // Prevent default anchor click behavior
        
                const id = this.getAttribute('href'); // Get the target section's ID
                const targetSection = document.querySelector(id); // Select the target section
        
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the section
                }
            });
        });
        