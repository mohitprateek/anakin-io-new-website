import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Playground from "@/components/Playground";
import SitesWeScape from "@/components/SitesWeScape";
import CodeDemo from "@/components/CodeDemo";
import WhyDifferent from "@/components/WhyDifferent";
import Features from "@/components/Features";
import Integrations from "@/components/Integrations";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import DiscordBubble from "@/components/DiscordBubble";
import StickyBar from "@/components/StickyBar";
import ExitIntent from "@/components/ExitIntent";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Playground />
        <SitesWeScape />
        <CodeDemo />
        <WhyDifferent />
        <Features />
        <Integrations />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <DiscordBubble />
      <StickyBar />
      <ExitIntent />
    </>
  );
}
