// Name: Melvin Viado
// Date: 2/8/2024
// Project Name: ICE-4
// Project Description: Uses jQuery to manipulate HTML elements

// JQuery Code Here
// Wrap our code in the ready method
$(document).ready(function () {
  console.log("DOM is ready to be manipulated");

  // Animate the form appearance
  $("#registration-form").hide().fadeIn(5000);

  // Handle form submission
  // Document.querySelector("#signup-form").addEventListener("submit", function(event {}))
  $("#signup-form").submit(function (event) {
    // Prevent the page from refreshing
    event.preventDefault();

    // store form values
    // value gets the value of the input box
    // trim removes newlines, spaces, and tabs from beginning and end of string
    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let date = $("#date").val();

    var isValid = true;

    // Log the form values
    console.log(name);
    console.log(email);
    console.log(date);

    // Form validation
    if (name == "") {
      alert("Please enter your name!");
      isValid = false;
    }
    if (email == "") {
      alert("Please enter your email!");
      isValid = false;
    }
    if (date == "") {
      alert("Please select a date!");
      isValid = false;
    }

    if (isValid) {
      $("#confirmation-message").slideUp(function () {
        $(this)
          .html(
            `
                    <p>Thank you, <strong>${name}</strong>!</p>
                    <p>Your registration for the show on ${date} is confirmed.</p>
                    <p>A confirmation email has been sent to: <strong>${email}</strong></p>

                `
          )
          .slideDown(function () {
            $(this)
              .delay(2000)
              .fadeTo(3000, 0, function() {
                $(this)
                .slideUp();
              });
          });
        });
    }

    $("#signup-form")
      .find("input[type=text], input[type=email], select")
      .val("");

    //Form rield animations
    $("input, select")
      .focus(function () {
        $this.animate(
          {
            borderColor: "#68b3c8",
          },
          500
        );
      })
      .blur(function () {
        $(this).animate(
          {
            borderColor: "#ddd",
          },
          500
        );
      });

    // Submit button animation
    $("#signup-form input[type=submit]").hover(function () {
      $(this).animate(
        {
          backgroundColor: "#333333",
        },
        200
      ),
        function () {
          $(this).animate({
            backgroundColor: "#5c5c5c",
          }),
            200;
        };
    });
  });

  // Reset button that clears inputs and confirmation messages when clicked
  $('#signup-form input[type="button"]').on("click", function (e) {
    $("#name").val("");
    $("#email").val("");
    $("#date").val("");

    $("#confirmation-message")
      .stop(true, true)
      .fadeTo(300, 0, function () {
        $(this).slideUp();
      });
  });
});

// ICE 4 TODO:
// 1. Add a "reset" button that clears all the inputs and the confirmation message when clicked

  // The reset button will always fade out and slide up the confirmation message
  // even if animations are still happening on the element.

// 2. Implement a "fade out" message after a certain period once the registration is confirmed

  // The confirmation element will fade out and slide the confirmation message up.
  // The animation is fadeTo() instead of fadeOut() because fadeOut() removes the html
  // completely which removes the space of that message. fadeTo() just changes the 
  // opacity of the HTML to 0.