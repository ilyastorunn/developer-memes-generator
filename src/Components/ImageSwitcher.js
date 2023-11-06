import React, { useState } from "react";
import "./ImageSwitcher.css";

import meme1 from "../pics/meme1.jpg";
import meme2 from "../pics/meme2.jpeg";
import meme3 from "../pics/meme3.jpeg";
import meme4 from "../pics/meme4.jpeg";
import meme5 from "../pics/meme5.jpeg";
import meme6 from "../pics/meme6.jpeg";
import meme7 from "../pics/meme7.jpeg";
import meme8 from "../pics/meme8.jpeg";

const ImageSwitcher = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        meme1,
        meme2,
        meme3,
        meme4,
        meme5,
        meme6,
        meme7,
        meme8
    ];

    const changeImage = () => {
        setCurrentImage((currentImage + 1) % images.length);
    };

    return (
        <div>
            <div className="container">
                <img className="image" src={images[currentImage]} alt="picture" width={500} height={500} />
                <button className="button" onClick={changeImage}>Change the meme!</button>
            </div>
        </div>
    );
};

export default ImageSwitcher;