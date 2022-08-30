import React from "react";  
import "./SelectedImage.css"


export function SelectedImage({selectedImage} : {selectedImage: string}) {  
    return (                
        <div>
            <img src = {selectedImage} className = 'bigimage'></img>
        </div>
    );
}

