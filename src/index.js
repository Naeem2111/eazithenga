import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./routes/Contact";
import Landing from "./routes/Landing";
import SignUp from "./routes/Signup";
import App from "./App";
import { NelloKicks } from "./Shop/Stores/NelloKicks";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Landing />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="contactus" element={<Contact />} />
      </Route>
      <Route path="/Shop/nellokicks" element={<NelloKicks />} />
      
    </Routes>
  </BrowserRouter>
);
