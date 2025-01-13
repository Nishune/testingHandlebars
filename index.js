import express from "express";
import { engine } from "express-handlebars";

const app = express();

//konfigurera handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

//statiska filer
app.use(express.static("public"));

//Routes
app.get("/", (req, res) => {
  res.render("about", {
    title: "Startsida",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "Om oss",
  });
});

app.listen(3080, () => console.log("Server running on port 3080"));
