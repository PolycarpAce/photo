import React, {Component} from 'react';
import './Images.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const photos = [
    {
        name: 'photo 1',
        url: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
    },
    {
        name: 'photo 2',
        url: "https://images.unsplash.com/photo-1488903809927-48c9b4e43700?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
    },
    {
        name: 'photo 2',
        url: "https://images.unsplash.com/photo-1522978413910-e3889a1343db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
    },
    {
        name: 'photo 3',
        url: "https://images.unsplash.com/photo-1484100356142-db6ab6244067?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
    },
    {
        name: 'photo 4',
        url: "https://images.unsplash.com/photo-1513714966221-a3ef5a3fc794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
    },
{
        name: 'photo 5',
        url: "https://images.unsplash.com/photo-1490136014051-32940d55a28d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
    }
]

class Images extends Component{
    render() {
        const settings = {
            dots:true,
            fade:true,
            infinite:true,
            speed:500,
            slidesToShow:1,
            arrows:true,
            slidesToScroll:1,
            className: "slides"
        }
        return (
            <div className="Images">
                <h3>Scroll</h3>
                <slider {...settings}>
                    {photos.map((photo) =>{
                        return(
                            <div>
                                <img width="100%" src={photo.url}/>
                            </div>
                        )

                    })}

                </slider>
            </div>

        );
    }
}
export default Images;