/*const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Serve static files from "games" directory
app.use("/games", express.static(path.join(__dirname, "games")));

// Optional: root route just says server is running
app.get("/", (req, res) => {
  res.send("Flash game server is running!");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
}); */
const express = require("express");
const app = express();
const PORT = process.env.PORT || 10000;

// Serve files from the 'files' directory
app.use("/files", express.static("files"));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
