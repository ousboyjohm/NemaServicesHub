 document.addEventListener('DOMContentLoaded', function() {
    // Handle the Contact Form submission (on contact.html)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) { // Check if the form exists on the current page
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Basic validation
            const name = document.getElementById('contactName').value.trim();
            const email = document.getElementById('contactEmail').value.trim();
            const message = document.getElementById('contactMessage').value.trim();

            if (!name || !email || !message) {
                alert('Please fill in all required fields for the contact form.');
                return;
            }

            alert('Thank you for your message, ' + name + '! We will get back to you soon.');
            this.reset(); // Clear the form
        });
    }

    // Handle the Service Request Form submission (on request-service.html)
    const serviceRequestForm = document.getElementById('serviceRequestForm');
    if (serviceRequestForm) { // Check if the form exists on the current page
        serviceRequestForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Basic validation
            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const serviceType = document.getElementById('serviceType').value;
            const address = document.getElementById('address').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!fullName || !email || !serviceType || !address || !message) {
                alert('Please fill in all required fields for the service request.');
                return;
            }
            if (serviceType === "") {
                 alert('Please select a service type.');
                 return;
            }

            alert('Your service request has been submitted, ' + fullName + '! We will contact you shortly to confirm the details.');
            this.reset(); // Clear the form
        });
    }

    // Handle active navigation link highlighting for multi-page site
    const currentPath = window.location.pathname.split('/').pop(); // Gets 'index.html', 'about.html', etc.
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        const linkPath = linkHref.split('/').pop(); // Get the last part of the link's href

        // If the current page matches the link's path, add the 'active' class
        // Handle index.html specifically for default URL (e.g., just '/')
        if (currentPath === linkPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});