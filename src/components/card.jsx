import React from "react";
import CardBody from "./cardbody.jsx";
import CardImage from "./cardimg.jsx";


function Card(props) {
  return (
    <div className="col">
      <div className="card" style={props.customStyle}>
        <CardImage src={props.item} alt={props.itemName}></CardImage>
        <CardBody
          customFont={props.customFont}
          itemName={props.itemName}
          itemDesc={props.itemDesc}
        ></CardBody>
      </div>
    </div>
  );
}
export default Card;