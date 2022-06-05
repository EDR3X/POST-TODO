const express = require("express");
const app = express();
const cors = require("cos");
const PORT = 5000;

//*middleware
app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`server started at port ${PORT}`));
