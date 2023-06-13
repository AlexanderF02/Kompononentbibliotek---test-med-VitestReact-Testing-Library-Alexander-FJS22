import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './index.css';
import image1 from './bild.png';
import image2 from './bild2.png';
import image3 from './bild3.png';
import smallImage from './bild.png'; 

const CollectionPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCartButtonClicked, setIsCartButtonClicked] = useState(false);
  const images = [image1, image2, image3];
  const productTitle = 'Fall Limited Edition Sneakers';
  const productDescription =
    'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they withstand everything the weather can offer.';
  const productPrice = (
    <span>
      <span className="original-price">$250.00</span>
      <span className="discount-price">$125.00</span>
    </span>
  );

  useEffect(() => {
    // Automatic slideshow
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  const handleAddToCart = () => {
    const product = {
      id: uuidv4(),
      title: productTitle,
      price: 125.0,
      quantity: quantity,
      image: smallImage, // Add the small image path here
    };
    setCartItems((prevItems) => [...prevItems, product]);
    setIsCartButtonClicked(true);
  };

  const handleQuantityDecrement = React.useCallback(() => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  }, []);

  const handleQuantityIncrement = React.useCallback(() => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }, []);

  const handleRemoveItem = React.useCallback((itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }, []);

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const handleCartButtonClick = () => {
    setIsCartOpen((prevState) => !prevState);
    setIsCartButtonClicked(false);
  };  

  return (
    <div className="collection-page">
      <div className="slideshow-container">
        <div className="slideshow">
          <img className="slideshow-image" src={images[currentImageIndex]} alt="Slideshow" />
        </div>
        <div className="thumbnails-container">
          {images.map((image, index) => (
            <img
              key={index}
              className={`thumbnail ${currentImageIndex === index ? 'active' : ''}`}
              src={image}
              alt="Thumbnail"
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
        <div className="product-details">
          <span className="discount-text">Sneaker Company</span>
          <h1 className="product-title">{productTitle}</h1>
          <p className="product-description">{productDescription}</p>
          <div className="product-price">{productPrice}</div>
          <div className="quantity-selector">
            <button className="decrement-button" onClick={handleQuantityDecrement}>
              -
            </button>
            <input type="text" className="quantity-input" value={quantity} readOnly />
            <button className="increment-button" onClick={handleQuantityIncrement}>
              +
            </button>
          </div>
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
      <div className="cart-container">
        <button className="cart-button" onClick={handleCartButtonClick}>
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
        {isCartButtonClicked && (
          <div className={`cart-dropdown ${isCartOpen ? 'open' : ''}`}>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="item-details">
                    <img src={item.image} alt="Product" style={{ width: '50px' }} />
                    <div>{item.title}</div>
                    <div>{item.price}$ x {item.quantity}</div>
                  </div>
                  <button className="remove-button" onClick={() => handleRemoveItem(item.id)}>
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-total">Total: ${calculateTotal()}</div>
            <button className="checkout-button">Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionPage; 


















































        










