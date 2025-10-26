import { Navbar } from "@/components/Navbar/Navbar.tsx";
import { Header } from "@/components/Header/Header.tsx";
import { MainContent } from "@/components/MainContent/Index.tsx";
import { Footer } from "@/components/Footer/Index.tsx";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <MainContent />
      <Footer />
    </>
  );
};
