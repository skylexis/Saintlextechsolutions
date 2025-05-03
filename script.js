// script.js

// Wait until the page is fully loaded

document.addEventListener('DOMContentLoaded', function() {

    // Select the newsletter form

    const newsletterForm = document.querySelector('#newsletter form');

    if (newsletterForm) {

        newsletterForm.addEventListener('submit', function(e) {

            e.preventDefault(); // Prevent the page from refreshing

            alert('Thank you for subscribing to our newsletter!');

            newsletterForm.reset(); // Clear the form

        });

    }

    // Select the contact form

    const contactForm = document.querySelector('#contact form');

    if (contactForm) {

        contactForm.addEventListener('submit', function(e) {

            e.preventDefault(); // Prevent the page from refreshing

            alert('Thank you for contacting Saint Lex Tech Solutions! We will get back to you soon.');

            contactForm.reset(); // Clear the form

        });

    }

});