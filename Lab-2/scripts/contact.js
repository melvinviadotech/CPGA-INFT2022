// Name: Melvin Viado
// Student ID: 100899671
// Date Completed: 2/5/2024

// Select contact input elements
let contactName = document.querySelector("#inputName");
let contactNumber = document.querySelector("#inputContactNumber");
let contactEmail = document.querySelector("#inputEmail");
let contactMessage = document.querySelector("#inputShortMessage");
let contactSubmit = document.querySelector("#contact-form-button");

// Add click event listener that outputs form inputs
// Redirects user to home page after 3 seconds
contactSubmit.addEventListener('click', function(e) {
    console.log(
        "Name: " + contactName.value
        + "\nContact Number: " + contactNumber.value
        + "\nEmail Address: " + contactEmail.value
        + "\nMessage: " + contactMessage.value
    );

    setTimeout(function(e) {
        window.location.href = "./index.html";
    }, 3000)
});
