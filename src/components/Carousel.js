import Carousel from 'react-bootstrap/Carousel';

function Carousel({ images }) {
    return (
        <Carousel>
            {images.map((image, idx) => {
                <Carousel.Item>
                    <img src={image} />
                </Carousel.Item>
            })}
        </Carousel>
    );
}

export default Carousel;