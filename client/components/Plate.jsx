import React from 'react';

const Plate = (props) => {
  console.log(props.currentPlate)
  if (props.currentPlate.id) {
    return (
      <div className="singlePlate">
        <img
          src={props.currentPlate.imageURL}
          alt='cannot display'
          height='200px'
          width='200px'
        />
        <br></br>

        <h4>  {props.currentPlate.name}</h4>
        {props.currentPlate.description}
        <br></br>

        <button><img src='https://previews.123rf.com/images/aguiters/aguiters1711/aguiters171100033/90038691-shopping-cart-icon-vector.jpg' height='20px' width='20px' /></button>
        {`$${props.currentPlate.price}`}
      </div>
    );
  } else {
    return (<div>loading</div>)
  }
};

export default Plate;
