import Image from "next/image";

export default function ServicesServices() {
    return (
        <div className="overflow-hidden py-24 sm:py-32">
            <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-y-16 gap-x-8 lg:gap-y-32 lg:grid-cols-2 lg:items-start">
                    {/* Онлайн-консультация */}
                    <div
                        id="service-consultation"
                        className="order-1 px-6 lg:px-0 pt-8 lg:pt-0"
                    >
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                            <h2 className="text-pretty text-3xl font-header font-semibold tracking-tight text-primary sm:text-5xl">
                                Онлайн-консультация
                            </h2>
                            <div className="mt-8 text-lg/9 text-charcoal">
                                <p className="indent-8">
                                    Для повторных консультаций пациентов и
                                    первичных пациентов с головной болью. С
                                    другими диагнозами общение впервые в формате
                                    онлайн неэффективно.
                                </p>
                                <p className="indent-8 mt-2">
                                    Также подходит для тех, кто уже был на очном
                                    приеме врача и хочет получить второе мнение
                                    по плану лечения и обследований.
                                </p>
                                <p className="indent-8 mt-2">
                                    Популярные запросы, на которые я отвечаю:
                                </p>
                                <ul className="mt-2 list-disc ps-8">
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
                                    <li>Деменция</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="order-2">
                        <div className="mx-auto max-w-xs sm:max-w-md lg:max-w-md">
                            <Image
                                alt="Product screenshot"
                                src="/images/service-consultation.webp"
                                width={0}
                                height={0}
                                sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="w-full rounded-2xl"
                            />
                        </div>
                    </div>

                    {/* Кинезиотейпирование */}
                    <div
                        id="service-tapes"
                        className="order-3 lg:order-4 px-6 lg:px-0 pt-8 lg:pt-0"
                    >
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                            <h2 className="text-pretty text-3xl font-header font-semibold tracking-tight text-primary sm:text-5xl">
                                Кинезиотейпирование
                            </h2>
                            <div className="mt-8 text-lg/9 text-charcoal">
                                <p className="indent-8">
                                    Один из эффективных способов медицинской
                                    реабилитации, который заключается в фиксации
                                    поврежденных суставов, связок и мышц.
                                </p>
                                <p className="indent-8 mt-2">
                                    Аппликации тейпами (специальными клейкими
                                    лентами) рекомендованы при восстановлении
                                    после операций, уменьшении боли при ушибах,
                                    растяжениях, невралгии, а также для лечения
                                    остеохондроза, артроза и сколиоза.
                                </p>
                                <p className="indent-8 mt-2">
                                    Процедура абсолютно безболезненна и занимает
                                    не более 30 минут.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="order-4 lg:order-3">
                        <div className="mx-auto max-w-xs sm:max-w-md lg:max-w-sm">
                            <Image
                                alt="Product screenshot"
                                src="/images/service-tapes.webp"
                                width={0}
                                height={0}
                                sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="w-full rounded-2xl"
                            />
                        </div>
                    </div>

                    {/* Метод “Сухих игл” */}
                    <div
                        id="service-needles"
                        className="order-5 px-6 lg:px-0 pt-8 lg:pt-0"
                    >
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                            <h2 className="text-pretty text-3xl font-header font-semibold tracking-tight text-primary sm:text-5xl">
                                Метод “Сухих игл”
                            </h2>
                            <div className="mt-8 text-lg/9 text-charcoal">
                                <p className="indent-8">
                                    Или по-другому «Dry Needling» — это
                                    инновационный подход в физиотерапии и
                                    мануальной терапии, который помогает снизить
                                    болевой синдром, путем введения тонкой
                                    акупунктурной иглы в болезненную область
                                    мышцы. Никакие лекарства НЕ вводятся,
                                    поэтому называется методом «Сухих игл».
                                </p>
                                <p className="indent-8 mt-2">
                                    Это НЕ иглоукалывание! Метод «Сухих игл»
                                    базируется на западной доказательной
                                    медицине, клинических исследованиях по
                                    анатомии, нейроанатомии, физиологии и
                                    отличается от акупунктуры.
                                </p>
                                <p className="indent-8 mt-2">
                                    Особенность метода в том, что врач находит
                                    болезненные точки в мышцах, откуда
                                    начинается боль. Процедура основана на
                                    принципе стимуляции тканей и расслабления
                                    мышц с помощью точечных воздействий на
                                    триггерные точки.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="order-6">
                        <div className="mx-auto max-w-xs sm:max-w-md lg:max-w-md">
                            <Image
                                alt="Product screenshot"
                                src="/images/service-needles-full.webp"
                                width={0}
                                height={0}
                                sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="w-full rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
