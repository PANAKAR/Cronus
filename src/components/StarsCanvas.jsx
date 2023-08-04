import React from 'react'
import './stars.css'

function StarsCanvas() {
  return (
    <div className="hidden-xs xl:mt-[100px]" id="stars">
      <img src="./stars.jpg" alt="" className="z-0 table-responsive xs:mt-[100px]"style={{marginTop: "-50%", zIndex: "0" }}/>
    </div>
  )
}

export default StarsCanvas
