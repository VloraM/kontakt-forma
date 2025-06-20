const express = require('express') ;
const path = require('path') ;
const app =express () ;

app.use(express.urlencoded({ extended: true })) ;

app.use(express.static('public')) ;

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html')) ;})

app.post('/submit-form', (req, res) => {
    const { name, email, message} = req.body;
    console.log('Te dhenat e pranuara:', name, email, message);
    res.redirect('/thank-you.html');
});

const PORT =3000;
app.listen(PORT,() => {
    console.log(`Serveri u startua ne ${PORT}`);
})