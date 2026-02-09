const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let storedText = "";

app.post("/send", (req, res) => {
  storedText = req.body.text;
  res.json({ message: "Text received" });
});

app.get("/show", (req, res) => {
  res.json({ text: storedText });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
