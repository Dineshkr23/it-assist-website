import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ClientsSection from "../components/ClientsSection";
import ServicesSection from "../components/ServicesSection";
import PricingSection from "../components/PricingSection";
import TeamSection from "../components/TeamSection";
import WhyUsSection from "../components/WhyUsSection";
import SkillsSection from "../components/SkillsSection";
import FAQSection from "../components/FAQSection";
import Popup from "../components/Popup";
import Stories from "../components/Stories";
import Delivering from "../components/Delivering";
import ProductsSection from "../components/ProductsSection";
import BlogSection from "./BlogSection";

const Home = () => {
  return (
    <>
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="clients">
        <ClientsSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="products">
        <ProductsSection />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="team">
        <TeamSection />
      </div>
      <div id="why-us">
        <WhyUsSection />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="stories">
        <Stories />
      </div>
      <div id="delivering">
        <Delivering />
      </div>
      <div id="blog">
        <BlogSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
    </>
  );
};

export default Home;
