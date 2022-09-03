import React, { useState } from 'react'
import LetterPage from './components/LetterPage';
import './App.css';

function App() {
  const [isLetterOpen, setLetterOpen] = useState(false)
  const [isEnvelopeOpen, setEnvelopeOpen] = useState(false)

  return (
    <div className="App">
      { isLetterOpen ?
      <LetterPage />
      :
      <div>
        <div className='envelope-container'>
          <div className="wrapper" onClick={() => setEnvelopeOpen(true)}>
            <div className="lid one"></div>
            <div className="lid two"></div>
            <div className="envelope"></div>
            <div className="letter">
              <h1>Hi, Meryll Louise</h1>
              <p>I love you with all my heart <strong className="heart">&#x2764;</strong></p>
              <p>This message is for you only, sana magustuhan mo. Basta don't cry while reading this ha? Ang purpose lang ng letter na to is pakiligin ka.</p>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>
          </div>
          { !isEnvelopeOpen && <h1 className='instruction'>Click envelope to open, a button will appear.</h1>}
          { isEnvelopeOpen && <div className="btn" onClick={() => setLetterOpen(true)}>Read All</div>}
        </div>
      </div>
      }
    </div>
  );
}

export default App;
