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

  app.post("/new", (req, res) => {

  })





app.listen(PORT, () => {
  console.log("Server Online on port", PORT)
});
