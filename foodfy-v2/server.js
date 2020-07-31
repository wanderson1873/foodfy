const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

// Get data from BD 'data.js'
const receitas = require("./data")

// Configuration style
server.use(express.static('public'))

// Configutarion tamplate
server.set("view engine", "njk")

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
    return res.render("receitas", { itens: receitas })
})

// Route bot foud 404.
server.use(function(req, res) {
    res.status(404).render("not-found")
  })

// Starting server
server.listen(5000, function(){
    console.log("server is runnig!")
})