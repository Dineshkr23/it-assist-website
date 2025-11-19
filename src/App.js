import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer1 from "./components/Footer1";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Thankyou from "./pages/Thankyou";
import EmailSubscription from "./pages/EmailSubscription";
import Printer from "./pages/Printer";
import GenuineInkTonerPage from "./components/GenuineInkTonerPage";
import HighSpeedLaserPrinterPage from "./components/HighSpeedLaserPrinterPage";
import A4PrinterPaperPage from "./components/A4PrinterPaperPage";
import PhotoPrinterPage from "./components/PhotoPrinterPage";
import ColorLaserJetPage from "./components/ColorLaserJetPage";
import ProductPage from "./components/ProductPage";
import BlogPost from "./pages/blog/BlogPost";
import TroubleshootingBlogPost from "./pages/blog/TroubleshootingBlogPost";
import ChoosingPrinterBlogPost from "./pages/blog/ChoosingPrinterBlogPost";
import ThankYou from "./components/ThankYouPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="/thankyou" element={<Thankyou />} />
            <Route path="/emailsubscription" element={<EmailSubscription />} />
            <Route path="/printer" element={<Printer />} />
            <Route path="/product/1" element={<ProductPage />} />
            <Route path="/product/2" element={<HighSpeedLaserPrinterPage />} />
            <Route path="/product/3" element={<GenuineInkTonerPage />} />
            <Route path="/product/4" element={<A4PrinterPaperPage />} />
            <Route path="/product/5" element={<PhotoPrinterPage />} />
            <Route path="/product/6" element={<ColorLaserJetPage />} />
            <Route
              path="/blog/top-5-printer-maintenance-tips"
              element={<BlogPost />}
            />
            <Route
              path="/blog/troubleshooting-common-printer-issues"
              element={<TroubleshootingBlogPost />}
            />
            <Route
              path="/blog/choosing-the-right-printer"
              element={<ChoosingPrinterBlogPost />}
            />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </main>
        <Footer1 />
      </div>
    </Router>
  );
}

export default App;
