import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res ) =>{
    //Validar 
    // console.log(req.body);
   
    const {nombre, correo, mensaje } = req.body;

    const errores = [];

    if(nombre.trim() === ""){
        errores.push({mensaje: "El nombre esta vacio"});
    }
    if(correo.trim() === ""){
        errores.push({mensaje: "El correo esta vacio"});
    }
    if(mensaje.trim() === ""){
        errores.push({mensaje: "El mensaje esta vacio"});
    }

    //Consultar testimoniales existentes
    
    const testimoniales = await Testimonial.findAll();

    if(errores.length > 0 ){
        res.render("testimoniales", {
            pagina: "Testimoniales",
            testimoniales,
            errores,
            nombre,
            correo,
            mensaje
        });
        res.redirect("/testimoniales");
    }else {

    
        //Almacenar en la base de datos

        try {
            await Testimonial.create({
                nombre, 
                correo, 
                mensaje
            });
            res.redirect("/testimoniales");
        } catch (error) {
            console.log(error)
        }
    }

};

export {
    guardarTestimonial,
}