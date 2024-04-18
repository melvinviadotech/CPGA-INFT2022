const Animal = require("../model/Animal");

// Displays the entry form page
async function displayEntryForm(req, res) {
  res.render("entry-form.ejs"), { };
}

// Saves the animal when the add animal to database button is clicked
async function saveAnimal(req, res) {
  // Get form data
  const formData = req.body;

  try {
    // Create an animal record in mongoDB
    await Animal.create({
      zoo: formData.homeZoo,
      scientificName: formData.scientificName,
      commonName: formData.commonName,
      givenName: formData.givenName,
      gender: formData.gender,
      dateOfBirth: formData.dateOfBirth,
      age: formData.age,
      isTransportable: formData.isTransportable
    });
  } catch (err) {
    // Show error message
    console.log(`Error in creating animal ${formData.commonName}` + err);
  }

  // Return users to the list of all animals
  getAllAnimals(req, res);
}

// Shows the all animals page to the user
async function getAllAnimals(req, res) {
  try {
    // Find all animals in the database 
    const myAnimals = await Animal.find({});

    // Render the all animals page to the user passing all the retrieved animals
    res.render("all-animals.ejs", { myAnimals });
  } catch (err) {
    // Show error message to console
    console.err("Error: Failed to get animals");
    res.status(500).send("Error: Failed to get animals");
  }
}

// Display edit animal form to the user
async function displayEditAnimalForm(req, res) {
  // Get the animal data of that specific record
  let animalData = req.body;

  // Processes date to show in html date input type properly
  try {
    let date = new Date(animalData.dateOfBirth);

    const offset = date.getTimezoneOffset()
  
    animalData.dateOfBirth = new Date(date.getTime() - (offset * 60 * 1000))
      .toISOString()
      .split('T')[0];
  } catch (err) {
    console.log("No date is set");
  }

  // Render the edit animal page to the user passing in animal data
  res.render("edit-animal.ejs", { animalData });
}

// Edit the animal with the potentially edited values
async function editAnimal(req, res) {
  const formData = req.body;

  const update = {
    zoo: formData.zoo,
    scientificName: formData.scientificName,
    commonName: formData.commonName,
    givenName: formData.givenName,
    gender: formData.gender,
    dateOfBirth: formData.dateOfBirth,
    age: formData.age,
    isTransportable: formData.isTransportable
  }

  // Query the animal being edited
  const query = Animal.where({ _id: formData.id });

  // Update the animal
  await query.findOneAndUpdate(update);

  // Return user to all animals page
  getAllAnimals(req, res);
}

// Deletes the animal
async function deleteAnimal(req, res) {
  // Get the id of the animal
  const formData = req.body;

  // Query the animal
  const query = Animal.where({ _id: formData.id });

  // Delete the animal
  await query.findOneAndDelete();

  // Return user to all animals page
  getAllAnimals(req, res);
}

// Export all modules
module.exports = {
  displayEntryForm,
  saveAnimal,
  getAllAnimals,
  displayEditAnimalForm,
  editAnimal,
  deleteAnimal
};