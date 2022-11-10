import "./AppGc.css";

import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./components-v/NavbarV"
function App() {
  return (
    <div className="App">
<Navbar />

      <AllRoutes>

      </AllRoutes>
      <h1>Footer</h1>
    </div>
  );
}

export default App;
