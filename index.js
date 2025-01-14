import express from "express";
import { engine } from "express-handlebars";
import renderPage from "./lib/renderPage.js";
const app = express();

//konfigurera handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

//statiska filer
app.use(express.static("public"));

//Routes
app.get("/", (req, res) => {
  renderPage(res, "index");
});
app.get("/about", (req, res) => {
  renderPage(res, "about");
});
app.get("/contact", (req, res) => {
  renderPage(res, "contact");
});

app.listen(3080, () => console.log("Server running on port 3080"));
