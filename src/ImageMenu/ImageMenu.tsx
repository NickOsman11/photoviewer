import React from "react";  
import "./PhotoViewer.css"
import { imageUrls } from '../assets/imageURLs'

export function ImageMenu({setSelectedImage} : {setSelectedImage: (url: string) => void}) {

    const images: JSX.Element[] = []
    {imageUrls.forEach(url => {
      images.push(<div className="image-box" onClick={() => setSelectedImage(url)}>  
                    <img src={url}/>
                </div>
        )
    })}
    return (   
        <div className="photo-viewer">        
            {images}
        </div>
    );
}