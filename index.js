import express from "express";
import router from "./routes/index.js";
const app = express();

//Definir puerto

// app.get("/", (req, res) =>{ //Req lo que enviamos : - res  lo que express nos responde
//     // res.send("hola mundo")
//     // res.json({
//     //     id: 2,
//     //     hola: "mundo",
//     // })
//     res.render(); //Se utiliza para mostrar una vista
// });
//Definir puerto
const port = process.env.PORT || 4000;

//Habilitar pug 
app.set("view engine", "pug");

//Obtener el año actual
app.use( (req, res, next) =>{

    const year = new Date();

    res.locals.currentYear = year.getFullYear();

    next();
});

//Definir la carpeta publica
app.use(express.static("public"));


app.use("/", router);


app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port}`)
})