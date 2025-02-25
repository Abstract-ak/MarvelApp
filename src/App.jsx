import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Banner />
        {/* Add other sections */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
