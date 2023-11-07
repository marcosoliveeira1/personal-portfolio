import { Experiences } from './experiences';
export const Resume = () => {
    return (
        <>
            <div id="resume" className="w-full bg-white box-border">
                <div className="container p-2 md:p-10">
                    <div className="mt-20 text-center lg:mx-10 2xl:mx-36">
                        <h3 className="tracking-[-2px] text-5xl font-bold"><span className="">Experiências</span></h3>

                        
                        <Experiences />
                    </div>
                </div>
            </div></>
    )
}