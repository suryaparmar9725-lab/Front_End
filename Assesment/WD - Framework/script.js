// Get Form
const form = document.getElementById("complaintForm");

// Table Body
const tableBody = document.getElementById("tableBody");

// No Data Message
const noData = document.getElementById("noData");

// Load Existing Data
displayData();

// Form Submit Event
form.addEventListener("submit", function (event) {

    // Prevent Refresh
    event.preventDefault();

    // Get Input Values
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const vehicle = document.getElementById("vehicle").value.trim();
    const complaint = document.getElementById("complaint").value.trim();

    // Error Fields
    const nameError = document.getElementById("nameError");
    const phoneError = document.getElementById("phoneError");
    const emailError = document.getElementById("emailError");
    const vehicleError = document.getElementById("vehicleError");
    const complaintError = document.getElementById("complaintError");

    // Success Message
    const successMessage = document.getElementById("successMessage");

    // Clear Old Errors
    nameError.innerHTML = "";
    phoneError.innerHTML = "";
    emailError.innerHTML = "";
    vehicleError.innerHTML = "";
    complaintError.innerHTML = "";
    successMessage.innerHTML = "";

    let isValid = true;

    // Name Validation
    if (name === "") {
        nameError.innerHTML = "Name is required";
        isValid = false;
    }

    // Phone Validation
    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        phoneError.innerHTML = "Phone must be 10 digits";
        isValid = false;
    }

    // Email Validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(email)) {
        emailError.innerHTML = "Enter valid email";
        isValid = false;
    }

    // Vehicle Validation
    if (vehicle === "") {
        vehicleError.innerHTML = "Vehicle is required";
        isValid = false;
    }

    // Complaint Validation
    if (complaint === "") {
        complaintError.innerHTML = "Complaint is required";
        isValid = false;
    }

    // If Valid
    if (isValid) {

        // Create Object
        const formData = {
            name,
            phone,
            email,
            vehicle,
            complaint
        };

        // Get Existing Data
        let submissions = JSON.parse(localStorage.getItem("submissions")) || [];

        // Push New Data
        submissions.push(formData);

        // Save to LocalStorage
        localStorage.setItem("submissions", JSON.stringify(submissions));

        // Success Message
        successMessage.innerHTML = "Data Saved Successfully";

        // Reset Form
        form.reset();

        // Display Data
        displayData();
    }

});

// Display Data Function
function displayData() {

    // Get Data
    let submissions = JSON.parse(localStorage.getItem("submissions")) || [];

    // Clear Table
    tableBody.innerHTML = "";

    // No Data
    if (submissions.length === 0) {
        noData.innerHTML = "No data available";
        return;
    }

    noData.innerHTML = "";

    // Loop Data
    submissions.forEach(function (data) {

        let row = `
            <tr>
                <td>${data.name}</td>
                <td>${data.phone}</td>
                <td>${data.email}</td>
                <td>${data.vehicle}</td>
                <td>${data.complaint}</td>
            </tr>
        `;

        tableBody.innerHTML += row;
    });
}