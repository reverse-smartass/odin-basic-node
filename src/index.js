import express from "express";
import path from "path";
const app = express();

const port = process.env.PORT || 3000;
const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" }
];

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src/views"));
app.use(express.static(path.join(process.cwd(),"src","public")));

app.get("/", (req, res) => {
  res.render("homepage", { pages });
});

app.get("/about", (req, res) => {
  res.render("about", { pages });
});

app.get("/contact", (req, res) => {
  res.render("contact", { pages });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "Page Not Found", pages });
});

app.listen(port, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Server is running on port ${port}`);
});
