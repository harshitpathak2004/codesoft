// Scroll to Features section when button is clicked
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    });
}

// Form validation and submission handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    if (name && email && message) {
        alert(`Thank you for reaching out, ${name}! We will get back to you shortly.`);
        this.reset(); // Reset form fields after submission
    } else {
        alert('Please fill in all fields.');
    }
});
