import React, { useState } from 'react';
import Favorite from '../ui/Favorite';

export default function FavoritePage({ favItems }) {
  const [items, setItems] = useState(favItems);

  const deleteHandler = async (favItemId) => {
    const url = `/api/change/${favItemId}/favorites`;
    const response = await fetch(url, { method: 'DELETE' });
    if (response.status === 200) {
      setItems((prev) => prev.filter((el) => el.id !== favItemId));
    } else if (response.status === 500) {
      const message = await response.json();
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
                <Favorite fav={fav} deleteHandler={deleteHandler} />
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
