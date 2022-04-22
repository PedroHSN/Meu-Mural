const express = require('express');
const app = express();
const apiRoute = require('./routes/api')
const path = require('path');

const PORT = 3000;

app.use('/api', apiRoute );
app.use("/", express.static(path.join(__dirname, "public")));


app.listen(PORT, () => {
  console.log("Server Online on port", PORT)
});

