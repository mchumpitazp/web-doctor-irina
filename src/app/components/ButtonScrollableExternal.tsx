"use client";

import { useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";

interface ButtonScrollableExternalProps {
    targetPage: string;
    targetId: string;
    className: string;
    children: React.ReactNode;
    scrollOffset?: number;
    onClick?: () => void;
}

export default function ButtonScrollableExternal({
    targetPage,
    targetId,
    className,
    children,
    scrollOffset = 0,
    onClick,
}: ButtonScrollableExternalProps) {
    const router = useRouter();
    const pathname = usePathname();

    const scrollToElement = useCallback(() => {
        const element = document.getElementById(targetId);
        if (element) {
            const elementPosition =
                element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - scrollOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            //element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            console.warn(
                `ButtonScrollableExternal: Element with ID '${targetId}' not found.`
            );
        }
    }, [scrollOffset, targetId]);

    const handleClick = () => {
        if (onClick) onClick();

        if (pathname !== targetPage) {
            router.push(targetPage);
            setTimeout(() => scrollToElement(), 500);
        } else {
            scrollToElement();
        }
    };

    return (
        <button className={className} onClick={handleClick}>
            {children}
        </button>
    );
}
