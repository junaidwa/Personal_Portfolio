var CloseNav = document.querySelector(".closeNav");
var OpenBtn = document.querySelector(".open");
var Closebtn = document.querySelector(".close");
var MainBody = document.querySelector(".main");

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
