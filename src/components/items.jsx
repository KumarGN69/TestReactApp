import React from "react";

import itemArrayFRow from "./consts.js";
import {itemArraySRow,customStyle,customFont} from "./consts.js";
import Card from "./card.jsx";



function createFRow(itemArrayFRow){
			return (
			<Card
				key={itemArrayFRow.id}
				customStyle={customStyle}
				customFont={customFont}
				item={itemArrayFRow.item}
				itemName={itemArrayFRow.itemName}
				itemDesc={itemArrayFRow.itemDesc}
			>
			</Card>
			);
	}
	

function createSRow(itemArraySRow){
			return (
			<Card
				key={itemArraySRow.id}
				customStyle={customStyle}
				customFont={customFont}
				item={itemArraySRow.item}
				itemName={itemArraySRow.itemName}
				itemDesc={itemArraySRow.itemDesc}
			>
			</Card>
			);
	}
	

function Items() {
  return (
	<div>
		
		<div className= " row container-fluid">
			 {itemArrayFRow.map(createFRow)}	
		</div>


		<div className= " row container-fluid">
			 {itemArraySRow.map(createSRow)}	
		</div>
	</div>
	
  );
}

export default Items;