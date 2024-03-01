import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import FavoriteItem from '../ui/FavoriteItem';

export default function FavoritePage({ socks }) {
  const [items, setItems] = useState(socks);

  const deleteHandler = async (favItemId) => {
    const response = await fetch('/api/change/favorite', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        id: favItemId,
        favorite: false,
      },
    });
    if (response.status === 200) {
      setItems((prev) => prev.filter((el) => el.id !== favItemId));
    } else if (response.status === 500) {
      const message = await response.data.json();
      console.log(message);
    }
  };

  return (
    <Container>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Избранное</h1>
      <div style={{
        minHeight: '500px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
      }}
      >
        {items.length
          ? (
            <div>
              {items?.map((fav) => (
                <div
                  key={fav.id}
                  style={{
                    display: 'flex', marginBottom: '50px',
                  }}
                >
                  <FavoriteItem fav={fav} deleteHandler={deleteHandler} />
                </div>
              ))}

            </div>
          )
          : (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h5 style={{ margin: '50px 50px 50px 50px' }}>У вас еще нет избранных товаров</h5>
            </div>
          )}
      </div>
    </Container>
  );
}
