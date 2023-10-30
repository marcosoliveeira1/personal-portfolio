"use server";

import ContactFormEmail from "@/email/contact-form-email";
import { isValidStringLength } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail = async (form: FormData) => {

    const senderName = form.get("name");
    const senderEmail = form.get("email");
    const message = form.get("message");

    if (!isValidStringLength(senderName, 100)) {
        return {
            error: "Digite o seu nome, por favor!",
        }
    };

    if (!isValidStringLength(senderEmail, 500)) {
        return {
            error: "Digite um email válido, por favor!",
        }
    };
    if (!isValidStringLength(message, 5000)) {
        return {
            error: "Digite uma mensagem válida, por favor!",
        };
    }

    let data;

    const emailTo = process.env.SEND_EMAIL_TO as string;

    try {
        data = await resend.emails.send({
            from: "Formulário de contato <onboarding@resend.dev>",
            to: emailTo+',',
            subject: "Contato via portfolio",
            reply_to: senderEmail,
            react: React.createElement(ContactFormEmail, {
                message: message,
                senderEmail: senderEmail,
            }),
        });
        if (data?.id === undefined) {
            throw data;
        }

    } catch (error) {
        console.error({ error });
        return { error: "Erro ao enviar email, tente novamente mais tarde!" }

    }
    return { data };
}