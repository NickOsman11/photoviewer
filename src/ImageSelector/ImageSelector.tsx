import React from "react";  
import "./ImageSelector.css"
import { imageUrls } from '../assets/imageURLs'


export function ImageSelector({selectedImage}: {selectedImage: string}) {  

    return (                
        <div>
            <img src={selectedImage}></img>
        </div>
    );
}

