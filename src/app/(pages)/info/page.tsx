import { Metadata } from "next";
import Info from "@/app/(pages)/info/components/Info";

export const metadata: Metadata = {
    title: "Полезная Информация",
    description:
        "Услуги для вашего благополучия. Индивидуальный подход к каждому пациенту с использованием передовых методов диагностики и лечения для эффективного решения проблем со здоровьем.",
    alternates: {
        canonical: "https://doctor-prudnikova.ru/info",
    },
};

export default function ServicesPage() {
    return (
        <>
            <Info />
        </>
    );
}
