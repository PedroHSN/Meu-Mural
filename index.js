const express = require('express');
const app = express();
const PORT = 3000;


let posts = [
              {
                id:"a",
                title:"teste do Mural",
                description:"descrição teste"
              },
            ]

  app.get("/all", (req, res) => {
      res.json(JSON.stringify(posts));
  });

  app.post("/new", express.json(), (req, res) => {
      let id = generateID();
      let title = req.body.title;
      let description = req.body.description;

      posts.push({id, title, description});

      res.send("Post Adicionado");
  })





app.listen(PORT, () => {
  console.log("Server Online on port", PORT)
});

function generateID() {
  return Math.random().toString(36).substring(2,9);
}