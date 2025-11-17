
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const social_links = [
  {
    link: "http://facebook.com",
    target: "_blank",
    icon: <Facebook className="h-5 w-5" />,
    name: "Facebook",
  },
  {
    link: "http://twitter.com",
    target: "_blank",
    icon: <Twitter className="h-5 w-5" />,
    name: "Twitter",
  },
    {
    link: "https://www.instagram.com",
    target: "_blank",
    icon: <Instagram className="h-5 w-5" />,
    name: "Instagram",
    },
    {
    link: "https://www.linkedin.com",
    target: "_blank",
    icon: <Linkedin className="h-5 w-5" />,
    name: "Linkedin",
    },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3">
      {social_links.map((l, i) => (
        <Link
          key={i}
          href={l.link}
          target={l.target ? l.target : ""}
          className="text-white/60 hover:text-primary transition-colors duration-300"
          aria-label={l.name}
        >
          {l.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
