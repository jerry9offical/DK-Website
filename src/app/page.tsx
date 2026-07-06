import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { ExperienceStrip } from "@/components/sections/experience-strip";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Packages } from "@/components/sections/packages";
import { WhyDorcas } from "@/components/sections/why-dorcas";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ExperienceStrip />
        <About />
        <Services />
        {/* Gallery/showreel section hidden until real video content is ready — see src/components/sections/gallery.tsx */}
        <Packages />
        <WhyDorcas />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
