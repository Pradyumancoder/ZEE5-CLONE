import "./AppGc.css";

import AllRoutes from "./Routes/AllRoutes";
<<<<<<< HEAD
// import Navbar from "./components-v/NavbarV";
import Header from "./Components-pradyuman/TvShow/Header";
import MiddleSection from "./Components-pradyuman/TvShow/MiddleSection";
import Playshow from "./Components-pradyuman/TvShow/PlaytvShow/Playshow";
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}

      <AllRoutes></AllRoutes>
      <Header></Header>
     <MiddleSection></MiddleSection> 
       <Playshow ></Playshow>
   
    </div>
=======
import Navbar from "./components-v/NavbarV";
import FooterV from "./components-v/FooterV"
function App() {
  return (
    <div className="App">
      
<Navbar />
      <AllRoutes></AllRoutes>
        </div>
>>>>>>> df0b8657eeb89c3e48ddbcf713fc0b24f277bd8f
  );
}

export default App;
