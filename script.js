const form = document.getElementById("userForm");
const message = document.getElementById("message");
const tableBody = document.querySelector("#userTable tbody");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Data Extraction
    const data = {
        firstName: document.getElementById("firstName").value.trim(),
        lastName: document.getElementById("lastName").value.trim(),
        age: parseInt(document.getElementById("age").value),
        gender: document.getElementById("gender").value
    };

    // Validation
    if (data.age <= 0 || isNaN(data.age)) {
        showMessage("Please enter a valid age.", "error");
        return;
    }

    // Success Action
    addUserToTable(data);
    showMessage("User added successfully!", "success");
    form.reset();
});

function addUserToTable(user) {
    const row = tableBody.insertRow();
    
    row.innerHTML = `
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.age}</td>
        <td>${user.gender}</td>
        <td><button class="delete-btn" onclick="deleteRow(this)">Delete</button></td>
    `;
}

function deleteRow(btn) {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function showMessage(text, type) {
    message.innerText = text;
    message.className = `status-message ${type}`;
    // Auto-hide message after 3 seconds
    setTimeout(() => { message.innerText = ""; }, 3000);
}