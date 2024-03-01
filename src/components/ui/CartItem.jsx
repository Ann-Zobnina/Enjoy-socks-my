import React from 'react';
import { Card } from 'react-bootstrap';
import Svg from './Svg';

export default function CartItem({ item, changeHandler, deleteHandler }) {
  const isFavorites = true;
  return (
    <>
      {/* //{' '}
      <div className="card mb-3" style={{ maxWidth: '540px' }}>
        //{' '}
        <div className="row g-0">
          //{' '}
          <div className="col-md-4">
            // <img src={item.Sock.img} className="img-fluid rounded-start" alt="..." />
            //{' '}
          </div>
          //{' '}
          <div className="col-md-8">
            //{' '}
            <div className="card-body">
              //{' '}
              <button
                onClick={() => deleteHandler(item.id)}
                type="button"
                className="btn btn-danger"
              >
                {' '}
                Delete{' '}
              </button>
              //{' '}
            </div>
            //{' '}
          </div>
          //{' '}
        </div>
        //{' '}
      </div> */}
      <Card
        style={{ borderBottom: 'none', backgroundColor: 'black' }}
        className="card card-content"
      >
        <Svg setColor={item.Color.color} isFavorites={isFavorites} />
      </Card>
      <Card className="card card-content">
        <img
          src={item.Image.image}
          alt="Selected"
          width="70"
          height="70"
          style={{ position: 'absolute', top: '-300px', left: '95px' }}
        />

        <img
          src={item.Decor.decor}
          alt="Selected"
          width="300"
          height="350"
          style={{ position: 'absolute', top: '-350px', left: '50px' }}
        />
      </Card>
    </>
  );
}
