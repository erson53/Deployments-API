const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // Middleware zum Verarbeiten von JSON-Anfragen

// Dummy-Daten für Deployments (später durch eine Datenbank ersetzen)
const deployments = [
  {
    id: 1,
    name: "App 1",
    date: "2022-01-16",
  },
  {
    id: 2,
    name: "App 2",
    date: "2022-01-17",
  },
  {
    id: 3,
    name: "App 3",
    date: "2022-01-18",
  },
  {
    id: 4,
    name: "App 4",
    date: "2022-01-19",
  },
  {
    id: 5,
    name: "App 5",
    date: "2022-01-20",
  },
  {
    id: 6,
    name: "App 6",
    date: "2022-01-21",
  },
  {
    id: 7,
    name: "App 7",
    date: "2022-01-22",
  },
  {
    id: 8,
    name: "App 8",
    date: "2022-01-23",
  },
  {
    id: 9,
    name: "App 2",
    date: "2022-01-17",
  },
  {
    id: 10,
    name: "App 1",
    date: "2022-01-16",
  },
];

let nextId = 1; // Initialisieren Sie die ID für das erste Deployment

// GET-Routen für Deployments
app.get("/deployments", (req, res) => {
  res.json(deployments);
});

// POST-Routen für Deployments
app.post("/deployments", (req, res) => {
  const { name, date } = req.body;
  if (!name || !date) {
    return res
      .status(400)
      .json({ error: "Alle Attribute (name, date) sind erforderlich." });
  }

  const newDeployment = {
    id: nextId++, // Vergeben Sie automatisch eine eindeutige ID
    name,
    date,
  };
  deployments.push(newDeployment);

  res.status(201).json(newDeployment);
});

// DELETE-Routen für Deployments
app.delete("/deployments/:id", (req, res) => {
  const idToDelete = parseInt(req.params.id, 10); // Konvertieren Sie die ID in eine Zahl
  const index = deployments.findIndex(
    (deployment) => deployment.id === idToDelete
  );

  if (index === -1) {
    return res.status(404).json({ error: "Deployment nicht gefunden." });
  }

  deployments.splice(index, 1);
  res.status(204).end();
});

app.listen(port, () => {
  console.log(`Die Express-Anwendung läuft auf http://localhost:${port}`);
});
