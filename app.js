const express = require("express");
const cors = require("cors");
const { usersRouter } = require("./routes/users.routes");
const { repairsRouter } = require("./routes/repairs.routers");

const { db } = require("./utils/database");

const app = express();

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/v1/users", usersRouter);
app.use("/api/v1/repair", repairsRouter);

db.authenticate()
  .then(() => console.log("Database authenticated"))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log("Database synced"))
  .catch((err) => console.log(err));

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});
