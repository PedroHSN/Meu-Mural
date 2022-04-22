const express = require('express');
const app = express();
const PORT = 3000;
const posts = require('./model/posts')



  app.get("/all", (req, res) => {
      res.json(JSON.stringify(posts.getAll()));
  });

  app.post("/new", express.json(), (req, res) => {
      
      let title = req.body.title;
      let description = req.body.description;

      posts.newPost(title, description)

      res.send("Post Adicionado");
  })

app.delete("/delete", express.json(), (req, res) => {
  
    let id = req.body.id;
    posts.deletePost(id)
    res.send("Post Deletado")
})



app.listen(PORT, () => {
  console.log("Server Online on port", PORT)
});

