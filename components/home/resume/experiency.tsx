import { ExperienceType } from "@/lib/types";
import { formatDateToExperiences } from "@/lib/utils";

export const Experience = ({ experience, index }: { experience: ExperienceType, index: number }) => {
    const initialDate = formatDateToExperiences(experience.period.begin);
    const finalDate = formatDateToExperiences(experience.period.end);
    const isOdd = index % 2 === 0;
    return (

        <div key={index} className={`mb-8 last:mb-0 flex justify-between items-center w-full ${isOdd ? '' : 'flex-row-reverse'}`}>
            <div className={`order-1 w-6/12 px-3 lg:px-8 py-4 ${isOdd ? 'text-right' : 'text-left'}`}>
                <h4 className="mb-3 font-bold text-lg md:text-2xl">{experience.company}</h4>
                <p className="mb-3 text-base text-sky-700">{initialDate} - {finalDate}</p>
                <p className="text-sm md:text-base leading-snug text-gray-700 text-opacity-100">
                    {experience.activities}
                </p>
                <p className="italic text-xs md:text-sm">
                    Tecnologias utilizadas: {experience.stack.join(", ")}
                </p>
            </div>
        </div>

    )
}

