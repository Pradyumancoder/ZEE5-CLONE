import "./AppGc.css";
import NavbarGc from "./Components-Gc/NavBarGc";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <h1>
        Navbar
        {/* <NavbarGc></NavbarGc> */}
      </h1>
      <AllRoutes></AllRoutes>
      <h1>Footer</h1>
    </div>
  );
}

export default App;
