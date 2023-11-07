import { experiences } from "@/lib/data"
import { Experience } from "./experiency"
import { ExperienceType } from "@/lib/types"

export const Experiences = () => {
    return (

        <section>
            <div className="mx-auto flex flex-col items-start">
                <div className="relative wrap overflow-hidden pt-6 h-full">
                    <div className="border-[2px] border-sky-900 absolute h-full left-1/2 transform -translate-x-1/2 opacity-50"
                    ></div>
                    {
                        experiences.map((experience: ExperienceType, index) => {
                            return <Experience experience={experience} index={index} />
                        })
                    }
                </div>

            </div>
        </section >
    )
}

