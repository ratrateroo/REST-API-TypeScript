const express = require("express");

const surveysControllers = require("../controllers/surveys-controllers");

const router = express.Router();

router.get("/:pid", surveysControllers.getSurveyById);

router.post("/", surveysControllers.createSurvey);

router.patch("/:pid", surveysControllers.updateSurvey);

router.delete("/:pid", surveysControllers.deleteSurvey);

module.exports = router;
