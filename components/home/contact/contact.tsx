import { ContactAbout } from "./contact-about"
import { ContactForm } from "./contact-form"

export const Contact = () => (
    <div className="bg-sky-950 py-36 font-light">
        <div className="container flex flex-col gap-10 text-[rgba(255,255,255,.9)]">
            <ContactForm />
            {/* <ContactAbout /> */}
        </div>
    </div>
)