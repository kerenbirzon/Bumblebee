const express = require("express");
const bodyParser = require("body-parser");
// const router = express.Router();
const data = require("./Routes/data");

let port = 8080;
let host = 'localhost';

const cors = require("cors");
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", data);
// app.get("/messages/:screen", (req,res) => {
//     console.log(req.params)

//     const query  = req.params
//     console.log(query)
//     console.log(query.screen.substr("=" + 1, query.screen.length - 1))
//     res.send("tjans")
// })

app.listen(port);