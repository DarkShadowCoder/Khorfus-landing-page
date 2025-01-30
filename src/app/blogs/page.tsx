import BlogsItems from "@/components/Blogs/BlogsItems";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Header/Navbar";

export default function Blogs() {
    return(
        <main className="bg-neutral-900 text-gray-400">
            <Navbar />
            <div className='pt-14 md:mt-10 sm:pt-20 lg:pt-[130px]  '>
                <div className='px-8 pb-16 xl:container'>
                    <div className='w-screen-xl flex flex-wrap justify-center gap-1'>
                        <BlogsItems author="Angos Gabain" title="L'hydrogene, la prochaine source d'energie" date="02, Septembre 2024" image="/assets/about-us1.webp"/>
                        <BlogsItems author="Yvan Landry" title="L'Intelligence Artificielle plus proche de nous" date="02, Septembre 2024" image="/assets/about-us1.webp"/>
                        <BlogsItems author="Ketou Jalil" title="Le fondements de l'Intelligence Artificielle" date="02, Septembre 2024" image="/assets/about-us1.webp"/>     
                        <BlogsItems author="Angos Gabain" title="L'hydrogene, la prochaine source d'energie" date="02, Septembre 2024" image="/assets/about-us1.webp"/>
                        <BlogsItems author="Yvan Landry" title="L'Intelligence Artificielle plus proche de nous" date="02, Septembre 2024" image="/assets/about-us1.webp"/>
                        <BlogsItems author="Ketou Jalil" title="Le fondements de l'Intelligence Artificielle" date="02, Septembre 2024" image="/assets/about-us1.webp"/>        
                    </div>
                    <div className='w-full h-[1px] bg-gray-600'></div>
                </div>
            </div>
            <Footer />
        </main>
    )
}