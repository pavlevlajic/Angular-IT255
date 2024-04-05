const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json());

const getData = () => {
  const jsonData = fs.readFileSync("./db.json");
  return JSON.parse(jsonData);
};

// CRUD REST operacije

// GET - Dohvati sve podatke
app.get("/data", function(req, res) {
  const data = getData();
  res.status(200).json(data);
});

// POST - Dodaj novi zapis
app.post("/data", (req, res) => {
  const data = getData();
  data.push(req.body);
  fs.writeFileSync("./db.json", JSON.stringify(data));
  res.status(201).send("Data added");
});

// PUT - Ažuriraj zapis
app.put("/data/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const newData = req.body;
  const data = getData();
  const index = data.findIndex((item) => item.id === id);

  if (index !== -1) {
    data[index] = newData;
    fs.writeFileSync("./db.json", JSON.stringify(data));
    res.status(200).send("Data updated");
  } else {
    res.status(404).send("Data not found");
  }
});

// DELETE - Obriši zapis
app.delete("/data/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const data = getData();
  const index = data.findIndex((item) => item.id === id);

  if (index !== -1) {
    data.splice(index, 1);
    fs.writeFileSync("./db.json", JSON.stringify(data));
    res.status(200).send("Data deleted");
  } else {
    res.status(404).send("Data not found");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
