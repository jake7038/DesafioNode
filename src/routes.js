const Router = require("express").Router;
const router = Router();
const itensController = require("./controller/itensController")

router.get("/itens",itensController.readItens)
router.post("/itens",itensController.createItens)
router.patch("/user/:id", itensController.updateIten)
router.delete("/user/:id", itensController.deleteIten)

router.get("/", (req,res)=>{
    res.send("funciona!");
    
})

module.exports = router;