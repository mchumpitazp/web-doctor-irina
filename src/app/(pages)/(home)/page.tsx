import { Metadata } from "next";
import Hero from "@/app/(pages)/(home)/components/Hero";
import Services from "@/app/(pages)/(home)/components/Services";
import Faqs from "@/app/(pages)/(home)/components/Faqs";
import About from "@/app/(pages)/(home)/components/About";
import Contact from "@/app/(pages)/(home)/components/Contact";
import Certificates from "@/app/(pages)/(home)/components/Certificates";
import TestimonialsCTA from "@/app/(pages)/(home)/components/TestimonialsCTA";

export const metadata: Metadata = {
    title: "Ирина Николаевна",
    description:
        "Невролог, цефалголог - специалист по головной боли. Много обучаюсь, учусь у лучших, регулярно повышаю квалификацию. Изучала курс доказательной медицины для врачей, постоянно читаю профессиональную литературу на русском и английском языке.",
    alternates: {
        canonical: "https://doctor-prudnikova.ru",
    },
};

export default function Home() {
    return (
        <main className="font-body font-light bg-neutral text-charcoal">
            <Hero />
            <About />
            <Certificates />
            <Services />
            <Contact />
            <Faqs />
            <TestimonialsCTA />
        </main>
    );
}
