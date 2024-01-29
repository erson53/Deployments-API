# Express Deployments API

Diese Express-Anwendung dient als einfache API zum Verwalten von Deployments. Sie ist derzeit gehostet auf Render unter der folgenden URL: [https://deployments-rwq6.onrender.com/deployments](https://deployments-rwq6.onrender.com/deployments).

## Funktionen

Die Anwendung bietet die folgenden Funktionen:

- **GET /deployments:** Abrufen der Liste aller Deployments.
- **POST /deployments:** Hinzufügen eines neuen Deployments.
- **DELETE /deployments/:id:** Löschen eines Deployments anhand seiner eindeutigen ID.

## Installation und Ausführung

Um diese Anwendung lokal auszuführen, folge diesen Schritten:

1. Stelle sicher, dass [Node.js](https://nodejs.org/) auf deinem Computer installiert ist.

2. Klonen dieses Repository oder kopiere den Anwendungscode in ein Verzeichnis deiner Wahl.

3. Navigiere im Terminal in das Verzeichnis der Anwendung.

4. Installiere die erforderlichen Abhängigkeiten, indem du den folgenden Befehl ausführst:

   ```bash
   npm install
5. Starte die Anwendung, indem du den folgenden Befehl ausführst:

   ```bash
   npm start
Die Anwendung wird auf http://localhost:3000 ausgeführt.

## Dummy-Daten

Die Anwendung wird mit Dummy-Daten für Deployments initialisiert. Die Dummy-Daten sehen wie folgt aus:

```javascript
// Dummy-Daten für Deployments
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
  // ... weitere Dummy-Daten
];

// - Jedes Deployment-Objekt hat eine eindeutige ID, einen Namen und ein Datum.