import { ExperienceType } from "@/lib/types";
import { formatDateToExperiences } from "@/lib/utils";

export const Experience = ({ experience, isOdd }: { experience: ExperienceType, isOdd: boolean }) => {
    const { period, company, activities, stack, position } = experience;
    const initialDate = formatDateToExperiences(period.begin);
    const finalDate = formatDateToExperiences(period.end);

    return (
        <div className={`mb-8 last:mb-0 flex justify-between items-center w-full ${isOdd ? 'text-right' : 'flex-row-reverse text-left'}`}>
            <div className={`order-1 w-6/12 px-3 lg:px-8 py-4 text-gray-700`}>
                <h4 className="mb-3 font-bold text-lg md:text-2xl">{company}</h4>
                <p className="mb-3 text-base text-sky-700">
                    {position}
                    <span className="text-sm text-gray-700 pl-1">
                        ({initialDate} - {finalDate})
                    </span>
                </p>
                <p className="mb-3 text-base text-sky-700"></p>
                <p className="text-sm md:text-base leading-snug  text-opacity-100">
                    {activities}
                </p>
                <p className="italic text-xs md:text-sm">
                    Tecnologias utilizadas: {stack.join(", ")}
                </p>
            </div>
        </div>

    )
}

