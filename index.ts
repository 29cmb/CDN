import express from "express";
import path from "path";

const app = express();
const PORT = 7173;

app.use("/cdn", express.static(path.join(__dirname, "assets")));

app.get("/", (_req, res) => {
	res.send("this is the place where he serves the cdn");
});

app.listen(PORT, () => {
	console.log(`CDN server running at http://localhost:${PORT}/cdn/`);
});
