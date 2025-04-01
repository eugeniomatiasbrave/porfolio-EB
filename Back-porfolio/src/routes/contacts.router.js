import { Router } from "express";
import MailingService from "../services/mailingService.js";

const router = Router();

router.post('/', async (req, res) => {
    const { name, email, menssage } = req.body;

    const newContact = {
        name,
        email,
        menssage
    };

    console.log("Llego el body al BACK:", newContact);

    // Configurar el correo a enviar
    const mailRequest = {
        from: "Porfolio Contact Form",
        to: "eugeniomatiasbrave@gmail.com",
        subject: `Nuevo mensaje de contacto de ${name}`,
        html: `
            <h1>Nuevo mensaje de contacto</h1>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensaje:</strong> ${menssage}</p>
        `,
    };

    try {
        const mailingService = new MailingService();
        const result = await mailingService.sendMail(mailRequest);
        console.log("Correo enviado:", result);

        res.status(200).json({ message: "Contact created and email sent", contact: newContact });
    } catch (error) {
        console.error("Error al enviar el correo:", error);
        res.status(500).json({ message: "Error al enviar el correo", error });
    }
});

export default router;