interface IconLinkProps {
    url: string | undefined | null;
    icon: React.ElementType;
    size?: number;
}

export function IconLink({ url, icon: IconComponent, size = 15 }: IconLinkProps) {
    return url ? (
        <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-all delay-100 cursor-pointer">
            <IconComponent size={size} />
        </a>
    ) : null;
}
