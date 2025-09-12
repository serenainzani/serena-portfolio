type SocialLinkProps = {
    href: string;
    src: string;
    alt: string;
};
export default function SocialLink({ href, src, alt }: SocialLinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            className="flex justify-center m-4 transform transition-transform duration-200 hover:scale-110"
        >
            <img src={src} alt={alt} className="w-12 h-12" />
        </a>
    );
}
