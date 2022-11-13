import "./AppGc.css";

import AllRoutes from "./Routes/AllRoutes";

import Navbar from "./components-v/NavbarV";
import Header from "./Components-pradyuman/TvShow/Header";
import MiddleSection from "./Components-pradyuman/TvShow/MiddleSection";
import Playshow from "./Components-pradyuman/TvShow/PlaytvShow/Playshow";
import Footer from "./components-v/FooterV";
import VideoPlay from "./Components-Rk/VideoPlay";
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes></AllRoutes>
  
      <Footer/>

    </div>



  );
}

export default App;
