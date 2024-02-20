$(document).ready(function () {
  console.log("jQuery is running!");
  // Injecting an H1 header into the header HTML element with an id of "header"
  $("#header").html("<h1>Welcome to our Travel Blog!</h1>");

  // Create Navigation Bar
  const categories = ["Beaches", "Mountains", "Cities", "Forests", "Deserts"];
  let navContent = "<ul>";
  $.each(categories, function (index, category) {
    // console.log(index);
    // console.log(category);
    navContent += `<li onclick="loadCategoryContent('${category}')">${category}</li>`;
  });
  navContent += "</ul>";
  $("#navbar").html(navContent);

  window.loadCategoryContent = function (category) {
    console.log("loadCategoryContent function ran!");
    console.log(category);
    let content = `<h2>${category}</h2>`;
    content += `<div class="carousel" id="${category.toLowerCase()}-carousel"></div>`;
    $("#content").html(content);

    populateCarousel(category.toLowerCase());
  };

  const categoryImages = {
    beaches: [
      { alt: "Beach Sunset", src: "beachsunset.jpg" },
      { alt: "Sandy Shore", src: "sandyshore.jpg" },
      { alt: "Marina Resort", src: "marinaresort.jpg" },
    ],
    mountains: [
      { alt: "Mountain Range", src: "montainrange.jpg" },
      { alt: "Snowy Peak", src: "snowypeak.jpg" },
      { alt: "Hiking Trail", src: "hikingtrail.jpg" },
    ],
    cities: [
      { alt: "New York", src: "newyork.jpg" },
      { alt: "Saint Augustine", src: "saintaugustine.jpg" },
      { alt: "Las Vegas", src: "lasvegas.jpg" },
    ],
    forests: [
      { alt: "White Woodlands", src: "whitewoodlands.jpg" },
      { alt: "Hill Grove", src: "hillgrove.jpg" },
      { alt: "Greater Pines", src: "greaterpines.jpg" },
    ],
    deserts: [
      { alt: "Sonoran Desert", src: "sonorandesert.jpg" },
      { alt: "Sahara Desert", src: "saharadesert.jpg" },
      { alt: "Barren Desert", src: "barrendesert.jpg" },
    ],
  };

  // category = beaches
  function populateCarousel(category) {
    console.log("populate carousel ran!");
    const images = categoryImages[category];

    // [].forEach(), [].map() -> 2 Array Iterator Method
    let carouselContent = images
      .map((image, index) => {
        return `<div class="carousel-item ${index == 0 ? "active" : ""}">
      <div class="image" style="background-image: url('../images/${image.src}')">
      </div>
      <p>${image.alt}</p>
      </div>
      `;
      })
      .join("");

    $(`#${category}-carousel`).html(carouselContent);

    $(`#${category}-carousel`).append(`
    <button class="carousel-control prev" onclick="moveCarousel('${category}', -1)">&lt;</button>
    <button class="carousel-control next" onclick="moveCarousel('${category}', 1)">&gt;</button>
    `);
  }

  window.moveCarousel = function (category, direction) {
    debugger;
    let items = $(`#${category}-carousel .carousel-item`);

    let activeIndex = items.index(items.filter(".active"));

    let newIndex = activeIndex + direction;

    if (newIndex >= items.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = items.length - 1;
    }
    items.removeClass("active");
    items.eq(newIndex).addClass("active");
  };

  $("#footer").append("<p><strong>Favourite Category:</strong> City</p>");
  $("#footer").append("<p><strong>Favourite Place:</strong> Las Vegas</p>");
  $("#footer").append("<p><strong>Why:</strong> What happens in Vegas stays in Vegas</p>");
});

// ICE 5 Tasks:
// 1.Populate Cities, Forests & Deserts
// 2. Add 3 images to the Cities & Deserts (Optionally, you may add images for the rest of the categories)
// 3. Dynamically add content to the Footer using jQuery. The content should include a short description of your favorite category/place and why.

// DUE Monday February 19th at 11:59 PM
