import { type } from "os";
import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type ExperienceType = {
    period: {
        begin: string;
        end: string;
    };
    company: string;
    position: string;
    activities: string;
    stack: string[];
}