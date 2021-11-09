import { Viaje } from "../models/Viaje.js";

const paginaInicio = (req, res) =>{ //Req lo que enviamos : - res  lo que express nos responde
    
    res.render("inicio", {
        pagina: "Inicio"
    }); //Se utiliza para mostrar una vista
};


const paginaNosotros = (req, res) =>{

    res.render("nosotros", {
        pagina: "Nosotros"
    });
};

const paginaViajes = async (req, res) =>{
    //consultar bases de datos
    const viajes = await Viaje.findAll();
    // console.log(viajes);

    res.render("viajes", {
        pagina: "Próximos Viajes",
        viajes
    });
};

const testimoniales = (req, res) =>{

    res.render("testimoniales", {
        pagina: "Testimoniales"
    });
};

//Muestra un viaje por su slug
const paginaDetalleViaje = async function(req, res) {

    const {viaje} = req.params;

    try {
        const resultado = await Viaje.findOne( { where: {slug : viaje} } );
        res.render("viaje", {
            pagina: "Información Viaje",
            resultado
        })
    } catch (error) {
        
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    testimoniales,
    paginaDetalleViaje,
}
