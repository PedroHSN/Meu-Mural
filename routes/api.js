const express = require('express');
const posts = require('../model/posts')
const router = express.Router();
const cors = require('cors');

const options = {
    origin: "http://localhost:3000"
}

router.use(cors(options))


router.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getAll()));
});

router.post("/new", express.json(), (req, res) => {
  
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description)

    res.send("Post Adicionado");
})

router.delete("/delete", express.json(), (req, res) => {

    let id = req.body.id;
    posts.deletePost(id)
    res.send("Post Deletado")
})

module.exports = router;