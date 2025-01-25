"use client";

import { JSX, SVGProps, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import ButtonScrollableExternal from "./ButtonScrollableExternal";

const navigation = {
    main: [
        { name: "Обо мне", id: "about" },
        { name: "Услуги", id: "services" },
        { name: "Отзывы", id: "testimonials-cta" },
        { name: "Инфо", page: "info" },
    ],
    social: [
        {
            name: "Whatsapp",
            href: "https://wa.me/79935042280",
            icon: (
                props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
            ) => (
                <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 308 308"
                    {...props}
                >
                    <g id="XMLID_468_">
                        <path
                            id="XMLID_469_"
                            d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
		c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
		c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
		c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
		c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
		c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
		c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
		c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
		c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
		C233.168,179.508,230.845,178.393,227.904,176.981z"
                        />
                        <path
                            id="XMLID_470_"
                            d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
		c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
		c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
		 M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
		l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
		c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
		C276.546,215.678,222.799,268.994,156.734,268.994z"
                        />
                    </g>
                </svg>
            ),
        },
        {
            name: "VK",
            href: "https://vk.com/progolovnuyubol",
            icon: (
                props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
            ) => (
                <svg
                    fill="currentColor"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 97.75 97.75"
                    {...props}
                >
                    <g>
                        <path
                            d="M48.875,0C21.883,0,0,21.882,0,48.875S21.883,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.867,0,48.875,0z
         M73.667,54.161c2.278,2.225,4.688,4.319,6.733,6.774c0.906,1.086,1.76,2.209,2.41,3.472c0.928,1.801,0.09,3.776-1.522,3.883
        l-10.013-0.002c-2.586,0.214-4.644-0.829-6.379-2.597c-1.385-1.409-2.67-2.914-4.004-4.371c-0.545-0.598-1.119-1.161-1.803-1.604
        c-1.365-0.888-2.551-0.616-3.333,0.81c-0.797,1.451-0.979,3.059-1.055,4.674c-0.109,2.361-0.821,2.978-3.19,3.089
        c-5.062,0.237-9.865-0.531-14.329-3.083c-3.938-2.251-6.986-5.428-9.642-9.025c-5.172-7.012-9.133-14.708-12.692-22.625
        c-0.801-1.783-0.215-2.737,1.752-2.774c3.268-0.063,6.536-0.055,9.804-0.003c1.33,0.021,2.21,0.782,2.721,2.037
        c1.766,4.345,3.931,8.479,6.644,12.313c0.723,1.021,1.461,2.039,2.512,2.76c1.16,0.796,2.044,0.533,2.591-0.762
        c0.35-0.823,0.501-1.703,0.577-2.585c0.26-3.021,0.291-6.041-0.159-9.05c-0.28-1.883-1.339-3.099-3.216-3.455
        c-0.956-0.181-0.816-0.535-0.351-1.081c0.807-0.944,1.563-1.528,3.074-1.528l11.313-0.002c1.783,0.35,2.183,1.15,2.425,2.946
        l0.01,12.572c-0.021,0.695,0.349,2.755,1.597,3.21c1,0.33,1.66-0.472,2.258-1.105c2.713-2.879,4.646-6.277,6.377-9.794
        c0.764-1.551,1.423-3.156,2.063-4.764c0.476-1.189,1.216-1.774,2.558-1.754l10.894,0.013c0.321,0,0.647,0.003,0.965,0.058
        c1.836,0.314,2.339,1.104,1.771,2.895c-0.894,2.814-2.631,5.158-4.329,7.508c-1.82,2.516-3.761,4.944-5.563,7.471
        C71.48,50.992,71.611,52.155,73.667,54.161z"
                        />
                    </g>
                </svg>
            ),
        },
        {
            name: "Prodoctorov",
            href: "https://prodoctorov.ru/ekaterinburg/vrach/825564-prudnikova/",
            icon: (
                props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
            ) => (
                <svg
                    viewBox="0 0 180 180"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                >
                    <g clipPath="url(#clip0_28425_104458)">
                        <path d="M21 79.3263C21 68.2485 29.3942 58.9731 40.417 57.8708L64.125 55.5V107.25L40.417 104.879C29.3942 103.777 21 94.5015 21 83.4237V79.3263Z" />
                        <path d="M141.75 134.627C141.75 140.729 134.54 143.967 129.979 139.913L126.394 136.726C110.956 123.003 92.6185 112.943 72.75 107.295L72.75 55.4444C92.618 49.8051 110.955 39.7493 126.391 26.0283L129.979 22.8393C134.54 18.785 141.75 22.0229 141.75 28.1254L141.75 134.627Z" />
                        <path d="M38.25 115.875H57.7077C61.5166 115.875 64.8745 118.373 65.969 122.022L75.397 153.448C76.2271 156.215 74.1551 159 71.2664 159H57.6048C53.7959 159 50.438 156.502 49.3435 152.853L38.25 115.875Z" />
                        <path d="M150.375 64.125C155.138 64.125 159 67.9865 159 72.75V90C159 94.7635 155.138 98.625 150.375 98.625V64.125Z" />
                    </g>
                    <defs>
                        <clipPath id="clip0_28425_104458">
                            <rect
                                width="138"
                                height="138"
                                fill="white"
                                transform="translate(21 21)"
                            />
                        </clipPath>
                    </defs>
                </svg>
            ),
        },
    ],
};

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav
                aria-label="Global"
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
            >
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <Image
                            width={48}
                            height={48}
                            alt="Logo"
                            src="/apple-touch-icon.png"
                            className="rounded-full w-auto"
                            priority
                        />
                    </Link>

                    <div className="flex items-center justify-center gap-x-8 ms-8">
                        {navigation.social.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                className={`${
                                    item.name === "Prodoctorov" ? "hidden" : ""
                                } lg:block text-gray-600 hover:text-gray-800`}
                            >
                                <span className="sr-only">{item.name}</span>
                                <item.icon
                                    aria-hidden="true"
                                    className="size-6"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.main.map((item) => (
                        <ButtonScrollableExternal
                            key={item.name}
                            targetPage={item.page ?? "/"}
                            targetId={item.id ?? ""}
                            className="text-base/6 font-semibold font-header transition-colors duration-300 hover:text-primary"
                        >
                            {item.name}
                        </ButtonScrollableExternal>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <ButtonScrollableExternal
                        targetPage="/"
                        targetId="contact"
                        className="px-6 py-3 rounded-xl text-neutral text-base/6 tracking-wide font-semibold font-header transition-colors duration-300 bg-primary hover:bg-accent hover:text-charcoal"
                    >
                        Консультация
                    </ButtonScrollableExternal>
                </div>
            </nav>
            <Dialog
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
                className="lg:hidden"
            >
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-neutral px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <Image
                                width={48}
                                height={48}
                                alt="Logo"
                                src="/apple-touch-icon.png"
                                className="rounded-full w-auto"
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.main.map((item) => (
                                    <ButtonScrollableExternal
                                        key={item.name}
                                        targetPage={item.page ?? "/"}
                                        targetId={item.id ?? ""}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-lg/8 tracking-wide font-semibold font-header hover:bg-accent/20"
                                    >
                                        {item.name}
                                    </ButtonScrollableExternal>
                                ))}
                            </div>
                            <div className="py-10">
                                <ButtonScrollableExternal
                                    targetPage="/"
                                    targetId="contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="px-5 py-3 rounded-xl text-neutral text-lg/8 tracking-wide font-semibold font-header transition-colors duration-300 bg-primary hover:bg-accent hover:text-charcoal"
                                >
                                    Консультация
                                </ButtonScrollableExternal>
                                <div className="flex items-center justify-start gap-x-8 mt-8">
                                    {navigation.social.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            target="_blank"
                                            className="text-gray-600 hover:text-gray-800"
                                        >
                                            <span className="sr-only">
                                                {item.name}
                                            </span>
                                            <item.icon
                                                aria-hidden="true"
                                                className="size-7"
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
