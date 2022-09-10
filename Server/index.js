const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/authenticate", (req, res) => {
  res.json({ userName: "Sravanthi", password: "myPwd" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});