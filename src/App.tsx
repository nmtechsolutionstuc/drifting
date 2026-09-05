import Collection from "./components/Collection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import SizeGuide from "./components/SizeGuide";
import SocialProof from "./components/SocialProof";
import TrustBar from "./components/TrustBar";
import ValueProps from "./components/ValueProps";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-acid focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:font-bold focus:uppercase focus:text-ink"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <TrustBar />
        <Collection />
        <ValueProps />
        <SocialProof />
        <SizeGuide />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
