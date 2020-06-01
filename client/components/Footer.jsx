import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div id="footer">
      © {year} Jplate LLC. All rights reserved.
    </div>
  );
};

export default Footer;
