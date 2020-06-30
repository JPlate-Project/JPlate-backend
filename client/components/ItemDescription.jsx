import React from 'react'

const ItemDescription = (props) => {
  return (
    <div id="itemDescriptionContainer">
      <div id="itemDescriptionHeader">
        {props.currentPlate.name}
        <button type="button" onClick={() => {
          return props.toggleItemDescription(!props.showItemDescription)
        }}>
          <img src="https://cdn4.iconfinder.com/data/icons/xbox-one-thin-line-set/64/ico-xbx-bttn-x-512.png" height='40px' width='40px' ></img>
        </button>
      </div>
      <hr />
      <div id="itemDescriptionBody">
        <div id="itemDescriptionCenter">
          <img src={props.currentPlate.imageURL} height="300px"
            width="300px"></img>
          {props.currentPlate.description}

        </div>
        <div>more stuffo n the right</div>
      </div>
    </div>
  )
}

export default ItemDescription
