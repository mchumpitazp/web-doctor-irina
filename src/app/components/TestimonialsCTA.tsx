import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function TestimonialsCTA() {
    return (
        <div id="testimonials-cta">
            <div className="mx-auto max-w-7xl py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="relative isolate overflow-hidden bg-accent px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                    <h2 className="text-balance text-4xl/tight font-semibold tracking-tight sm:text-5xl">
                        Узнайте больше о враче на
                    </h2>
                    <div className="flex justify-center mt-3">
                        <Image
                            className="hidden sm:block"
                            src="/images/prodoctorov-logo.svg"
                            alt="ПроДокторов"
                            width={315}
                            height={48}
                        />
                        <Image
                            className="block sm:hidden"
                            src="/images/prodoctorov-logo.svg"
                            alt="ПроДокторов"
                            width={252}
                            height={32}
                        />
                    </div>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="https://prodoctorov.ru/ekaterinburg/vrach/825564-prudnikova/"
                            target="_blank"
                            className="flex items-center gap-x-2 rounded-md bg-charcoal px-8 py-4 text-lg font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Все отзывы и подробности
                            <ArrowTopRightOnSquareIcon className="size-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
