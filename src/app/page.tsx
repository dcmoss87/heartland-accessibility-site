import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Why } from "@/components/Why";
import { Contact } from "@/components/Contact";
import { HorizonRule } from "@/components/HorizonRule";

export default function Home() {
  return (
    <main id="main" className="flex-1">
      <Hero />
      <HorizonRule fullWidth />
      <About />
      <HorizonRule fullWidth />
      <Services />
      <HorizonRule fullWidth />
      <Why />
      <HorizonRule fullWidth />
      <Contact />
    </main>
  );
}
