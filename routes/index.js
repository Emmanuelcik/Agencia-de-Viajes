import express from "express";

const router = express.Router();

router.get("/", (req, res) =>{ //Req lo que enviamos : - res  lo que express nos responde
  
    res.render(); //Se utiliza para mostrar una vista
});

router.get("/nosotros", (req, res) =>{
    res.send("nosotros");
});

router.get("/contacto", (req, res) =>{
    res.send("contacto");
});

export default router;