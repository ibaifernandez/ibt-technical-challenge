// Get a reference to the hamburger icon element and the mobile menu
const hamburgerIcon = document.querySelector('.menu-hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

// Add a click event to the hamburger icon
hamburgerIcon.addEventListener('click', () => {
    // Toggle the "active" class to show or hide the mobile menu
    mobileMenu.classList.toggle('active');

    // Toggle the icon between hamburger and cross
    hamburgerIcon.classList.toggle('open');
});

// Close the mobile menu when a link is clicked
const mobileLinks = document.querySelectorAll('.mobile-menu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        hamburgerIcon.classList.remove('open');
    });
});

// Close the mobile menu when clicked outside of it
document.addEventListener('click', event => {
    if (!mobileMenu.contains(event.target) && !hamburgerIcon.contains(event.target)) {
        mobileMenu.classList.remove('active');
        hamburgerIcon.classList.remove('open');
    }
});
