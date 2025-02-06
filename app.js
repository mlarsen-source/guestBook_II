/*

Author: Matthew Larsen
Date: 02/05/2025
Portfolio Project: Guestbook Part II
Filename: app.js
File Description: JavaScript for Guestbook app

*/


import express from 'express';
const app = express();
const contactList = [];


app.use(express.static('public'));


app.use(express.urlencoded({extended: true}));

// default route for contact form home page
app.get('/',(req, res)=>{

  res.sendFile(`${import.meta.dirname}/views/home.html`);

});


// post route to handle contact form submission
app.post('/confirm', (req, res) =>
{
  // Get form data from request body
  const contact = 
  {
    fname: req.body.fname,
    lname: req.body.lname,
    title: req.body.title,
    company: req.body.company,
    linkedIn: req.body.linkedIn,
    meet: req.body.meet,
    other: req.body.other,
    message: req.body.message,
    mailList: req.body.mailList,
    format: req.body.format,
    timestamp: new Date()
  };
  
  // Save contact info to the contactList array
  contactList.push(contact)
  
  // Log the contactList array to the console
  console.log(req.body);


      //create dynamic confirmation page
  //let confirmationHTML = '<h2>Thank you.</h2><p>The following appointment has been scheduled.</p><ul>';
  //confirmationHTML += `<li>Name: ${appointment.fname} ${appointment.lname} </li><li>Date:  ${appointment.date}</li><li>Time: ${appointment.time} </li>`;
  //confirmationHTML += '</ul>';
  
  // send confirmation page to user
  res.sendFile(`${import.meta.dirname}/views/confirm.html`);
  
});




//app.get('/confirm',(req, res)=>{

  //res.sendFile(`${import.meta.dirname}/views/confirm.html`);

//});


app.listen(3000, ()=>{

  console.log("Server running at http://localhost:3000")

});