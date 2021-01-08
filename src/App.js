import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Prix from "./components/Prix";
import Services from "./components/Services";
import "./scss/Style.scss"


function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Prix />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
