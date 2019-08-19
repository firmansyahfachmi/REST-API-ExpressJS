const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
require("dotenv/config");
const router = require("./routes/route");

const app = express();
const port = process.env.PORT || 5000;
const nodeEnv = process.env.NODE_ENV || "Development";

app.listen(port, () => {
    console.log(`Server is listening in ${nodeEnv} mode on port ${port} `);
});

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use('/', router)

module.exports = app;