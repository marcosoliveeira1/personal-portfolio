import { about } from "../../lib/data";
import Image from 'next/image'
import marcosImage from '../../public/marcos.jpg';
import { description, subtitleBold, title } from "@/app/fonts";

export function Hero() {

    const { yearsDeveloping, locatedAt } = about;

    return (
        <>
            <div id="home" className="h-auto w-full relative pt-[130px] lg:pt-[200px] pb-10 lg:pb-40 overflow-hidden bg-gray-50 text-zinc-900 text-sm">
                <div className="container min-[500px]:grid min-[500px]:grid-cols-2 gap-4 px-10">
                    <div className={`${title.className} uppercase flex flex-col tracking-wide-subtitle gap-6`}>
                        <span>Olá, <span className="text-sky-700">meu nome é</span></span>
                        <span className="text-5xl md:text-6xl lg:text-8xl text-sky-700 text-shadow-title" >Marcos <span className="text-white">Oliveira</span></span>
                        <span>e sou um Desenvolvedor <span className={`${subtitleBold.className} capitalize text-3xl`}>Full Stack</span></span>
                    </div>
                    <div className="relative max-w-xl h-auto md:row-span-2">
                        <div className="md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:w-full p-4 w-[200px] mx-auto">

                            <Image
                                src={marcosImage}
                                alt="Marcos foto"
                                className="bg-center rounded-full border-solid border-4 border-black w-full max-w-[500px] animate-morph"
                            />
                        </div>
                    </div>

                    <div className={`${description.className} text-lg tracking-widest text-gray-600 pb-4 md:pb-10 col-span-2 md:col-span-1 text-opacity-60`}>
                        <p>Com sede em {locatedAt}, eu estou pronto para colaborar e criar projetos incríveis ao seu lado.
                            Vamos transformar suas ideias em realidade!</p>
                    </div>
                </div>

            </div >
        </>
    );
}