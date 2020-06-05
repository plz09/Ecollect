const express = require("express");
const server = express();

const db = require("./database/db");

server.use(express.static("public"));

//habilitar o uso do req.body
server.use(express.urlencoded({ extended: true}));

//template engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
    express: server,
    noCache: true
});

server.get("/", (req, res) => {
    return res.render("index.html", {title: "Um titulo"});
});

server.get("/create-point", (req, res) => {
    //url query strings
    req.query

    return res.render("create-point.html");
});

server.post("/savepoint", (req, res) => {
    
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if(err) {
            return console.log(err);
        }

        console.log("Cadastrado com sucesso!");
        console.log(this);
        return res.send("ok!");
    }
    
    db.run(query, values, afterInsertData);
})

server.get("/search", (req, res) => {

    db.all(`SELECT * FROM places`, function(err, rows) {
        if(err) {
            return console.log(err);
        }

        const total = rows.length;
        
        //Show HTML page with the data from the database
        return res.render("search-results.html", { places: rows, total: total });
    });
});


server.listen(3000);