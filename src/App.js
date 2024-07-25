import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import SearchBar from './SearchBar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function App() {
  // const REACT_APP_PIXABAY_API_KEY = '45101144-a733224ee50531df7881f3bf4'
  const [images , setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('nature');
  const [text, setText] = useState('');


  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true); // Set loading to true before fetch
      try {
        const response = await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`);
        const data = await response.json();
        console.log(data)
        setImages(data.hits);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setIsLoading(false); // Set loading to false after fetch
      }
    }

    fetchImages();
  }, [term]); // Dependency array with term

  const searchBar = (e) =>{
    e.preventDefault()
    setTerm(text)
    
  }

  const settings ={
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 10,
          slidesToScroll: 1,
          initialSlide: 3,
          vertical: true,
          verticalSwiping: true,
          swipeToSlide: true
        }
      }
    ]
  }


  return (
    <>
    <SearchBar searchBar = {searchBar} setText={setText} />
    <div className="container mx-auto">
      {!isLoading && images.length ===0 && <h1 className="text-6xl text-center mx-auto mt-32">No Images Found!</h1>}
      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Still Loading</h1> : <Slider {...settings}>
        {images.map(image =>(
          <ImageCard key={image.id} image={image}/>
        ))}
      </Slider>}
    </div>
    </>
  );
}

export default App;
