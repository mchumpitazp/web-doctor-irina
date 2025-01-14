import { CheckIcon } from "@heroicons/react/20/solid";

const features = [
    "Лечения боли в лице(ДВНЧС) и бруксизма ботулотоксином типа А",
    "Лечения хронической мигрени ботулотоксином типа А",
    "Применяю метод кинезиотейпирования",
    "Применяю метод введения паравертебральных внутримышечных инъекций - блокада(паравертебральная, грушевидной мышцы)",
];

export default function Example() {
    return (
        <div id="about" className="py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <div className="col-span-2">
                        <h2 className="text-pretty font-header text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
                            Обо мне
                        </h2>
                        <p className="mt-6 text-lg/9 text-pretty">
                            Невролог, цефалголог - специалист по головной боли.
                            Много обучаюсь, учусь у лучших, регулярно повышаю
                            квалификацию. Изучала курс доказательной медицины
                            для врачей, постоянно читаю профессиональную
                            литературу на русском и английском языке.
                        </p>
                    </div>
                    <div className="col-span-3">
                        <h3 className="mt-2 font-header font-semibold text-xl text-primary mb-6">
                            Владение методами:
                        </h3>
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 text-lg/7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
                            {features.map((feature) => (
                                <div key={feature} className="relative pl-9">
                                    <dt className="font-medium">
                                        <CheckIcon
                                            aria-hidden="true"
                                            className="absolute left-0 top-1 size-6 text-accent"
                                        />
                                        {feature}
                                    </dt>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}
