import Header from "./components/header/Header";

import Contact from "./components/contact/Contact";
import { Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet/>
      <Contact />
    </div>
  );
}

export default App;
