const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "front-end", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "front-end", "index.html"));
});

app.listen(process.env.PORT || 3001, () => {
    console.log("Server started!");
});


