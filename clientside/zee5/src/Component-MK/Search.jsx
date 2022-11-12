import React from 'react'
import "./search.css"
import {useState} from "react";
const Search = ({data}) => {
    // console.log("hi",data);
    // const [click,setClick] = useState();

  return (
    <div className='search'>
      {
        data.map((el,index)=>(
            <p key={index}>{el.title}</p>
        ))
      }
    </div>
    
  )
    
}

export default Search
