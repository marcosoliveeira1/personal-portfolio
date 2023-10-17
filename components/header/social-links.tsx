import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";

import { IconLink } from "../icon-link/icon-link";

interface SocialIconsProps {
    social: {
        github: string | undefined | null;
        facebook: string | undefined | null;
        linkedin: string | undefined | null;
        youtube: string | undefined | null;
        twitter: string | undefined | null;
    },
    classes?: string;
}

export function SocialIcons({ social, classes = "flex gap-4" }: SocialIconsProps,) {
    return (
        <div className={classes}>
            <IconLink url={social?.github} icon={FaGithub} />
            <IconLink url={social?.facebook} icon={FaFacebookF} />
            <IconLink url={social?.linkedin} icon={FaLinkedinIn} />
            <IconLink url={social?.youtube} icon={FaYoutube} />
            <IconLink url={social?.twitter} icon={FaTwitter} />
        </div>
    );
}