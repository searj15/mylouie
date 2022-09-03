import React, { useState } from 'react'
import LetterPage from './components/LetterPage';
import './App.css';

function App() {
  const [isLetterOpen, setLetterOpen] = useState(false)

  return (
    <div className="App">
      { isLetterOpen ?
      <LetterPage />
      :
      <div>
        <div className='envelope-container'>
          <div className="wrapper">
            <div className="lid one"></div>
            <div className="lid two"></div>
            <div className="envelope" onClick={() => setLetterOpen(true)}></div>
            <div className="letter">
              <h1>Hi, Meryll Louise</h1>
              <p>I love you with all my heart <strong className="heart">&#x2764;</strong></p>
              <div className="btn">Read All</div>
            </div>
          </div>
          <h1 className='instruction'>Hold to open, then click the button to see all content</h1>
        </div>
      </div>
      }
    </div>
  );
}

export default App;
