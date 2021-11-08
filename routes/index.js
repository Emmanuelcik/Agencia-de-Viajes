import express from "express";

const router = express.Router();

router.get("/", (req, res) =>{ //Req lo que enviamos : - res  lo que express nos responde
  
    res.render("inicio"); //Se utiliza para mostrar una vista
});

router.get("/nosotros", (req, res) =>{

    const viajes = "Viaje a alemania"

    res.render("nosotros", {
        viajes,
    });
});



export default router;