import Notification from "./components/Notification";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Trending from "./components/Trending";
import Contact from "./components/Contact";
import Store from "./components/Store"
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="bg-black w-full">
      <Notification />
      <Navbar />
      <Hero />
      <Brands />
      <Trending />
      <Contact />
      <Store />
      <Footer />
    </main>
  )
}

export default App