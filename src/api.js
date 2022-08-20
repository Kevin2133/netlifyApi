const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");
const server = express();
server.use(cors({
    origin: '*'
}));
const data = require("./data.json");
const router = express.Router();




router.get("/", (req, res) => {
    res.header("Content-Type", "application/json");
    res.send(data);
    res.end();
});

router.get("/manuel", (req, res) => {
    res.header("Content-Type", "application/json");
    res.send("Bella Elia");
    res.end();
});


server.use("/.netlify/functions/api", router);


module.exports.handler = serverless(server);

