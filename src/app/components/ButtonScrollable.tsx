"use client";
import { MouseEventHandler } from "react";

interface ButtonScrollableProps {
    targetId: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function ButtonScrollable({
    targetId,
    children,
    className,
    onClick,
}: ButtonScrollableProps) {
    const handleScroll: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        } else {
            console.warn(
                `ButtonScrollable: Element with ID '${targetId}' not found.`
            );
        }

        if (onClick) onClick();
    };

    return (
        <button
            className={className}
            onClick={handleScroll}
            aria-label="Button Scrollable"
        >
            {children}
        </button>
    );
}
