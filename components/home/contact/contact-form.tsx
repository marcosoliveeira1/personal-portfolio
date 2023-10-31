"use client";

import { subtitleBold } from "@/app/fonts";
import { sendEmail } from "@/actions/send-email";
import { SubmitBtn } from "./submit-btn";
import toast from "react-hot-toast";


export const ContactForm = () => {
    const submitForm = async (formData: FormData) => {
        const { error } = await sendEmail(formData);

        if (error) {
            console.log({ error });

            toast.error(error);
            return;
        }

        toast.success("Email enviado!");
    }


    return (
        
        <div className="grid md:grid-cols-2 md:gap-20">
            <div className={`text-2xl lg:text-5xl max-w-[460px] mx-auto ${subtitleBold.className}`}>
                <p className="border-0 border-b-4 border-[rgba(255,255,255,.9)] w-1/2 mb-5 md:mb-10"></p>
                <p>Interessado em trabalhar juntos?</p>
            </div>
            <div className="px-5 md:px-10 ">
                <form className="bg-transparent"
                    action={submitForm}
                >
                    <div className="grid grid-cols-1 gap-6">
                        <label className="block">
                            <input type="text" name="name" className="mt-0 pb-5 block w-full px-3 border-0 border-b-2 border-gray-500 focus:ring-0 focus:border-white bg-transparent placeholder:text-slate-400" placeholder="Seu nome" />
                        </label>
                        <label className="block">
                            <input type="email" name="email" className="mt-0 pb-5 block w-full px-3 border-0 border-b-2 border-gray-500 focus:ring-0 focus:border-white bg-transparent placeholder:text-slate-400" placeholder="Seu email" />
                        </label>
                        <label className="block">
                            <textarea name="message" className="mt-0 pb-5 block w-full px-3 border-0 border-b-2 border-gray-500 focus:ring-0 focus:border-white bg-transparent placeholder:text-slate-400" rows={2} placeholder="Descreva o motivo do seu contato aqui"></textarea>
                        </label>
                        <SubmitBtn />
                    </div>
                </form>
            </div>
        </div>
    )
}