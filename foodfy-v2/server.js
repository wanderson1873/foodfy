const express = require('express')
const server = express()

const nunjucks = require('nunjucks')

// Configuration style
server.use(express.static('public'))

// Configutarion tamplate
server.set("view engine", "html")

nunjucks.configure("views", {
    express: server
})

// Root route
server.get("/", function(req, res){
    res.render("index")
})

// Route
server.get("/sobre", function(req, res){
    res.render("sobre")
})

// Route
server.get("/receitas", function(req, res){
    res.render("receitas")
})

// Starting server
server.listen(5000, function(){
    console.log("server is runnig!")
})