import React, { useRef } from 'react';

const QuantitySelector = (props) => {

  const selectorRef = useRef(null);
  const currentQuantity = props.item.userSelectedQuantity;
  const validQuantityRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const handleSelect = () => {
    const selectedQuantity = selectorRef.current.selectedIndex;
    props.handleItemQuantityChangeCart(props.item, selectedQuantity);
  };

  return (
    <div>
      <select name="quantitySelector"
        ref={selectorRef}
        onChange={handleSelect}
        defaultValue={currentQuantity}>

        {validQuantityRange.map(num => {
          return <option key={Math.random()} value={num}>{num}</option>;
        })}

      </select>
    </div >
  );
};

export default QuantitySelector;
