import Image from "next/image";
import logoImage from '../../public/logo.svg';

export const Footer = () => {
    return (
        <div className="w-full bg-sky-300">
            <div className="container">
                <div className="p-5 flex items-center justify-between">

                    <Image className="max-w-[60px] max-h-[60px]" src={logoImage} alt="logo" width={60} />

                    <p className="text-white text-sm font-medium">&copy; 2023 by Marcos Oliveira</p>
                </div>
            </div>

        </div>
    )
};
