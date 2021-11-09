import express from "express";
import { paginaInicio, paginaNosotros, paginaViajes, testimoniales } from "../controllers/pageController.js";


const router = express.Router();

router.get("/", paginaInicio );

router.get("/nosotros", paginaNosotros);

router.get("/viajes", paginaViajes);

router.get("/testimoniales", testimoniales)



export default router;