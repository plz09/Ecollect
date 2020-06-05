//sqlite3 import dependencies
const sqlite3 = require("sqlite3").verbose();

//object that makes operations in the dabase
const db = new sqlite3.Database("./src/database/database.db");

// db.serialize(() => {
//     // db.run(`
//     //     CREATE TABLE IF NOT EXISTS places (
//     //         id INTEGER PRIMARY KEY AUTOINCREMENT,
//     //         image TEXT,
//     //         name TEXT,
//     //         address TEXT,
//     //         address2 TEXT,
//     //         state TEXT,
//     //         city TEXT,
//     //         items TEXT
//     //     );
//     // `)
    
//     // const query = `
//     //     INSERT INTO places (
//     //         image,
//     //         name,
//     //         address,
//     //         address2,
//     //         state,
//     //         city,
//     //         items
//     //     ) VALUES (?,?,?,?,?,?,?);
//     // `

//     // const values = [
//     //     "https://images.unsplash.com/photo-1533626904905-cc52fd99285e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
//     //     "Paperside",
//     //     "Av. Carlos Conde, Jardim Europa",
//     //     "Número 357",
//     //     "Rio Grande do Norte",
//     //     "Natal",
//     //     "Resíduos Eletônicos, Lâmpadas"
//     // ]

//     // function afterInsertData(err) {
//     //     if(err) {
//     //         return console.log(err);
//     //     }

//     //     console.log("Cadastrado com sucesso!");
//     //     console.log(this);
//     // }
    
//     // db.run(query, values, afterInsertData);

//     // db.all(`SELECT name FROM places`, function(err, rows) {
//     //     if(err) {
//     //         return console.log(err);
//     //     }

//     //     console.log("Aqui estão seus registros:");
//     //     console.log(rows);
//     // });

//     // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
//     //     if(err) {
//     //         return console.log(err);
//     //     }

//     //     console.log("Registro deletado com sucesso!")
//     // });
// });
