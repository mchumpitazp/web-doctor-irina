"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

interface Certificate {
    pdf: string;
    src: string;
    alt: string;
}

export default function Certificates() {
    const certificates: Certificate[] = [
        {
            pdf: "/certificates-pdf/certificate-1.pdf",
            src: "/certificates-images/certificate-1.webp",
            alt: "Certificate 1",
        },
        {
            pdf: "/certificates-pdf/certificate-2.pdf",
            src: "/certificates-images/certificate-2.webp",
            alt: "Certificate 2",
        },
        {
            pdf: "/certificates-pdf/certificate-3.pdf",
            src: "/certificates-images/certificate-3.webp",
            alt: "Certificate 3",
        },
        {
            pdf: "/certificates-pdf/certificate-4.pdf",
            src: "/certificates-images/certificate-4.webp",
            alt: "Certificate 4",
        },
        {
            pdf: "/certificates-pdf/certificate-4.pdf",
            src: "/certificates-images/certificate-5.webp",
            alt: "Certificate 5",
        },
        {
            pdf: "/certificates-pdf/certificate-6.pdf",
            src: "/certificates-images/certificate-6.webp",
            alt: "Certificate 6",
        },
        {
            pdf: "/certificates-pdf/certificate-7.pdf",
            src: "/certificates-images/certificate-7.webp",
            alt: "Certificate 7",
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="mx-auto max-w-7xl px-12 sm:px-16 pb-16 sm:pb-24">
            <Slider {...settings}>
                {certificates.map((cert: Certificate, index: number) => (
                    <div key={index} className="px-2">
                        <Link href={cert.pdf} target="_blank" prefetch={false}>
                            <figure className="relative h-64 w-full">
                                <Image
                                    priority
                                    fill
                                    src={cert.src}
                                    alt={cert.alt}
                                    sizes="(max-width: 480px) 90vw, (max-width: 768px) 45vw, (max-width: 1200px) 30vw, 15vw"
                                    className="object-contain p-4"
                                />
                            </figure>
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
