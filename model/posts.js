module.exports = {

   posts: [
    {
      id:"aaaaaaa",
      title:"Olá, bem-vindo",
      description:"Sejam bem-vindos(as), eu sou Pedro Nascimento e você está no meu projeto em Node.Js. Visite meu Linkedin <a href='https://www.linkedin.com/in/pdrhsn/'>Click aqui</a>"
    },
  ],
  getAll(){
    return this.posts
  },

  newPost(title, description){
    this.posts.push({id: generateID(), title, description});
  },

  deletePost(id){
    this.posts = this.posts.filter( item =>item.id != id)
  }
}

function generateID() {
  return Math.random().toString(36).substring(2,9);
}