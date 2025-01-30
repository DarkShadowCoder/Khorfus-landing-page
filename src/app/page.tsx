import AboutUs from "@/components/AboutUs/AboutUs";
import Blogs from "@/components/Blogs/Blogs";
import CallAboutUs from "@/components/CallAboutUs/CallAboutUs";
import Features from "@/components/Features/Features";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Header/Hero";
import Navbar from "@/components/Header/Navbar";
import Portfolio from "@/components/Portfolio/Portfolio";
import Tesmonials from "@/components/Testiminials/Tesmonials";

export default function Home(){
    return (
        <main className="flex justify-center bg-neutral-900">
            <header className=" text-gray-400">
                <Navbar />
                <Hero />
                <Features />
                <AboutUs />
                <Portfolio />
                <Tesmonials />
                <Blogs />
                <CallAboutUs />
                <Footer />
            </header>
            
        </main>
    )
}