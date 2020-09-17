import React from 'react';

const OrderHistoryItem = (props) => {

  let total = 0;
  props.order.items.map(item => {
    total += item.userSelectedQuantity;
  });

  const firstItemImage = props.order.items[0].imageURL;

  return (
    <div className="orderHistoryItem">
      {console.log(props.order)}
      <label>Date: {(new Date(props.order.createdAt).toDateString())}</label>
      <label>TotalItems: {total} </label>
      <label>Subtotal: {props.order.total}</label>
      <img src={firstItemImage} />
    </div>
  );
};

export default OrderHistoryItem;
