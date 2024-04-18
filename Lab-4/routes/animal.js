const express = require("express");
const router = express.Router();
const animalController = require("../controllers/animalController");

router.get("/entryForm", animalController.displayEntryForm);

router.post("/saveAnimal", animalController.saveAnimal);

router.get("/animalList", animalController.getAllAnimals);

router.post("/editAnimalPage", animalController.displayEditAnimalForm);

router.post("/editAnimal", animalController.editAnimal);

router.post("/deleteAnimal", animalController.deleteAnimal);

module.exports = router;