import React from 'react';

const ProductItem = ({ price, imageSrc, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(price, imageSrc);
  };

  return (
    <div className="product-item">
      <img src={imageSrc} alt="" />
      <span>{price}</span>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
