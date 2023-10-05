const mysql = require("mysql2/promise");

const connection = mysql.createPool(process.env.CONNECTION_STRING);

async function selectClientes(){
    const results = await connection.query("SELECT * FROM clientes;");
    return results[0];
}

function selectCliente(id){
    return clientes.find(c => c.id === id);
}

function insertCliente(cliente){
    clientes.push(cliente);
}

function updateCliente(id, upCliente){
    const cliente = clientes.find(c => c.id === id);
    if(!cliente) return;
    cliente.nome = upCliente.nome;
    cliente.idade = upCliente.idade;
}

function deleteCliente(id){
    const index = clientes.findIndex(c => c.id === id);
    clientes.splice(index, 1);
}

module.exports = {
    selectClientes,
    selectCliente,
    insertCliente,
    updateCliente,
    deleteCliente
}