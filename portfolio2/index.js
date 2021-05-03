import Express from "express";
import fs from "fs";
import chalk from "chalk";

import dm from "dundermifflin"

// calls express
const App = Express();
// is the port
const port = 3020;

// Displays chalk into console in diff colors
console.log(chalk.hex("#EAA2DC")("Hello! It's ") + chalk.hex("#A2DAEA").bold("The Office ")+ chalk.hex("#EAA2DC")("name and age form!"));

//reads the database.json file with the names
let fileContents = fs.readFileSync("database.json");

let database = JSON.parse(fileContents);

//uses express
App.use("/", Express.static("public"));

//gets the employees names using 'name' as the keyword
App.get("/api/employees/name/:name", (req, res) => {
    let result = {"error": "Not found"};

    database.forEach((value) => {
        if (req.params.name == value.name) {
            result = value;
        }
    });
    res.json(result);
})

// gets the employee ages using 'age' as the keyword
App.get("/api/ages/number/:age", (req, res) => {
    let result = {"error": "Not found"};

    database.forEach((value) => {
        if (req.params.age == value.age) {
            result = value;
        }
    });
    res.json(result);
})

// posts it
App.post("/api/employees/name/:name", (req, res) => {
    let result = {
        "name": req.params.name,
        "score": parseInt(req.params.name)
    };
    databasse.push(result);
    fs.writeFileSync("database.json", JSON.stringify(database, null, '\t'));
    res.json(result);
})



// app listens to the port -- displays
App.listen(port, () => {
    console.log(chalk.hex("#33BBBB")("server is running"));
})

let dunder = dm();
dm.michael()   
dm.jim();   
dm.dwight();   
dm.angela();   
dm.ryan();   
dm.kelly();    
console.log(dunder);