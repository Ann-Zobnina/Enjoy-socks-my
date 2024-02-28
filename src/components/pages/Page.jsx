import React from 'react';
import { Carousel, ExampleCarouselImage } from 'react-bootstrap';
import Navbar from '../ui/NavBar';
import Footer from '../ui/Footer';

export default function Page() {
  return (
    <>
      {/* <Navbar /> */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=f5f5f5"
            alt="First slide"
          />
          <ExampleCarouselImage text="Enjoy socks" />
          <Carousel.Caption>
            <h3>Enjoy socks</h3>
            <p>Самое время быть уникальным! Смоделируй свою любимую пару носков!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Enjoy socks" />
          <Carousel.Caption>
            <h3>Enjoy socks</h3>
            <p>Самое время быть уникальным! Смоделируй свою любимую пару носков!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <Footer /> */}
    </>
  );
}
