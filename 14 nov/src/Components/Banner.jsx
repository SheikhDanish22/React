import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

const Banner=()=>{
    return(
          <>
         <Container>
            <Carousel>
      <Carousel.Item>
        <img src="public/image/i1.jpg" width="100%" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="public/image/i1.jpg" width="100%" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="public/image/i1.jpg"  width="100%"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
    <br />
          
          </>


    )
}

export default Banner;