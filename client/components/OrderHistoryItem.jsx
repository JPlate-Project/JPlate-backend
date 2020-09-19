import React from 'react';

const OrderHistoryItem = (props) => {

  let total = 0;
  props.order.items.map(item => {
    total += item.userSelectedQuantity;
  });

  const firstItemImage = props.order.items[0].imageURL;

  return (
    <div className="orderHistoryItem">
      <div className="pastOrderSubHeader">
        <label>Date: {(new Date(props.order.createdAt).toDateString())}</label>
        <label>TotalItems: {total} </label>
        <label>Subtotal: {props.order.total}</label>
      </div>
      <img src={firstItemImage} className="cartImg" />
      <label>Dookie</label>
      <label>dooki</label>
    </div >
  );
};

export default OrderHistoryItem;
