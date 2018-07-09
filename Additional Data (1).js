const express=require('express');
const path=require('path');


const server=express();


server.get('/',(req,res)=>{

    res.send('hello shooting star')
})

server.get('/yo',(req,res)=>{

    res.send('yayyyyyy')
});


server.get('/greet/:person/night', (req, res) => {
    res.send(`Goodnight ${req.params.person}!`)
});


server.use('/publi', express.static(path.join(__dirname,'public')))


server.listen(3232,()=>{
    console.log('server started at http://localhost:3232');
})