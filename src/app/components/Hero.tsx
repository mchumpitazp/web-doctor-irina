import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import ButtonScrollable from "./ButtonScrollable";

export default function Hero() {
    return (
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-accent/10 pt-16">
            <div
                aria-hidden="true"
                className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] shadow-xl shadow-accent/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
            />
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                    <h1 className="max-w-2xl text-balance text-5xl font-semibold font-header tracking-tight text-primary sm:text-7xl lg:col-span-2 xl:col-auto">
                        Доктор <br /> Ирина Николаевна
                    </h1>
                    <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                        <p className="text-pretty text-lg font-medium sm:text-xl/9">
                            Современная медицина для лечения головной и лицевой
                            боли. Я уделяю особое внимание каждому пациенту,
                            использую передовые методы диагностики и лечения.
                            Регулярно обучаюсь у ведущих специалистов и читаю
                            профессиональную литературу, чтобы быть уверенной в
                            качестве предоставляемой помощи.
                        </p>
                        <ButtonScrollable
                            targetId="contact"
                            className="mt-10 inline-flex items-center gap-x-2 rounded-md bg-primary px-6 py-3 text-lg tracking-wide font-semibold font-header text-white shadow-sm transition-colors duration-300 hover:bg-accent hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                        >
                            Запланируйте Консультацию
                            <ChatBubbleOvalLeftEllipsisIcon
                                aria-hidden="true"
                                className="-mr-0.5 size-5"
                            />
                        </ButtonScrollable>
                    </div>
                    <Image
                        alt="Hero Image"
                        src="/images/hero-image.png"
                        width={0}
                        height={0}
                        sizes="(max-width: 640px) 90vw, (max-width: 1200px) 50vw, 33vw"
                        className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                        priority
                    />
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-neutral sm:h-32" />
        </div>
    );
}
