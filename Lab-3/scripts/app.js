// Name: Melvin Viado
// Student ID: 100899671
// Date Completed: 2/22/2024

// Select title
let title = document.querySelector("#title");

// Selects navbar text
let navbarLink = document.querySelector("#navbar-title");
let homeLink = document.querySelector("#home-link");
let productLink = document.querySelector("#product-link");
let servicesLink = document.querySelector("#services-link");
let aboutUsLink = document.querySelector("#about-us-link");
let contactUsLink = document.querySelector("#contact-us-link");
let username = document.querySelector("#username");
let loginLink = document.querySelector("#login-link");
let registerLink = document.querySelector("#register-link");
let insertAfterElement = document.querySelectorAll(".nav-item")[2];
let blogLink = document.querySelector("#blog-link");

// Creates the human resources link elements
let humanResourcesLinkElement = document.createElement("li");
let humanResourcesIcon = document.createElement("i");
let humanResourcesLabel = document.createElement("a");

// Selects copyright statement for fixed bottom navbar
let copyrightStatement = document.querySelector("#copyright-statement");

//
title.innerHTML = "Lab 3";

// Change text of all navbar items
navbarLink.innerHTML = "Lab 3 - INFT2202";
homeLink.innerHTML = "Home";
productLink.innerHTML = "Interests";
servicesLink.innerHTML = "Services";
aboutUsLink.innerHTML = "About Us";
contactUsLink.innerHTML = "Contact Us";
username.innerHTML = "Not Logged In";
loginLink.innerHTML = "Login";
registerLink.innerHTML = "Register";
copyrightStatement.innerHTML = "<i class=\"fa-solid fa-copyright\"></i> CopyRight 2024";
blogLink.innerHTML = "Blog";

// Set attributes and add human resources link elemenst to the DOM
humanResourcesLinkElement.classList.add("nav-item");
insertAfterElement.after(humanResourcesLinkElement);
humanResourcesIcon.classList.add("fa-solid", "fa-users");
humanResourcesLinkElement.appendChild(humanResourcesIcon);
humanResourcesLabel.classList.add("nav-link", "active", "d-inline", "text-light");
humanResourcesLabel.innerHTML = "Human Resources";
humanResourcesLabel.setAttribute("id", "human-resources-link");
humanResourcesLabel.setAttribute("aria-current", "page");
humanResourcesLabel.setAttribute("href", "./index.html");
humanResourcesLinkElement.appendChild(humanResourcesLabel);

