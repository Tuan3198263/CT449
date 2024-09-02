const express = require("express");
const cors = require("cors");

const app = express();
const contactsRoutetr = require("./app/route/contact.route");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contack book aplication." });
});

app.use("/api/contacts", contactsRoutetr)

module.exports = app;
