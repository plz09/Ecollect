const express = require("express");
const server = express();

server.use(express.static("public"));

//template engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
    express: server,
    noCache: true
});

server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

server.get("/create-point", (req, res) => {
    res.sendFile(__dirname + "/views/create-point.html");
});


server.listen(3000);