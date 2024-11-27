import { socialLinks } from "@/helper/fake";
import { getSocialIcon } from "@/helper/functions";
import Link from "next/link";
import React from "react";

const SocialIcons = () => {
  return (
    <div className="flex flex-wrap gap-1">
      {socialLinks.map((social, i) => {
        return (
          <Link
            key={i}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="text-2xl text-gray-300 hover:text-primary transition-colors p-1.5"
          >
            {getSocialIcon(social.name)}
          </Link>
        );
      })}
    </div>
  );
};

export default SocialIcons;
