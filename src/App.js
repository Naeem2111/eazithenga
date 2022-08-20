import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Plan from "./components/plan/Plan";
import Services from "./components/services/services";
import Storefront from "./components/storefront/Storefront";
import Trader from "./components/trader/Trader";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Trader />
      <Storefront />
      <Services />
      <Plan />
      <Contact />
    </div>
  );
}

export default App;
