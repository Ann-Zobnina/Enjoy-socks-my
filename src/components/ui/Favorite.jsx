import React from 'react';

export default function Favorite({ fav, deleteHandler }) {
  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={fav.Sock.img} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <button onClick={() => deleteHandler(fav.id)} type="button" className="btn btn-danger"> Delete </button>
          </div>
        </div>
      </div>
    </div>
  );
}
