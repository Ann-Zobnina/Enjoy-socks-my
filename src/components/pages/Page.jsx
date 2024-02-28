import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function Page() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=f5f5f5"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Enjoy socks</h3>
          <p>Самое время быть уникальным! Смоделируй свою любимую пару носков!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Enjoy socks</h3>
          <p>Самое время быть уникальным! Смоделируй свою любимую пару носков!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
