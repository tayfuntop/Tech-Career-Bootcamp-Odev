import "./Container.css"
import Carousel from 'react-bootstrap/Carousel';

function Container() {
  return (
    <div className="container">
      <Carousel className="carousel">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://picsum.photos/id/237/2750/1075"
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://picsum.photos/id/221/2750/1075"
            alt="Second slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/id/227/2750/1075"
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Container