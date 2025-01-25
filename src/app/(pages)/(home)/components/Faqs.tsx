import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";

const faqs = [
    {
        question: "Какие заболевания вы лечите?",
        answer: "Я специализируюсь на лечении головной и лицевой боли, включая мигрень, кластерные головные боли и другие формы орофациальной боли.",
    },
    {
        question: "Как проходит консультация?",
        answer: "На консультации я провожу тщательный сбор анамнеза, осмотр и, при необходимости, назначаю дополнительные обследования. Мы также обсуждаем возможные планы лечения.",
    },
    {
        question: "Вы используете доказательную медицину в своей практике?",
        answer: "Да, я изучала курс доказательной медицины для врачей и регулярно применяю современные и проверенные методы лечения.",
    },
    {
        question: "На каких языках вы принимаете пациентов?",
        answer: "Я принимаю пациентов на русском и английском языках, так как регулярно читаю профессиональную литературу на этих языках.",
    },
    {
        question: "Как часто нужно посещать специалиста при хронической боли?",
        answer: "Частота посещений зависит от вашего состояния и рекомендаций по лечению. Обычно мы планируем регулярные визиты для контроля симптомов и эффективности терапии.",
    },
];

export default function Faqs() {
    return (
        <div className="py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                    <h2 className="text-center text-4xl font-semibold font-header tracking-tight text-primary sm:text-5xl">
                        Часто задаваемые вопросы
                    </h2>
                    <dl className="mt-16 space-y-6 divide-y divide-gray-900/10">
                        {faqs.map((faq, index) => (
                            <Disclosure key={index} as="div" className="pt-6">
                                <dt>
                                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                                        <span className="text-base/7 font-semibold">
                                            {faq.question}
                                        </span>
                                        <span className="ml-6 flex h-7 items-center">
                                            <PlusIcon
                                                aria-hidden="true"
                                                className="size-5 transform transition-transform duration-300 group-data-[open]:rotate-45"
                                            />
                                        </span>
                                    </DisclosureButton>
                                </dt>
                                <DisclosurePanel as="dd" className="mt-2 pr-12">
                                    <p className="text-base/7 text-gray-600">
                                        {faq.answer}
                                    </p>
                                </DisclosurePanel>
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
