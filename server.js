const express = require('express');
const path = require('path')
var app = express();
var PORT =  process.env.PORT || 5000;

const midle =(req,res,next) => {
    const d = new Date();
    let hour = d.getHours();
    let day = d.getDay();
    if (((hour>8) && (hour<19)) && ((day>1) && (day<6))) 
    {next();}
    else 
    {console.log('u dont have to work now come back from monday to friday between 9h and 18h');}
};
app.all('*', midle);
app.use(express.static('project'));
app.get('/',(req,res)=> {
    res.sendFile(path.join(__dirname, 'project/home.html'));
});
app.listen(PORT , err => err ? console.log(err) : console.log('server is running on : port '+PORT));