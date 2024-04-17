export const dynamic = "force-dynamic"
import HeroSection from "./components/HeroSectrion/HeroSection";
import NewArrivals from "./components/NewArrivals/NewArrivals";
import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header color="242, 234, 231" textColor="text-negro"/>
      <div className="fixed left-0 top-0 w-screen h-screen bg-fondo -z-10"></div>
      <main className="main-section bg-fondo overflow-x-hidden">
        <div className="flex flex-col max-lg:items-center justify-between gap-10 lg:flex-row lg:gap-4 lg:max-w-[95vw]">
          <HeroSection />
          <NewArrivals />
        </div>
        <div className="flex flex-col max-lg:items-center justify-between gap-10 lg:flex-row lg:gap-4 lg:max-w-[95vw]">
          <Categories />
          <Contact />
        </div>
      </main>
      <Footer bgColor="bg-fondo" />
    </>
  );
}
