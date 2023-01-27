const express = require("express");
const cors = require("cors");
const wordRoutes = require("./controllers/words.routes");

const app = express();
app.use(cors());

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("HEY THERE!!");
});
app.use("/words", wordRoutes);

app.listen(port, () => {
  console.log("server is runnig on port 8080.");
});
