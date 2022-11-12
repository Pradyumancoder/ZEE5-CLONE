import "./AppGc.css";

import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./components-v/NavbarV";
import FooterV from "./components-v/FooterV"
function App() {
  return (
    <div className="App">
      
<Navbar />
      <AllRoutes></AllRoutes>
        </div>
  );
}

export default App;
