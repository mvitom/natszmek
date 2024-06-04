const express = require('express');
const app = express();

const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res)=> {
    res.render(__dirname+'/contact.ejs');
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
});