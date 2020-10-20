import React, { useState } from 'react';
import '../App.css';

const Order = ({ order }) => {
  console.log(order);
  return (
    <>
      <p>Nimi: {order.name}</p>
      <p>Sähköposti: {order.email}</p>
      <p>Puhelin: {order.phone}</p>
      <p>Osoite: {order.address}</p>
      <p><strong>Yhteensä: {order.sum} €</strong></p>
      Tuotteet:<br></br>
    </>
  );
}

const CurrentItems = ({ cc }) => {

  return (
    <>
        {cc.alt} &ensp;
        Määrä: {cc.amount} <br></br>
    </>
  );
}


const Orders = ({ orders, cartContent }) => {
  if (orders !== undefined) {
    return (
      <>
        <h2>Kiitos tilauksesta!</h2>
        {orders.map(order => <Order order={order} key={order.id} />)}

          {cartContent.map(cc => <CurrentItems cc={cc} key={cc.id} />)}

      </>
    )
  } else return (
    <div>
      <p>ei tilauksia</p>
    </div>
  )

}

const CurrentContent = ({ cc, addAmount, deductAmount }) => {

  const correctPrice = cc.price.toFixed(2);
  const totalPrice2 = (correctPrice * cc.amount).toFixed(2);

  return (
    <>
      <p>
        Kuvaus: {cc.alt} &ensp;
        Määrä: {cc.amount}
        <br />
        Hinta: {correctPrice} €&ensp;
        Kokonaishinta: {totalPrice2} €
        </p>
      <button onClick={() => addAmount(cc.cartid)}>Lisää yksi!</button>&ensp;
            <button onClick={() => deductAmount(cc.cartid)}>Poista yksi!</button>
    </>
  );
}

const OrderForm = ({ summa, cartContent, orders, setOrders, setShowtask3, setShowtask4 }) => {
  const [newOrder, setNewOrder] = useState({ name: "", email: "", phone: "", address: "" });

  const changeHandler = (e, f) => {
    const tempOrder = { ...newOrder };
    tempOrder[f] = e.target.value;
    setNewOrder(tempOrder);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (newOrder.name !== "" && newOrder.email !== "" && newOrder.phone !== "" && newOrder.address !== "") {
      const uniqueId = Math.round(Math.random(10000000000000000) * 1000000000000000000);
      setOrders(orders.concat({ ...newOrder, sum: summa, id: uniqueId, orderedProducts: [...cartContent] }));
      setShowtask3(true);
      setShowtask4(false);
    } else {
      console.log("anna tiedot");
    }
  }

  return (
    <>

      <form onSubmit={submitHandler}>
        Nimi:<br></br>
        <input onChange={e => changeHandler(e, "name")} value={newOrder.name} type="text" maxlength="25" />
        <br />

        Sähköposti:<br></br>
        <input onChange={e => changeHandler(e, "email")} value={newOrder.email} type="text" maxlength="25" /> 
        <br />

        Puhelin:<br></br>
        <input onChange={e => changeHandler(e, "phone")} value={newOrder.phone} type="text" maxlength="25" />
        <br />

        Osoite:<br></br><input onChange={e => changeHandler(e, "address")} value={newOrder.address} type="text" maxlength="25" /> 
        <br /><br />

        <input type="submit" />
      </form>

    </>
  );
}

const Cart = ({ showtask, setShowtask, showtask2, setShowtask2, setShowtask3, setShowtask4, cartContent, setCartContent, setCartState, orders, setOrders }) => {

  const addAmount = (id) => {
    const tempContents = cartContent.map(cart => {
      if (cart.id === id) {
        const tempContent = { ...cart, amount: (cart.amount + 1), total: ((cart.amount + 1) * cart.price) }
        return tempContent;
      } else {
        return cart;
      }
    })
    setCartContent(tempContents);
  }

  const deductAmount = (id) => {
    const tempContents = cartContent.map(cart => {
      if (cart.id === id && cart.amount > 0) {
        const tempContent = { ...cart, amount: (cart.amount - 1), total: ((cart.amount - 1) * cart.price) }
        return tempContent;
      } else {
        return cart;
      }
    })
    setCartContent(tempContents);
  }

  const totalPrice = () => {
    let total = 0;
    if (cartContent.length !== 0) {
      const priceArray = cartContent.map(hats => hats.total);
      total = priceArray.reduce((a, b, c) => a + b + c).toFixed(2);
    }
    return total;
  }

  let summa = totalPrice();
  return (
    <>
      <div className="part">
        <p><strong>Kaikki ostokset: {totalPrice()} €</strong></p>
        <button onClick={() => {
          setShowtask(!showtask);
          setCartContent([]);
          setCartState([false, false, false]);
        }}>Tyhjennä ostoskori</button>&ensp;
            <button onClick={() => {
          setShowtask2(!showtask2)
        }}>Tee tilaus</button>
        {cartContent.map(cc => <CurrentContent cc={cc} key={cc.id} addAmount={addAmount} deductAmount={deductAmount} />)}
      </div>
      <br></br>
      {showtask2 &&
        <div className="part">
          <section className="order">
            <h4>Tilauslomake</h4>
              {cartContent.map(cc => <CurrentItems cc={cc} key={cc.id} />)}
            <p><strong>Hinta: {totalPrice()} €</strong></p>
            <OrderForm summa={summa} cartContent={cartContent} orders={orders} setOrders={setOrders} setShowtask3={setShowtask3} setShowtask4={setShowtask4} />
          </section>
        </div>
      }

    </>
  );
}

export { Cart, Orders };