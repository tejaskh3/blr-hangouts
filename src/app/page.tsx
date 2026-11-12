import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Timeline from "@/components/Timeline";
import FamousGuests from "@/components/FamousGuests";
import NextHangout from "@/components/NextHangout";
import Maintainers from "@/components/Maintainers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip">
        <Hero />
        <About />
        <Gallery />
        <Timeline />
        <FamousGuests />
        <NextHangout />
        <Maintainers />
      </main>
      <Footer />
    </>
  );
}
