document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a'); 

    if (menuToggle && navLinks) {
        // Function to toggle the menu open/close state
        function toggleMenu() {
            navLinks.classList.toggle('active');
        }

        // 1. Toggle menu when hamburger icon is clicked
        menuToggle.addEventListener('click', toggleMenu);

        // 2. Close menu when any link inside it is clicked (UX improvement for mobile)
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                // Check if the menu is active (open) before toggling
                if (navLinks.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });
    }
});