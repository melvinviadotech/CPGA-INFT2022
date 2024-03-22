// Name: Melvin Viado
// Student ID: 100899671
// Date Completed: 3/21/24

// Selects the content division
var mainContent = document.querySelector("#content");

// Function loads the content of the blog
async function loadBlog() {
  // Fetch the blog text information
  var response = await fetch('https://jsonplaceholder.typicode.com/posts');
  var blog = await response.json();

  // Fetch the image sources
  response = await fetch ('https://pixabay.com/api/?key=43005670-f5c1dfc084500caf33a04207f&q=dogs&image_type=photo')
  var images = await response.json();

  // Creates a card for each text information
  // Inserts a picture for each card
  for (var i = 0; i < blog.length; i++){
    mainContent.innerHTML += '<div class="card m-2" style="width: 18rem;"><div class="card-header">' 
      + blog[i]['title']
      + '</div><img class="card-img-top" src="'
      + images['hits'][i]['largeImageURL']
      + '" alt="Card image cap"><div class="card-body"><blockquote class="blockquote mb-0"><p>'
      + blog[i]['body']
      + '</p><footer class="blockquote-footer">Post ' 
      + blog[i]['id']
      + ' from user '
      + blog[i]['userId']
      + '</footer></blockquote></div></div>';
  }
}

// Execute the load blog function
loadBlog();