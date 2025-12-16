import Image from "next/image";

interface SocialIconProps {
  href: string;
  label: string;
  variant: "github" | "mastodon" | "twitter" | "linkedin";
  rel?: string;
}

const iconMap: Record<SocialIconProps["variant"], { type: "svg" | "image"; path: string }> = {
  github: { type: "svg", path: "/img/icons/github.svg" },
  mastodon: { type: "image", path: "/img/mastodon.svg" },
  twitter: { type: "svg", path: "/img/icons/twitter.svg" },
  linkedin: { type: "svg", path: "/img/icons/linkedin.svg" },
};

export function SocialIcon({ href, label, variant, rel }: SocialIconProps) {
  const icon = iconMap[variant];

  if (!icon) {
    return null;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel={rel ?? "noopener noreferrer"}
      aria-label={label}
      className="text-[#8ea2c6] transition-colors hover:text-[#6dffbd]"
    >
      {icon.type === "image" ? (
        <Image src={icon.path} alt={label} width={24} height={24} className="h-6 w-6" />
      ) : (
        <Image src={icon.path} alt={label} width={24} height={24} className="h-6 w-6" />
      )}
    </a>
  );
}
