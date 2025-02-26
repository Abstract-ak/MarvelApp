import Header from "./components/Header";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CompanyOverview from "./components/CompanyOverview";
import ProductRange from "./components/ProductRange";
import Partners from "./components/Partners";
import CallToAction from "./components/CallToAction";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* <Banner /> */}
        <Hero />
        {/* Add other sections */}
        <CompanyOverview />
        <ProductRange />
        <Partners />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
