const express = require("express")
const exphbs = require("express-handlebars")
const mysql = require("mysql")

const app = express()

// definido handlebars como template engine
app.engine("hadlebars", exphbs.engine())
app.set("view engine", " handlebars")

// pasta de arquivos estaticos
app.use(express.static("public"))

// trabalhar com dados no formato json
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
// rotas
app.get('/', (requisicao, resposta) => {
    resposta.render("home")
})

// conexão com mysql
const conn = mysql.createConnectionConfig({
    host:"localhost",
    user: "root",
    passaword: "root",
    database: "nodemysql",
    port: 3307
})

conn.connect((error) => {
    if (error) {
        console.log(error)
        return
    }
    console.log("Conectado ao MySQL")
    app.listen(3000, () => {
        console.log(" Servidor rodando na porta 3000!")
    })
})