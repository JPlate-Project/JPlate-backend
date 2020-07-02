import React from 'react'

const ItemDescription = (props) => {
  return (
    <div id="itemDescriptionContainer">
      <div id="itemDescriptionHeader">
        {props.currentPlate.name}
        <button type="button" onClick={() => {
          return props.toggleItemDescription(!props.showItemDescription)
        }}>
          <img src="https://static.thenounproject.com/png/1600389-200.png" style={{ height: '20px', width: '20px', 'background-color': 'white', border: 'none' }} ></img>
        </button>
      </div>
      <hr />
      <div id="itemDescriptionBody">
        <div id="itemDescriptionCenter">
          <img src={props.currentPlate.imageURL} height="300px"
            width="300px"></img>
          <div id="itemDescriptionCenterQuantity">
            <div>{props.currentPlate.price}</div>
            <div>

              <button id="minusQuantity" type="button" style={{ height: '50px', width: '50px' }}>-</button>

              <button id="addQuantity" type="button" style={{ height: '50px', width: '50px' }}>+</button>
              0 
            </div>
            <button id="addToCart" type="button" style={{ height: '50px', width: '50px' }}>Add to cart</button>
          </div>
        </div>
        <div>{props.currentPlate.description}</div>
      </div>
    </div >
  )
}

export default ItemDescription
