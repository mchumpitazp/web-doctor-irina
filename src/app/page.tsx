import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Faqs from "./components/Faqs";
import About from "./components/About";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";
import TestimonialsCTA from "./components/TestimonialsCTA";

export default function Home() {
    return (
        <main className="font-body font-light bg-neutral text-charcoal">
            <Header />
            <Hero />
            <About />
            <Certificates />
            <Services />
            <Contact />
            <Faqs />
            <TestimonialsCTA />
            <Footer />
        </main>
    );
}
