const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { readdirSync } = require("fs");

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

// const dbConn = require("./configs/dbConn");

const app = express();

app.use(cors());
app.use(express.json({ limit: "50MB" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
// dbConn.connect();

readdirSync("./routes").map((r) => app.use("/api/v1", require("./routes/" + r)));

const PORT = process.env.PORT || 5000
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) })

