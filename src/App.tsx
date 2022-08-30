import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {ImageMenu} from './ImageMenu/ImageMenu'
import {SelectedImage} from './SelectedImage/SelectedImage'
import { imageUrls } from './assets/imageURLs'



function App() {

  const [selectedImage, setSelectedImage] = useState(imageUrls[0])

  return (
    <div className="App">
      <h1>React Photo Viewer</h1>
      <main>
        <SelectedImage selectedImage = {selectedImage}/>
        <ImageMenu setSelectedImage =  {setSelectedImage} selectedImage = {selectedImage}/>
      </main>
    </div>
  )
}

export default App
