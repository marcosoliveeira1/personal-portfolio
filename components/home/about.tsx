import { title } from "@/app/fonts";
import { about } from "../../lib/data";

export function About() {
    const { yearsDeveloping, description } = about;

    return (

        <div id="about" className="bg-sky-700 px-0 pt-20 lg:pb-[120px] text-[rgba(255,255,255,.7)] min-h-[800px]">
            <div className="container h-auto max-w-[1200px] my-0 grid lg:grid-cols-2 gap-10 lg:gap-20 p-10">
                <div className={`bg-white py-10 p-3 text-sky-700 rounded flex flex-col justify-center items-center ${title.className} max-w-[700px] mx-auto`}>
                    <h3 className=" tracking-[-3px] font-extrabold text-9xl md:text-[300px] leading-[1]">{yearsDeveloping}+</h3>
                    <span className="text-2xl lg:text-5xl">anos de experiência</span>
                </div>
                <div>
                    <div className=" w-full mb-[30px]">
                        <h3 className="tracking-[-2px] text-[56px] font-bold"><span className="">Sobre mim</span></h3>
                    </div>
                    <div className="text w-full mb-[50px]">
                        <p className=" font-light leading-[32px] text-xl">{description}</p>
                    </div>
                    {/* <div className="short w-full flex items-center">
                        <div className="">
                            <a href="assets/img/cv/1.jpg" download>Download CV <img className="svg" src="assets/img/svg/paper.svg" alt="" /></a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>

    )
}