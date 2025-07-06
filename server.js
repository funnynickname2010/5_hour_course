//URL -> http://localhost:3000

const express = require("express");
const app = express();
const PORT = 3000;

//Middleware

app.use(express.json());

//Date for the data example



let data = {
    name: "James",
    age: 25
}

//HTTP Verbs && routes

app.get("/", (req, res) => {
    console.log("Yay I hit an endpoint", req.method);
    res.sendStatus(200);
})

app.get("/data", (req, res) => {
    res.send(`
        <body>
            <h1>
                ${JSON.stringify(data)};
            </h1>
        </body>
    `)
    res.sendStatus(200);
})

app.post("/api/data", (req, res) => {
    const newEntry = req.body;
    console.log(`${JSON.stringify(newEntry)} - The data sent back to the server`);
})

app.listen(PORT, () => console.log(`Server is listening on ${PORT} port.`));