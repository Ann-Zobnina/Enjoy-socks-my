import React from 'react';
import { Card, CloseButton } from 'react-bootstrap';
import Svg from './Svg';

export default function FavoriteItem({ fav, changeHandler }) {
  const isFavorites = true;
  return (
    <Card style={{ width: '370px' }}>
      <Card.Header as="h5" style={{ display: 'flex', justifyContent: 'space-between' }}>
        Sock
        <CloseButton onClick={() => changeHandler(fav.id)} />
      </Card.Header>
      <Card.Body style={{ backgroundColor: 'black', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' }}>
        <Svg
          variant="top"
          fluid
          setColor={fav.Color.color}
          isFavorites={isFavorites}
          style={{ position: 'relative', backgroundSize: 'cover' }}
        />
        <img
          src={fav.Decor.decor}
          alt="Selected"
          width="300"
          height="350"
          style={{ position: 'absolute', top: '55px', left: '20px' }}
        />
        <img
          src={fav.Image.image}
          alt="Selected"
          width="70"
          height="70"
          style={{ position: 'absolute', top: '100px', left: '120px' }}
        />
      </Card.Body>
    </Card>
  );
  { /* <div className="card mb-3" style={{ maxWidth: '540px', padding: '10px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={fav.pic} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <button
                onClick={() => deleteHandler(fav.id)}
                type="button"
                className="btn btn-danger"
              >
                ✖
              </button>
            </div>
          </div>
        </div>
      </div> */ }

  /// ////////////////////////////
  // { <Card
  //       style={{ borderBottom: 'none', backgroundColor: 'black' }}
  //       className="card card-content"
  //     >
  //       <Svg setColor={fav.Color.color} isFavorites={isFavorites} />
  //     </Card>
  //     <Card className="card card-content">
  //       <img
  //         src={fav.Image.image}
  //         alt="Selected"
  //         width="70"
  //         height="70"
  //         style={{ position: 'absolute', top: '-500px', left: '95px' }}
  //       />

  //       <img
  //         src={fav.Decor.decor}
  //         alt="Selected"
  //         width="300"
  //         height="350"
  //         style={{ position: 'absolute', top: '-500px', left: '50px' }}
  //       />
  //     </Card>
  //   </>  }
  // );
}
