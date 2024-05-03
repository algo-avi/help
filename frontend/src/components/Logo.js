import React from 'react';
import logo1 from './logo1.jpg';

const Logo = ({ w, h }) => {
  return (
    <svg width={w} height={h} viewBox="0 0 370.16679528778167 155.08501865265873" className="css-1j8o68f">
      {/* Your SVG paths and elements */}
      <img src={logo1} alt="Lelo Mall Logo" width={w} height={h} />
      <text x="50%" y="50%" fontFamily="Verdana, Geneva, sans-serif" fontSize="100" fill="#292929" textAnchor="middle">leloMall</text>
      {/* Additional SVG paths and elements for design */}
    </svg>
  );
};

export default Logo;
