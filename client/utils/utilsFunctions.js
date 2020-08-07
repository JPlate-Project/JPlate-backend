export const calculate = (currentQuantity, mathOperation) => {

  if (mathOperation === 'add') {
    if (currentQuantity === 15) {
      return 15;
    } else {
      return currentQuantity + 1;
    }
  } else if (mathOperation === 'minus') {
    if (currentQuantity === 1) {
      return 1;
    } else {
      return currentQuantity - 1;
    }
  }

};

export const addToCart = (cart, itemToAdd, passedQuantity) => {
  let push = true;
  cart.map((item, index) => {
    if (item.id === itemToAdd.id) {//if item is already in cart, update the quantity
      cart[index].userSelectedQuantity = passedQuantity + cart[index].userSelectedQuantity;
      push = false;
    }
  });
  if (push) {
    itemToAdd.userSelectedQuantity = passedQuantity;
    cart.push(itemToAdd);
  }
  return cart;
};

export const removeFromCart = (cart, itemToRemove) => {
  cart.map((item, index) => {
    if (item.id === itemToRemove.id) {
      cart.splice(index, 1);
    }
  });
  return cart;
};

export const itemQuantityChange = (cart, itemToChange, newQuantity) => {
  cart.map((item, index) => {
    if (item.id === itemToChange.id) {
      cart[index].userSelectedQuantity = newQuantity;
    }
  });
  return cart;
};
