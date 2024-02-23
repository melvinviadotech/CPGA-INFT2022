// Name: Melvin Viado
// Student ID: 100899671
// Date Completed: 2/22/2024

// Javascript class
class User {
  constructor(firstName, lastName, username, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.password = password;
  }
}

// ErrorMessage div element creation
$("<div class=\"text-danger mx-auto my-1\" id=\"ErrorMessage\" hidden></div>").insertAfter($("#registerTitle"));

// Check first name on input
$("#inputFirstName").on('input', (event) => {
  checkName($("#inputFirstName").val());
});

// Check last name on input
$("#inputLastName").on('input', (event) => {
  checkName($("#inputLastName").val());
});

// Check name (can be first or last)
function checkName(name) {
  if (name.length < 2) {
    $("#ErrorMessage")
      .text("All names must be 2 characters or more")
      .removeAttr("hidden");
  } else {
    $("#ErrorMessage")
      .attr('hidden', true);
  }
}

// Validate email address
$("#inputEmail").on('input', (event) => {
  if ($("#inputEmail").val().length < 8) {
    $("#ErrorMessage")
      .text("The minimum length for emails is 8 letters")
      .removeAttr("hidden");
  } else if ($("#inputEmail").val().indexOf('@') == -1) {
    $("#ErrorMessage")
      .text("Email must have an @ symbol present")
      .removeAttr("hidden");
  } else {
    $("#ErrorMessage")
      .attr('hidden', true);
  }
});

// Validate password
$("#inputPassword").on('input', (event) => {
  // Check length of the password
  if ($("#inputPassword").val().length < 6) {
    $("#ErrorMessage")
      .text("Passwords should be at least 6 characters in length")
      .removeAttr("hidden");
  } else {
    $("#ErrorMessage")
      .attr('hidden', true);
  }
});

// Validate confirm password
$("#inputConfirmPassword").on('input', (event) => {
  // Check if passwords match
  if ($("#inputPassword").val() != $("#inputConfirmPassword").val()) {
    $("#ErrorMessage")
      .text("Both the password and confirm password must match")
      .removeAttr("hidden");
  } else {
    $("#ErrorMessage")
      .attr('hidden', true);
  }
});

// On form submit
$("#login-form-button").on('click', (event) => {
  // Prevent the default form behavior (which submits the form)
  event.preventDefault();

  // Construct a new user object
  const newUser = new User(
    $("#inputFirstName").val(),
    $("#inputLastName").val(),
    $("#inputFirstName").val() + $("#inputLastName").val(),
    $("#inputEmail").val(),
    $("#inputPassword").val()
  );
  // Log the new user object to the console
  console.log(newUser);

  // Reset the form after submitting it
  $("#inputFirstName").val("");
  $("#inputLastName").val("");
  $("#inputEmail").val("");
  $("#inputPassword").val("");
  $("#inputConfirmPassword").val("");
});