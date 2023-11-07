import { experiences } from "@/lib/data"
import { Experience } from "./experience"
import { ExperienceType } from "@/lib/types"

export const Experiences = () => {
    return (

        <section>
            <div className="mx-auto flex flex-col items-start">
                <ul className="relative wrap overflow-hidden pt-6 h-full">
                    <li key={0} data-test={0} className="border-[2px] border-sky-900 absolute h-full left-1/2 transform -translate-x-1/2 opacity-50"
                    ></li>
                    {
                        experiences.map((experience: ExperienceType, index) => {
                            return <li key={index} data-test={index}><Experience experience={experience} isOdd={index % 2 === 0} /></li>;
                        })
                    }

                </ul>

            </div>
        </section >
    )
}

