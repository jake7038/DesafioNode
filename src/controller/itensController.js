const itensService = require("../service/itensService")

async function readItens(req,res){
    try{
        const itens = await itensService.readItens();
        res.json({registros: itens})
    }catch(e){
        res.json({erro: e.message})
    }
}

async function createItens(req,res){
    try{
        const {nome, validade} = req.body;
        const message = await itensService.createIten(nome, validade);
        res.json({message: message})
    }catch(e){
        res.json({erro: e.message})
    }
    
}

async function updateIten(req,res){
    try{
        const id = req.params.id;
        const {nome, validade} = req.body;
        const message = await itensService.updateIten(id,nome, validade);
        res.json({message: message})
    }catch(e){
        res.json({erro: e.message})
    }
    
}

async function deleteIten(req,res){
    try{
        const id = req.params.id;
        const message = await itensService.deleteIten(id);
        res.json({message: message})
    }catch(e){
        res.json({erro: e.message})
    }
    
}



module.exports = {
    readItens,
    createItens,
    updateIten,
    deleteIten
}
