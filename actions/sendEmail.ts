"use server";

import React from 'react';
import { Resend } from "resend";
import { validateString } from "@/lib/utils";
import { getErrorMessage } from "@/lib/utils";
import { ContactFormEmail } from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    // ======= Server-size Validation =======
    if (!validateString(senderEmail, 50)) {
        return {
            error: "Invalid sender email."
        }
    }

    if (!validateString(message, 2000)) {
        return {
            error: "Invalid message."
        }
    }
    // ======================================

    let data;

    try {
        await resend.emails.send({
            from: "Portfolio Contact Form <onboarding@resend.dev>",
            to: 'jerrybsusanto@gmail.com',
            subject: 'Message from Porfolio Contact Form',
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, {message: message as string, senderEmail: senderEmail as string})
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        }
    }

    return {
        data
    }
}