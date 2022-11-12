import "./AppGc.css";

import AllRoutes from "./Routes/AllRoutes";

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


  );
}

export default App;
