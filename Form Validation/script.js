document.addEventListener('DOMContentLoaded', function() {
    const userForm = document.getElementById('userForm');

    userForm.addEventListener('submit', function(event) {
        // Prevent form submission
        event.preventDefault();

        // Clear previous validation messages
        clearValidationMessages();

        // Validate form fields
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const role = document.getElementById('role').value;

        let isValid = true;

        // Validate username
        if (username === '') {
            showValidationMessage('username', 'Please enter a username.');
            isValid = false;
        }

        // Validate email
        if (email === '') {
            showValidationMessage('email', 'Please enter a valid email.');
            isValid = false;
        } else if (!validateEmail(email)) {
            showValidationMessage('email', 'Please enter a valid email format.');
            isValid = false;
        }

        // Validate role
        if (role === '') {
            showValidationMessage('role', 'Please select a role.');
            isValid = false;
        }

        // If the form is valid, you can proceed with form submission (e.g., send data to the server)
        if (isValid) {
            alert('User  added successfully!');
            // Here you would typically send the data to the server
            // For example, using fetch or XMLHttpRequest
            // fetch('/api/users', { method: 'POST', body: JSON.stringify({ username, email, role }) })
        }

        // Add Bootstrap validation class
        userForm.classList.add('was-validated');
    });

    function showValidationMessage(fieldId, message) {
        const field = document.getElementById(fieldId);
        const feedback = document.createElement('div');
        feedback.className = 'invalid-feedback';
        feedback.innerText = message;
        field.classList.add('is-invalid');
        field.parentNode.appendChild(feedback);
    }

    function clearValidationMessages() {
        const fields = ['username', 'email', 'role'];
        fields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            field.classList.remove('is-invalid');
            const feedback = field.parentNode.querySelector('.invalid-feedback');
            if (feedback) {
                feedback.remove();
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
