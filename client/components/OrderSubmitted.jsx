import React, { useState } from 'react';

const OrderSubmitted = () => {
  const [counter, setCounter] = useState(3);

  setTimeout(function () {
    let tmpCount = counter - 1;
    setCounter(tmpCount);
  }, 1000);

  if (counter === 0) {
    location.reload();
  }

  return (
    <div id="cartContainer">
      <div className="orderSubmitted">
        Your order was placed!
        <br></br>
          This page will refresh in {counter} seconds
      </div>
    </div>
  )
};

export default OrderSubmitted;
