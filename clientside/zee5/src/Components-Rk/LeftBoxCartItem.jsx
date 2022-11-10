import React from 'react'
// import { CiCircleQuestion } from "react-icons/ci"
import { VscQuestion } from "react-icons/vsc"
import { TiTick } from "react-icons/ti"

const LeftBoxCartItem = ({light,dark}) => {
  return (
    <div className="left-box-content-item">
    <div >
        <span >
            <TiTick className='tick-mark-icon' />
        </span>
        <span className='text'>
            <span className='text-light' >{light}</span>
            <span className='text-dark'>{dark}</span>
        </span>
    </div>
    <div >
        {/* <CiCircleQuestion className='question-mark-icon' /> */}
        <VscQuestion className='question-mark-icon' />
    </div>
</div>
  )
}

export default LeftBoxCartItem