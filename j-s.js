// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Get the target section id
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 60, // Offset for header height
            behavior: 'smooth'
        });
    });
});

// Sticky Navigation Bar
window.onscroll = function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
};

// Mobile Menu Toggle (Optional for responsiveness)
const menuToggle = document.createElement('button');
menuToggle.innerText = '☰';
menuToggle.classList.add('menu-toggle');
document.querySelector('nav').prepend(menuToggle);

menuToggle.addEventListener('click', () => {
    const navList = document.querySelector('nav ul');
    navList.classList.toggle('active');
});
