document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.nav_link');
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            // Remove 'active' class from all links
            links.forEach(function (link) {
                link.classList.remove('active');
            });
            // Add 'active' class to the clicked link
            link.classList.add('active');
        });
    });
});
function aos_init() {
    AOS.init({
        duration: 800,
        easing: 'slide',
        once: true,
        mirror: false
    });
}

window.addEventListener('load', () => {
    aos_init();
});

 // Get all navigation links
const navLinks = document.querySelectorAll('.nav_link');

// Add click event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior

    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    // Smooth scroll to the target section
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
const button = document.getElementById("mybutton");
button.addEventListener('click',() => {
alert("thanks for your feedback")
})
// document.getElementById("mybutton").onclick (() => {
//     window.prompt("thanks for your feedback")
//     })