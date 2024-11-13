document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const salary = document.getElementById('salary').value;

    fetch('/api/employees', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, position, salary })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Employee added:', data);
        loadEmployees();
    })
    .catch(error => console.error('Error:', error));
});

function loadEmployees() {
    fetch('/api/employees')
        .then(response => response.json())
        .then(data => {
            const employeeList = document.getElementById('employeeList');
            employeeList.innerHTML = '';
            data.forEach(employee => {
                const div = document.createElement('div');
                div.textContent = `${employee.name} - ${employee.position} - $${employee.salary}`;
                employeeList.appendChild(div);
            });
        });
}

loadEmployees();
