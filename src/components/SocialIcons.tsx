"use client";
import Image from "next/image";

const links = {
    github: "https://github.com/tejeirodelrio",
    linkedin: "https://www.linkedin.com/in/manueltejeirodelrio/",
    trailhead: "https://www.salesforce.com/trailblazer/tejeirodelrio",
    credly: "https://www.credly.com/users/manuel-tejeiro-del-rio/badges#credly",
};

export default function SocialIcons() {
    const iconClass = "w-6 h-6 hover:scale-110 transition-transform";

    return (
        <div className="flex gap-5 items-center">
            <a href={links.trailhead} target="_blank" rel="noopener noreferrer">
                <Image
                    src="/icons/linkedin.svg"
                    alt="Trailhead"
                    width={24}
                    height={24}
                    className={iconClass}
                />
            </a>
            <a href={links.trailhead} target="_blank" rel="noopener noreferrer">
                <Image
                    src="/icons/trailhead.webp"
                    alt="Trailhead"
                    width={24}
                    height={24}
                    className={iconClass}
                />
            </a>
            <a href={links.credly} target="_blank" rel="noopener noreferrer">
                <Image
                    src="/icons/credly.svg"
                    alt="Credly"
                    width={24}
                    height={24}
                    className={iconClass}
                />
            </a>
            <a href={links.trailhead} target="_blank" rel="noopener noreferrer">
                <Image
                    src="/icons/github.svg"
                    alt="Trailhead"
                    width={24}
                    height={24}
                    className={iconClass}
                />
            </a>
        </div>
    );
}