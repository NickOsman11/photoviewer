import React from "react";  
import "./PhotoViewer.css"
import { imageUrls } from '../assets/imageURLs'

export function PhotoViewer() {

    const images: JSX.Element[] = []
    {imageUrls.forEach(url => {
      images.push(<div className="image-box">  
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