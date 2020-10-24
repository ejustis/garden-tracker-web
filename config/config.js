var config = {};

config.app = {};
config.database = {};

config.port = 5000;

config.app.name = "My Garden Tracker";
config.app.description = "A website to display the Garden Tracker data";

config.database.url = "mongodb://localhost:27017";
config.database.name = "gardentracker";
config.database.collection = "sunexposure";

module.exports = config;