import "./display.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Testimonial from "./Testimonial";
import { testimonialData, responsive } from "./data";

function Display() {
    const clientTestimonial = testimonialData.map((item) => (
        <Testimonial
            name={item.name}
            url={item.imageurl}
            price={item.price}
            description={item.description}
        />
    ));
    
    return (
        <div className="App">
        <h1>React multi carousel</h1>
        <Carousel showDots={false} responsive={responsive} autoPlay autoPlaySpeed={1000}>
        {product}
        </Carousel>
        </div>
    );
}
export default Display