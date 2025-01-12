import {
    EnvelopeIcon,
    PhoneIcon,
    UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

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
                                        (343) 300-94-35
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
                        <form
                            action="#"
                            method="POST"
                            className="grid grid-cols-1 gap-y-6"
                        >
                            <div>
                                <label htmlFor="name" className="sr-only">
                                    Имя
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Имя"
                                    autoComplete="name"
                                    className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm outline-accent focus:border-primary focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Почта
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Почта"
                                    autoComplete="email"
                                    className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm outline-accent focus:border-primary focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="sr-only">
                                    Телефон
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    placeholder="Телефон"
                                    autoComplete="tel"
                                    className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm outline-accent focus:border-primary focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">
                                    Сообщение
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    placeholder="Сообщение"
                                    className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm outline-accent focus:border-primary focus:ring-primary"
                                    defaultValue={""}
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="mt-10 inline-flex items-center gap-x-2 rounded-md bg-accent px-6 py-3 text-base font-semibold text-charcoal shadow-sm transition-colors duration-300 hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                                >
                                    Отправить
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
