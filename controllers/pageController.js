import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimoniales.js";

const paginaInicio = async (req, res) =>{ //Req lo que enviamos : - res  lo que express nos responde
    
    //consultar 3 viajes del modelo Viaje
    try {
        const viajes = await Viaje.findAll( {limit: 3} );
        res.render("inicio", {
            pagina: "Inicio",
            clase: "home",
            viajes
        }); //Se utiliza para mostrar una vista
    } catch (error) {
        console.log(error)
    }
    
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

const testimoniales = async (req, res) =>{

    try {
        const testimoniales = await Testimonial.findAll();
        res.render("testimoniales", {
            pagina: "Testimoniales",
            testimoniales,
        });
    } catch (error) {
        console.log(error);
    }
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
