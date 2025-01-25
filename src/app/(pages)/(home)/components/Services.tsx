import Image from "next/image";
import ButtonScrollableExternal from "../../../components/ButtonScrollableExternal";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Services() {
    return (
        <div id="services" className="py-16 sm:py-24">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="mx-auto max-w-xl text-balance text-center text-4xl text-primary font-header font-semibold tracking-tight sm:text-5xl">
                    Услуги для вашего благополучия
                </h2>
                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white/60 max-lg:rounded-t-[2rem] lg:rounded-l-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-l-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <p className="mt-2 text-xl font-medium tracking-tight max-lg:text-center">
                                    Онлайн-консультация
                                </p>
                                <p className="mt-2">
                                    Подходит для тех , кто уже был на очном
                                    приеме врача и хочет получить второе мнение
                                    по плану лечения и обследований.
                                </p>
                                <p className="mt-2">
                                    Популярные запросы, на которые я отвечаю:
                                </p>
                                <ul className="mt-2 list-disc ps-4 ">
                                    <li>
                                        Неврология: разбор жалоб, назначений,
                                        обследований
                                    </li>
                                    <li>
                                        Второе мнение по плану лечения и
                                        обследований
                                    </li>
                                    <li>
                                        Головная боль, боль в лице,
                                        головокружение
                                    </li>
                                    <li>Тревога, депрессия, нарушение сна</li>
                                </ul>
                                <ButtonScrollableExternal
                                    targetPage="/services"
                                    targetId="service-consultation"
                                    scrollOffset={50}
                                    className="mt-4 group font-semibold text-primary text-base flex items-center"
                                >
                                    Читать дальше{" "}
                                    <ArrowRightIcon className="ms-1 size-4 stroke-2 transition duration-300 group-hover:translate-x-1" />
                                </ButtonScrollableExternal>
                            </div>
                            <div className="relative min-h-[17rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                                    <Image
                                        width={0}
                                        height={0}
                                        sizes="(max-width: 640px) 90vw, 33vw"
                                        className="size-full object-cover object-top"
                                        src="/images/service-consultation.webp"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-l-[2rem]"></div>
                    </div>
                    <div className="relative max-lg:row-start-2">
                        <div className="absolute inset-px rounded-lg bg-white/60"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-xl font-medium tracking-tight max-lg:text-center">
                                    Метод “Сухих игл”
                                </p>
                                <p className="mt-2 max-w-lg text-base/6 text-gray-600 max-lg:text-center">
                                    Снятие мышечного напряжения и устранение
                                    триггерных точек.
                                </p>
                                <ButtonScrollableExternal
                                    targetPage="/services"
                                    targetId="service-needles"
                                    scrollOffset={50}
                                    className="mt-4 group font-semibold text-primary text-base flex items-center"
                                >
                                    Читать дальше{" "}
                                    <ArrowRightIcon className="ms-1 size-4 stroke-2 transition duration-300 group-hover:translate-x-1" />
                                </ButtonScrollableExternal>
                            </div>
                            <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                                <Image
                                    width={0}
                                    height={0}
                                    sizes="(max-width: 640px) 90vw, 33vw"
                                    className="w-full max-lg:max-w-xs rounded-xl"
                                    src="/images/service-needles.webp"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                    </div>
                    <div className="relative max-lg:row-start-4 lg:col-start-2 lg:row-start-2">
                        <div className="absolute inset-px rounded-lg bg-white/60 max-lg:rounded-b-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-xl font-medium tracking-tight max-lg:text-center">
                                    Полезная информация
                                </p>
                                <p className="mt-2 max-w-lg text-base/6 text-gray-600 max-lg:text-center">
                                    Планы для предотвращения повторных проблем с
                                    болью.
                                </p>
                                <Link
                                    href="/info"
                                    className="mt-4 group font-semibold text-primary text-base flex items-center"
                                >
                                    Читать дальше{" "}
                                    <ArrowRightIcon className="ms-1 size-4 stroke-2 transition duration-300 group-hover:translate-x-1" />
                                </Link>
                            </div>
                            <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                                <Image
                                    width={0}
                                    height={0}
                                    sizes="(max-width: 640px) 90vw, 33vw"
                                    className="w-full max-lg:max-w-xs rounded-xl"
                                    src="/images/service-patient.webp"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem]"></div>
                    </div>
                    <div className="relative max-lg:row-start-3 lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white/60 lg:rounded-r-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-r-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <p className="mt-2 text-xl font-medium tracking-tight max-lg:text-center">
                                    Кинезиотейпирование
                                </p>
                                <p className="mt-2 max-w-lg text-base/6 text-gray-600 max-lg:text-center">
                                    Поддержка мышц, ускорение восстановления и
                                    снижение боли.
                                </p>
                                <ButtonScrollableExternal
                                    targetPage="/services"
                                    targetId="service-tapes"
                                    scrollOffset={50}
                                    className="mt-4 group font-semibold text-primary text-base flex items-center"
                                >
                                    Читать дальше{" "}
                                    <ArrowRightIcon className="ms-1 size-4 stroke-2 transition duration-300 group-hover:translate-x-1" />
                                </ButtonScrollableExternal>
                            </div>
                            <div className="relative min-h-[30rem] w-full grow">
                                <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl shadow-2xl">
                                    <Image
                                        width={0}
                                        height={0}
                                        sizes="(max-width: 640px) 90vw, 33vw"
                                        className="size-full object-cover object-right-top -scale-x-100"
                                        src="/images/service-tapes.webp"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-r-[2rem]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
