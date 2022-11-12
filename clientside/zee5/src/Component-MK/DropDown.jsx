import React from "react";
import SubdropDown from "./Explore";
import Plan from "./plan";
import Setting from "./setting";
import Info from "./info";
import "./dropDown.css";
import { GrDown } from "react-icons/gr";
import { GrUp } from "react-icons/gr";
import { useState } from "react";
import { Box } from "@chakra-ui/react";
const DropDown = () => {
  const [click, setClick] = useState(false);
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);

  return (
    <div className="dropDown-main">
      <div className="menudiv homep">
        <p className="homep">Home</p>
      </div>
      <hr />

      <div onClick={() => setClick(!click)} className="menudiv">
        <p>Explore</p>
        {click ? <Box><GrUp color="white"  className="icon"  /></Box> : <GrDown className="icon" />}
      </div>

      {click && <SubdropDown />}

      <hr style={{ color: "white" }} />

      <div onClick={() => setClick1(!click1)} className="menudiv">
        <p>Plans</p>
        {click1 ? (
          <GrUp className="icon bg-red-500" />
        ) : (
          <GrDown className="icon" />
        )}
      </div>
      {click1 && <Plan />}
      <hr />
      <div onClick={() => setClick2(!click2)} className="menudiv">
        <p>Setting</p>

        {click2 ? <GrUp className="icon" /> : <GrDown className="icon" />}
      </div>
      {click2 && <Setting/>}

      <hr />

      <div onClick={() => setClick3(!click3)} className="menudiv">
        <p>Info</p>
        {click3 ? <GrUp className="icon" /> : <GrDown className="icon" />}
      </div>
      {click3 && <Info/>}
      <hr />
      <div className="menuver">version 2.52.50</div>
    </div>
  );
};

export default DropDown;
