// Function to simulate viewing a project
function viewProject(projectId) {
    alert(`Viewing details of ${projectId}`);
}

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('formMessage').innerHTML = `<p class="text-green-400">Thank you, ${name}! Your message has been sent.</p>`;
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('formMessage').innerHTML = `<p class="text-red-400">Please fill out all fields.</p>`;
    }
});
