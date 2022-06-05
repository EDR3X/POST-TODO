const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cos");
const pool = require("./db");

//*middleware
app.use(cors());
app.use(express.json());

//* ROUTES

//*create a todo

//* get all todos

//* update a todo

//* delete a todo

app.listen(PORT, () => console.log(`server started at port ${PORT}`));
