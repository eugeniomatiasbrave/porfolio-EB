import { config } from "dotenv";

// Cargar variables de entorno desde un archivo .env
config();

export default {
    app: {
        PORT: process.env.PORT || 8080,
    },
    mongo: {
        URL: process.env.MONGO_URL
    },
    mailing: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },

};