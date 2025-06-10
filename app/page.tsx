// app/page.tsx
import Header from "./components/header";
import HeroSection from "./components/HeroSection";
import FeaturedPosts from "./components/FeaturedPosts";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturedPosts />
      </main>
      <Footer />
    </>
  );
}
