import express from "express";
import contactsRouter from "./routes/contacts.router.js";
import mongoose from 'mongoose';
import config from './config/config.js';
import cors from 'cors'; 


const app = express();
app.use(cors(
    { 
    origin: 'http://localhost:5173'
 }
)); // Cambia el puerto según el frontend

app.use(express.json()); // Middleware para parsear el cuerpo de las peticiones JSON

app.use(express.urlencoded({ extended: true })); // Middleware para parsear el cuerpo de las peticiones URL-encoded
app.use(express.static('public')); // Middleware para servir archivos estáticos desde la carpeta 'public'

const PORT = config.app.PORT;

mongoose.connect(config.mongo.URL);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
 
app.use('/api/contacts', contactsRouter);
