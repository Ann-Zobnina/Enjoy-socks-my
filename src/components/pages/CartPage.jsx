import React, { useState } from 'react';
import Bin from '../ui/Bin';

export default function CartPage({ cartItems }) {
  const [items, setItems] = useState(cartItems);

  const deleteHandler = async (CartItemId) => {
    const url = `/api/change/${CartItemId}/cart`;
    const response = await fetch(url, { method: 'DELETE' });
    if (response.status === 200) {
      setItems((prev) => prev.filter((cartItem) => cartItem.id !== CartItemId));
    } else if (response.status === 500) {
      const message = await response.json();
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
                <Bin item={item} deleteHandler={deleteHandler} />
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
