import React, { useState } from 'react';
import FavoriteItem from '../ui/FavoriteItem';

export default function FavoritePage({ socks }) {
  const [items, setItems] = useState(socks);

  const deleteHandler = async (favItemId) => {
    const response = await fetch('/api/change/favorites', {
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
    <div>
      <h1>Избранное:</h1>
      {items
        ? (
          <div style={{
            display: 'flex', marginLeft: '30px', gap: '30px', flexWrap: 'wrap', justifyContent: 'flex-start',
          }}
          >
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
  );
}
