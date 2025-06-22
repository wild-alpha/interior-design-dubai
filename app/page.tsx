// app/page.tsx
import Header from "./components/header";
import HeroSection from "./components/HeroSection";
import Body from "./components/Body";
import BeforeAfterStories from "./components/BeforeAfterStories";
import Design from "./components/Design";
import Tips from "./components/Tips";
import Categories from "./components/Categories";

import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
    
      <main>
    <Header />
    <HeroSection />
    <Body />
    <BeforeAfterStories />
    <Design />
    <Tips />
    <Categories />
    <Footer />

      </main>
    </>
  );
}
