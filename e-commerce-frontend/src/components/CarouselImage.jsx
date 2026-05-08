import React from 'react'

const CarouselImage= (props) => {
  return (
    <div>
        <img src={props.text} style={{ width: "100vw", height: "350px" }} alt="" />
      
    </div>
  )
}

export default CarouselImage;

