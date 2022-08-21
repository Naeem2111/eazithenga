
import Home from "../components/home/Home";
import Plan from "../components/plan/Plan";
import Services from "../components/services/services";
import Storefront from "../components/storefront/Storefront";
import Trader from "../components/trader/Trader";


export default function Landing() {
  return (
    <div className="Landing">
      
      <Home />
      <Trader />
      <Storefront />
      <Services />
      <Plan />
      
    </div>
  );
}
