import React, { useState } from 'react';

export default function Bin() {
  const [items, setItems] = useState(false);

  const deleteHandler = async (CartItemId) => {
    const response = await fetch(`/api/change/${CartItemId}/cart`, { method: 'DELETE' });
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
                <div className="card mb-3" style={{ maxWidth: '540px' }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={item.Sock.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{item.Product.title}</h5>
                        <p className="card-text">{item.Product.description}</p>
                        <p className="card-text"><small className="text-body-secondary">{item.Product.price}</small></p>
                        <button onClick={() => deleteHandler(item.id)} type="button" className="btn btn-danger"> Delete </button>
                      </div>
                    </div>
                  </div>
                </div>
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
