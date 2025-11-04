/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded', function() {
    // Find the newsletter form and the message area
    const form = document.querySelector('.newsletter');
    const msg = document.querySelector('.message');

    if (!form || !msg) return;

    // Find likely email input inside the form
    const emailInput = form.querySelector('input[type="email"]') ||
                       form.querySelector('input[name="email"]') ||
                       form.querySelector('input#email') ||
                       form.querySelector('input');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = emailInput ? emailInput.value.trim() : '';

        // basic email pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !emailPattern.test(email)) {
            msg.textContent = 'Please enter a valid email address.';
            return;
        }

        msg.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
        if (emailInput) emailInput.value = '';
    });
});
