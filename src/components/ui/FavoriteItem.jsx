import React from 'react';
import { Card, CloseButton } from 'react-bootstrap';

export default function FavoriteItem({ fav, deleteHandler }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Header as="h5" style={{ display: 'flex', justifyContent: 'space-between' }}>
        Sock
        <CloseButton onClick={() => deleteHandler(fav.id)} />
      </Card.Header>
      <Card.Body>
        <Card.Img variant="top" fluid src={fav.pic} style={{ backgroundSize: 'color' }} />
      </Card.Body>
    </Card>
  // <div className="card mb-3" style={{ maxWidth: '540px', padding: '10px' }}>
  //   <div className="row g-0">
  //     <div className="col-md-4">
  //       <img src={fav.pic} className="img-fluid rounded-start" alt="..." />
  //     </div>
  //     <div className="col-md-8">
  //       <div className="card-body">
  //         <button onClick={() => deleteHandler(fav.id)} type="button" className="btn btn-danger">✖</button>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  );
}
