import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import DownloadButton from "./DownloadButton";

export default function Info() {
    return (
        <div className="px-6 py-32 lg:px-8">
            <div className="mx-auto max-w-3xl text-base/7 text-charcoal">
                <p className="text-base/7 font-semibold text-accent">
                    Ваше здоровье превыше всего
                </p>
                <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
                    Полная Информация
                </h1>
                <p className="mt-6 text-xl/8">
                    Добро пожаловать на страницу, посвященную полезной и нужной
                    информации. Для удобства в ней представлены несколько
                    разделов.
                </p>
                <div className="mt-10 max-w-2xl leading-8">
                    <h2 className="mt-16 text-pretty text-3xl font-semibold tracking-tight">
                        Тревога и Депрессия
                    </h2>
                    <div className="mt-6">
                        <p className="mt-4 indent-8">
                            Если вы чувствуете себя подавленным, испытываете
                            постоянную усталость или потерю интереса к жизни,
                            важно обратить внимание на свое психическое
                            здоровье.
                        </p>
                        <p className="mt-4 indent-8">
                            Я предлагаю вам пройти несколько онлайн-тестов,
                            которые помогут вам оценить ваше состояние и понять,
                            нуждаетесь ли вы в дополнительной поддержке.
                        </p>
                        <ul role="list" className="mt-4 max-w-xl space-y-4">
                            <li className="flex gap-x-3">
                                <CheckCircleIcon
                                    aria-hidden="true"
                                    className="mt-1 size-5 flex-none text-accent"
                                />
                                <span>
                                    Тест на тревогу и депрессию (шкала HADS) –{" "}
                                    <Link
                                        href="https://psytests.org/depr/hads-run.html"
                                        target="_blank"
                                        className="font-semibold underline"
                                    >
                                        Пройти тест
                                    </Link>
                                </span>
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircleIcon
                                    aria-hidden="true"
                                    className="mt-1 size-5 flex-none text-accent"
                                />
                                <span>
                                    Опросник по состоянию здоровья (шкала PHQ-9)
                                    –{" "}
                                    <Link
                                        href="https://psytests.org/depr/phq9-run.html"
                                        target="_blank"
                                        className="font-semibold underline"
                                    >
                                        Пройти опрос
                                    </Link>
                                </span>
                            </li>
                        </ul>
                        <p className="mt-4 indent-8">
                            Прохождение тестов на депрессию — это первый шаг к
                            пониманию своего состояния.
                        </p>
                        <p className="mt-4 indent-8">
                            Если вы получили высокие результаты или чувствуете,
                            что нуждаетесь в помощи, обязательно обращайтесь ко
                            мне. Я помогу Вам значительно улучшить качество
                            жизни.
                        </p>
                    </div>
                </div>
                <div className="mt-16 max-w-2xl leading-8">
                    <h2 className="text-pretty text-3xl font-semibold tracking-tight">
                        Вестибулярная Реабилитация
                    </h2>
                    <div className="mt-6">
                        <p className="mt-4 indent-8">
                            Вестибулярная гимнастика — это комплекс упражнений,
                            направленных на улучшение работы вестибулярного
                            аппарата, который отвечает за равновесие и
                            координацию движений. Она особенно полезна для
                            людей, страдающих от проблем с вестибулярной
                            системой, таких как головокружение, нарушения
                            равновесия или вестибулярные расстройства.
                        </p>
                        <p className="mt-4 indent-8">
                            Перед началом занятий обязательно
                            проконсультируйтесь с врачом или специалистом в
                            области реабилитации, особенно если у вас есть
                            хронические заболевания или проблемы с вестибулярной
                            системой. Регулярные тренировки помогут вам достичь
                            лучших результатов и улучшить качество жизни.
                        </p>
                        <p className="mt-4 mb-6 indent-8">
                            Готовы начать? Скачайте комплекс упражнений и
                            сделайте первый шаг к улучшению вашего здоровья и
                            самочувствия!
                        </p>
                        <DownloadButton />
                    </div>
                </div>
                <div className="mt-16 max-w-2xl leading-8">
                    <h2 className="text-pretty text-3xl font-semibold tracking-tight">
                        Головная Боль
                    </h2>
                    <div className="mt-6">
                        <p className="mt-4 indent-8">
                            Если вы хотите лучше понять свою головную боль и
                            научиться с ней справляться, вы на правильном пути!
                            Дневник по головной боли — это полезный инструмент,
                            который помогает людям лучше понимать и управлять
                            своими головными болями.
                        </p>
                        <p className="mt-4 indent-8">
                            Рекомендую использовать дневник головной боли:{" "}
                            <Link
                                href="https://t.me/Migrebot"
                                target="_blank"
                                className="font-medium underline"
                            >
                                https://t.me/Migrebot
                            </Link>
                        </p>
                        <p className="mt-4 indent-8">
                            А если вы уже имеете поставленный диагноз «Мигрень»,
                            представляю вам{" "}
                            <span className="font-semibold">
                                пошаговую инструкцию по купированию головной
                                боли
                            </span>
                            . Эта инструкция станет вашим надежным помощником в
                            борьбе с головной болью и включает в себя
                            медикаментозные и немедикаментозные методы
                            облегчения боли, а также что не надо принимать во
                            время приступа.
                        </p>
                        <p className="mt-4 indent-8">
                            Для приобретения инструкции пишите на WhatsApp с
                            текстом «Хочу инструкцию».
                        </p>
                        <p className="mt-4 text-xl font-semibold text-primary">
                            Стоимость 1 000 руб
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
