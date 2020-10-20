import React from 'react';
import '../App.css';

const Hat = ({
  hat,
  products,
  myChoice,
  cartContent,
  setCartContent,
  showtask,
  setShowtask,
  cartState,
  setCartState
}) => {

  const handleClick = () => {
    if (cartState[myChoice] === false) {
      if (showtask === false) setShowtask(!showtask);
      let cartCopy = { ...products[myChoice], cartid: myChoice + 1, amount: 1, total: (products[myChoice].price * (products[myChoice].amount + 1)) };
      setCartContent(cartContent.concat(cartCopy));
      let newArr = { ...cartState };
      newArr[myChoice] = true;
      setCartState(newArr);
    } else if (cartState[myChoice] === true) {
      alert("Tuote on jo ostoskorissa");
    }
  }

  const correctPrice = hat.price.toFixed(2);
  return (
    <div className="part">
      <img src={hat.picture} className="pic" alt={hat.alt}></img>
      <p>{hat.desc}</p>
      <p>Hinta: {correctPrice} €</p>
      <button onClick={handleClick}>Laita ostoskoriin</button>
    </div>
  );
}

export default Hat;