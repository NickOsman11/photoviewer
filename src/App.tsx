import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {PhotoViewer} from './PhotoViewer/PhotoViewer'
import {ImageSelector} from './ImageSelector/ImageSelector'
import { imageUrls } from './assets/imageURLs'


function App() {


  return (
    <div className="App">
      <h1>React Photo Viewer</h1>
      <main>
        <ImageSelector/>
        <PhotoViewer/>
      </main>

    </div>
  )
}

export default App
