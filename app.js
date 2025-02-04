import express from 'express';
const app = express();


app.use(express.static('public'));


app.get('/',(req, res)=>{

  res.sendFile(`${import.meta.dirname}/views/home.html`);

});

app.get('/confirm',(req, res)=>{

  res.sendFile(`${import.meta.dirname}/views/confirm.html`);

});


app.listen(3000, ()=>{

  console.log("Server running at http://localhost:3000")

});