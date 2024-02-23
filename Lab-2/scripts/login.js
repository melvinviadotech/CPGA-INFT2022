// Name: Melvin Viado
// Student ID: 100899671
// Date Completed: 2/22/2024

// On login form submit
$("#login-form-button").on("click", (event) => {
  // Prevent default behaviour of the form
  event.preventDefault();

  // Change disaply username to input username
  $("#username").html($("#inputUsername").val());

  // Reset form
  $("#inputPassword").val("");
  $("#inputUsername").val("");
});