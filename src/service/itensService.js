const database = require("../database/index");
//função de ler
async function readItens() {
    const itens = await database("itens").select("*");
    if(itens.length ==0){
    throw new Error("sem item");

    }
    return itens;
}
//função de criar
async function createIten(nome, data) {
    const itens ={
        nome: nome,
        validade: data
    }
    await database("itens").insert(itens);
}
//funçao de update
async function updateIten(id,nome, data) {
    const busca = await database("itens").select("*").where({id:id}).first();

    if(!busca){
        throw new Error("desconhecido");
    }



    const itens_novo ={
        nome: nome,
        validade: data
    }
    await database("itens").update(itens_novo).where({id:id})
    return "Atualizado!"
}

async function deleteIten(id){
    const usuario = await database("itens").select("*").where({id:id}).first();

    if(!usuario){
        throw new Error("desconhecido");
    }
    await database("itens").delete().where({id:id})

    return "Deletado!"
    
}


module.exports ={
    readItens,
    createIten,
    updateIten,
    deleteIten
}