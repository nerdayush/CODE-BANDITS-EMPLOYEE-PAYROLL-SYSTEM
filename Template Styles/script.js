document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (this.checkValidity() === false) {
        event.stopPropagation();
    } else {
        // Here you would typically send the data to the server
        alert('User  added successfully!');
    }
    this.classList.add('was-validated');
});
