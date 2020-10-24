const globalConfig = require('./config/config');

const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(globalConfig.port, () => {
    console.log("Server started on port: " + globalConfig.port);
});