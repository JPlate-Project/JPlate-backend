import React from 'react';

const Plate = () => {
  return (
    <div className="singlePlate">
      <h3>Blue Plate</h3>
      A beautiful blue plate
      <hr></hr>
      <img
        src='https://photoshopdoctor.files.wordpress.com/2016/07/3-blue-plate.jpg?w=723'
        alt='cannot display'
        height='200'
        width='200'
      />
      <br></br>
      <a href="page">Click for details</a>
      <br></br>
      <button>Add to cart</button>
    </div>
  );
};

export default Plate;
