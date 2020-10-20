import React, { useState } from 'react';
import Hat from './components/Product';
import { Cart, Orders } from './components/Cart';
import products from './components/product_data';
import './App.css';

function App() {

  const [showtask, setShowtask] = useState(false);
  const [showtask2, setShowtask2] = useState(false);
  const [showtask3, setShowtask3] = useState(false);
  const [showtask4, setShowtask4] = useState(true);
  const [myChoice, setMyChoice] = useState(0);
  const [cartContent, setCartContent] = useState([]);
  const [cartState, setCartState] = useState([false, false, false]);
  const [orders, setOrders] = useState([]);
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fanikauppa</h1>
      </header>
      <div className="main">

        <h2>Tervetuloa Kauppaan</h2>

        {showtask4 &&
          <>
            <section className="product">

              <button onClick={e => setMyChoice(0)}>Hattu 1</button>
              <button onClick={e => setMyChoice(1)}>Hattu 2</button>
              <button onClick={e => setMyChoice(2)}>Hattu 3</button>

              <Hat
                hat={products[myChoice]}
                showtask={showtask}
                setShowtask={setShowtask}
                products={products}
                myChoice={myChoice}
                cartContent={cartContent}
                setCartContent={setCartContent}
                cartState={cartState}
                setCartState={setCartState}
              />

            </section>

            <section className="cart">
              <h3>OSTOSKORI</h3>
              {showtask &&
                <Cart
                  myChoice={myChoice}
                  showtask={showtask}
                  setShowtask={setShowtask}
                  showtask2={showtask2}
                  setShowtask2={setShowtask2}
                  showtask3={showtask3}
                  setShowtask3={setShowtask3}
                  showtask4={showtask4}
                  setShowtask4={setShowtask4}
                  cartContent={cartContent}
                  setCartContent={setCartContent}
                  setCartState={setCartState}
                  orders={orders}
                  setOrders={setOrders}
                  items={items}
                  setItems={setItems}
                />
              }
            </section>
          </>
        }

        <section className="cart">
          {showtask3 &&
            <section className="ordered">
              <Orders orders={orders} cartContent={cartContent} />
            </section>
          }
        </section>

      </div>
    </div>
  );
}

export default App;
