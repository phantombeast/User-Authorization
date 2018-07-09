const express=require('express')

const path=require('path');

const server=express();


let todos=[]

server.use('/', express.static(path.join((__dirname,'static'))))


server.get('/todos', (req, res) => {
    res.send(todos)
})

server.get('/addtodo', (req, res) => {
    todos.push(req.query.list)
    res.send('success')
})

server.listen(3333, () => {
    console.log('Server started on http://localhost:3333')});