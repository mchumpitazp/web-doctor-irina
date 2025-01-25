import { Metadata } from "next";
import Hero from "@/app/(pages)/services/components/Hero";
import Services from "@/app/(pages)/services/components/Services";

export const metadata: Metadata = {
    title: "Услуги",
    description:
        "Услуги для вашего благополучия. Индивидуальный подход к каждому пациенту с использованием передовых методов диагностики и лечения для эффективного решения проблем со здоровьем.",
    alternates: {
        canonical: "https://doctor-prudnikova.ru/services",
    },
};

export default function ServicesPage() {
    return (
        <>
            <Hero />
            <Services />
        </>
    );
}
