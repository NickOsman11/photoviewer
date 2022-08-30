import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {PhotoViewer} from './PhotoViewer/PhotoViewer'
import {ImageSelector} from './ImageSelector/ImageSelector'
import { imageUrls } from './assets/imageURLs'


function App() {

  const [selectedImage, setSelectedImage] = useState(imageUrls[0]);

  return (
    <main>
      <h1>React Photo Viewer</h1>
      <ImageSelector selectedImage={selectedImage} />
      <PhotoViewer setSelectedImage={setSelectedImage}/>
      

    </main>
  )
}

export default App
