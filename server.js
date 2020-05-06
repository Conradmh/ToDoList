const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const app = express();

const corsOptions = {
  origin: "http://localhost:8081"
};
// db connect
const db = require('./models');
db.sequelize.sync();

// drop db
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// splash route

app.get('/', (req, res) => {
    res.json({message: "Login / Splash Page"})
});


require("./routes/properties.routes")(app);

// set port, listen for requests
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
