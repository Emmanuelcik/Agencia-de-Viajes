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
app.use("/", router);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port}`)
})