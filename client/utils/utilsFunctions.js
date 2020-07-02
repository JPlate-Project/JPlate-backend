export default function setItemQuantity(currentQuantity, mathOperation) {

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
}



