import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
    {
        question: "What's the best thing about Switzerland?",
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What's the best thing about Switzerland?",
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What's the best thing about Switzerland?",
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
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
                                            <PlusSmallIcon
                                                aria-hidden="true"
                                                className="size-6 group-data-[open]:hidden"
                                            />
                                            <MinusSmallIcon
                                                aria-hidden="true"
                                                className="size-6 group-[&:not([data-open])]:hidden"
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
