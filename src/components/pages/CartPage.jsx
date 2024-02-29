import React, { useState } from 'react';
import axios from 'axios';
import CartItem from '../ui/CartItem';

export default function CartPage({ cartItems }) {
  const [items, setItems] = useState(cartItems);

  const deleteHandler = async (CartItemId) => {
    const response = await axios.delete('/api/change/cart', { id: CartItemId });
    if (response.status === 200) {
      setItems((prev) => prev.filter((cartItem) => cartItem.id !== CartItemId));
    } else if (response.status === 500) {
      const message = await response.data.json();
      console.log(message);
    }
  };

  return (
    <div>
      <h1>Корзина:</h1>
      {items
        ? (
          <div style={{
            display: 'flex', marginLeft: '30px', gap: '30px', flexWrap: 'wrap', justifyContent: 'flex-start',
          }}
          >
            {items?.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex', marginBottom: '50px',
                }}
              >
                <CartItem item={item} deleteHandler={deleteHandler} />
              </div>
            ))}

          </div>
        )
        : (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h5 style={{ margin: '50px 50px 50px 50px' }}>Ваша корзина пуста</h5>
          </div>
        )}
    </div>
  );
}
