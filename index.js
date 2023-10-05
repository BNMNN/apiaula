require("dotenv").config();
const db = require("./db")
const express = require("express");

const app = express();

app.use(express.json());

app.delete("/clientes/:id", (request, response) => {
    const id = parseInt(request.params.id);
    db.deleteCliente(id);
    response.sendStatus(204);
})

app.patch("/clientes/:id", (request, response) => {
    const id = parseInt(request.params.id);
    const clientes = request.body;
    db.updateCliente(id, clientes);
    response.sendStatus(200);
})

app.post("/clientes", (request, response) => {
    const clientes = request.body;
    db.insertCliente(clientes);
    response.sendStatus(201);
})

app.get("/clientes/:id", (request, response) => {
    const id = parseInt(request.params.id);
    response.json(db.selectCliente(id));
})

app.get("/clientes", async (request, response) => {
    const results = await db.selectCliente();
    response.json(results);
})

app.get("/", (request, response) => {
    response.json(
        {message:"WORKS"}
    )
})

app.listen(process.env.PORT, () => {
    console.log("APP funcionando");
});