import {
    EnvelopeIcon,
    PhoneIcon,
    UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Form from "./Form";

export default function Contact() {
    return (
        <div id="contact" className="relative py-16 sm:py-24">
            <div className="absolute inset-0">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-neutral" />
            </div>
            <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
                <div className="bg-accent px-6 py-16 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                    <div className="mx-auto max-w-lg">
                        <h2 className="text-3xl font-semibold font-header tracking-tight sm:text-4xl">
                            Запланируйте Консультацию
                        </h2>
                        <p className="mt-8 text-lg/6 text-gray-600">
                            Свяжитесь с нами для индивидуальной помощи и
                            профессиональной консультации.
                        </p>
                        <dl className="mt-8 text-base text-gray-600">
                            <div>
                                <dt className="sr-only">Postal address</dt>
                                <dd>
                                    <p>742 Evergreen Terrace</p>
                                    <p>Springfield, OR 12345</p>
                                </dd>
                            </div>
                            <div className="mt-6">
                                <dt className="sr-only">Phone number</dt>
                                <dd className="flex">
                                    <PhoneIcon
                                        aria-hidden="true"
                                        className="size-6 shrink-0 text-gray-600"
                                    />
                                    <span className="ml-3">
                                        +7 (343) 300-94-35
                                    </span>
                                </dd>
                            </div>
                            <div className="mt-3">
                                <dt className="sr-only">Email</dt>
                                <dd className="flex">
                                    <EnvelopeIcon
                                        aria-hidden="true"
                                        className="size-6 shrink-0 text-gray-600"
                                    />
                                    <span className="ml-3">
                                        support@example.com
                                    </span>
                                </dd>
                            </div>
                        </dl>
                        <p className="mt-6 text-base text-gray-600">
                            Больше информации?{" "}
                            <Link
                                href="https://prodoctorov.ru/ekaterinburg/vrach/825564-prudnikova/"
                                target="_blank"
                                className="font-medium text-charcoal underline inline-flex items-center gap-x-1"
                            >
                                Профиль в продокторов
                                <UserCircleIcon
                                    aria-hidden="true"
                                    className="size-5"
                                />
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="bg-white/60 px-6 py-16 lg:col-span-3 lg:px-8 lg:py-24 xl:pl-12">
                    <div className="mx-auto max-w-lg lg:max-w-none">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    );
}
