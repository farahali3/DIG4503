import Express from "express";
import fs from "fs";
import cors from "cors"

const App = Express();
const port = 3010;
App.use(cors());

let fileContents = fs.readFileSync("database.json");

let database = JSON.parse(fileContents);

App.use("/", Express.static("client/build"));

App.get("/api/employees/name/:name", (req, res) => {
    let result = {"error": "Not found"};

    database.forEach((value) => {
        if (req.params.name == value.name) {
            result = value;
        }
    });
    res.json(result);
})


App.get("/api/ages/number/:age", (req, res) => {
    let result = {"error": "Not found"};

    database.forEach((value) => {
        if (req.params.age == value.age) {
            result = value;
        }
    });
    res.json(result);
})

App.post("/api/employees/name/:name", (req, res) => {
    let result = {
        "name": req.params.name,
        "score": parseInt(req.params.name)
    };
    databasse.push(result);
    fs.writeFileSync("database.json", JSON.stringify(database, null, '\t'));
    res.json(result);
})

App.listen(port, () => {
    console.log("server is running");
})