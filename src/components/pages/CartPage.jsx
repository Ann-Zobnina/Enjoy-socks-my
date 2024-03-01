import React, { useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import CartItem from '../ui/CartItem';

export default function CartPage({ socks }) {
  // const [items, setItems] = useState(cartItems);

  const [items, setItems] = useState(socks);

  const changeHandler = async (favItemId) => {
    const response = await fetch('/api/change/cart', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        id: favItemId,
        addToCart: true,
      },
    });
    if (response.status === 200) {
      setItems((prev) => prev.filter((el) => el.id !== favItemId));
    } else if (response.status === 500) {
      const message = await response.data.json();
      console.log(message);
    }
  };

  const deleteHandler = async (CartItemId) => {
    const response = await axios.delete('/api/change/cart', { id: CartItemId });
    if (response.status === 200) {
      setItems((prev) => prev.filter((cartItem) => cartItem.id !== CartItemId));
    } else if (response.status === 500) {
      const message = await response.data.json();
      console.log(message);
    }
  }; //

  return (
    <Container>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Корзина</h1>
      <div
        style={{
          minHeight: '500px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        {items.length ? (
          <div>
            {items?.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  marginBottom: '50px',
                }}
              >
                <CartItem item={item} changeHandler={changeHandler} deleteHandler={deleteHandler} />
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h5 style={{ margin: '50px 50px 50px 50px' }}>Ваша корзина пуста</h5>
          </div>
        )}
      </div>
    </Container>
  );
}
