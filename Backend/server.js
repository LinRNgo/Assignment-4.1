require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./app/models");

db.sequelize.sync().then(()=>{
    
  if (process.env.TESTING == 'true') {
        console.log("Testing!"); 
    }
});

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
app.options("*", cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Gallery BAckend" });
});

require("./app/routes/auth.routes.js")(app);
require("./app/routes/account.routes")(app);
require("./app/routes/role.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3036;
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
}

module.exports = app;