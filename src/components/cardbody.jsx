import React from "react";

function CardBody(props) {
  return (
    <div className="card-body">
      <p style={props.customFont}>{props.itemName}</p>
      <p>{props.itemDesc}</p>
    </div>
  );
}
export default CardBody;