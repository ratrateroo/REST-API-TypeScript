const { v4: uuidv4 } = require("uuid");

const HttpError = require("../models/http-error");

let DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: "20 W 34th St, New York, NY 10001",
    creator: "u1",
  },
];

const getSurveyById = (req, res, next) => {
  const placeId = req.params.pid; // { pid: 'p1' }

  const survey = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });

  if (!survey) {
    throw new HttpError("Could not find a survey for the provided id.", 404);
  }

  res.json({ survey }); // => { survey } => { survey: survey }
};

// function getSurveyById() { ... }
// const getSurveyById = function() { ... }

const getSurveysByUserId = (req, res, next) => {
  const userId = req.params.uid;

  const places = DUMMY_PLACES.filter((p) => {
    return p.creator === userId;
  });

  if (!places || places.length === 0) {
    return next(
      new HttpError("Could not find places for the provided user id.", 404)
    );
  }

  res.json({ places });
};

const createSurvey = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { title, description, address, creator } = req.body;

  let coordinates;
  try {
    coordinates = await getCoordsForAddress(address);
  } catch (error) {
    return next(error);
  }

  // const title = req.body.title;
  const createdSurvey = {
    id: uuidv4(),
    title,
    description,
    location: coordinates,
    address,
    creator,
  };

  DUMMY_PLACES.push(createdSurvey); //unshift(createdSurvey)

  res.status(201).json({ survey: createdSurvey });
};

const updateSurvey = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Invalid inputs passed, please check your data.", 422);
  }

  const { title, description } = req.body;
  const placeId = req.params.pid;

  const updatedSurvey = { ...DUMMY_PLACES.find((p) => p.id === placeId) };
  const placeIndex = DUMMY_PLACES.findIndex((p) => p.id === placeId);
  updatedSurvey.title = title;
  updatedSurvey.description = description;

  DUMMY_PLACES[placeIndex] = updatedSurvey;

  res.status(200).json({ survey: updatedSurvey });
};

const deleteSurvey = (req, res, next) => {
  const placeId = req.params.pid;
  if (!DUMMY_PLACES.find((p) => p.id === placeId)) {
    throw new HttpError("Could not find a survey for that id.", 404);
  }
  DUMMY_PLACES = DUMMY_PLACES.filter((p) => p.id !== placeId);
  res.status(200).json({ message: "Deleted survey." });
};

exports.getSurveyById = getSurveyById;
exports.getSurveysByUserId = getSurveysByUserId;
exports.createSurvey = createSurvey;
exports.updateSurvey = updateSurvey;
exports.deleteSurvey = deleteSurvey;
