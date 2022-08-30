import React from "react";  
import "./ImageMenu.css"
import { imageUrls } from '../assets/imageURLs'
import { useState } from 'react'

export function ImageMenu({setSelectedImage, selectedImage} : {setSelectedImage: (url: string) => void, selectedImage: string}) {

    const [isSelected, setIsSelected] = useState(false)

    function changeImage(url: string){
        setSelectedImage(url)
        setIsSelected(current => !current)
    }




    const images: JSX.Element[] = []
    {imageUrls.forEach(url => {
      images.push(<div  onClick={() => changeImage(url) } className = {isSelected ? "isSelected": "image-box"}>  
                    <img src={url}/>
                </div>
        )
    })}
    return (   
        <div className="image-menu">        
            {images}
        </div>
    );
}