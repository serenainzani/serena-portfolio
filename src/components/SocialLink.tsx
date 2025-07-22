type SocialLinkProps = {
    href: string;
    src: string;
    alt: string;
};
export default function SocialLink({ href, src, alt }: SocialLinkProps) {
    return (
        <a href={href} target="_blank" className="flex justify-center m-4">
            <img src={src} alt={alt} className="w-12 h-12" />
        </a>
    );
}
