import express from "express";
import { 
    paginaInicio, paginaNosotros, paginaViajes, testimoniales, 
    paginaDetalleViaje 
    } from "../controllers/pageController.js";
import { guardarTestimonial } from "../controllers/testimonialController.js";


const router = express.Router();

router.get("/", paginaInicio );

router.get("/nosotros", paginaNosotros);

router.get("/viajes", paginaViajes);
router.get("/viajes/:viaje", paginaDetalleViaje);

router.get("/testimoniales", testimoniales)
router.post("/testimoniales", guardarTestimonial)



export default router;