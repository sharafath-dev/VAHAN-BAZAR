import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import FeaturedBikes from "@/components/home/FeaturedBikes";
import Categories from "@/components/home/Categories";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedBikes />
        <Categories />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
