import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Hightlights from "./components/Hightlights";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";

import * as Sentry from "@sentry/react";

function App() {
  return (
    <main clssName="bg-black">
      <Navbar />
      <Hero />
      <Hightlights />
      {/* <Model /> */}
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}

export default Sentry.withProfiler(App);
