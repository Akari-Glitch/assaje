import React, { useEffect, useState } from 'react'
import { CarouselStyles } from '../../styles/home/CarouselStyles'
function Carousel() {
    const images = ["img1.jpg", "img2.jpg", "img3.jpg"]
    const [selectedIndex, setSelectedIndex] = useState<number>(0)
    const [selectedImage, setSelectedImage] = useState(images[0])

    useEffect(() => {

        const interval = setInterval(() => {
            selectNewImage(selectedIndex, images);
        }, 1000);
        return () => clearInterval(interval);

    });

    const selectNewImage = (index: number, images: string[], next = true) => {
        setTimeout(() => {
            const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
            const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
            setSelectedImage(images[nextIndex]);
            setSelectedIndex(nextIndex);
        }, 2000);
    };


    return (
        <CarouselStyles image={`url('/images/home/carousel/${selectedImage}')`}>
            <div className="img-div" />
        </CarouselStyles>
    )
}

export default Carousel