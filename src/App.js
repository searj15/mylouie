import React, { useState } from 'react'
import LetterPage from './components/LetterPage';
import './App.css';

function App() {
  const [isLetterOpen, setLetterOpen] = useState('message')
  const [isEnvelopeOpen, setEnvelopeOpen] = useState(false)
  // const [isAbsBtn, setAbsBtn] = useState(false)
  const [counter, setCounter] = useState(0)

  const getRandomPositon = () => {
    
    const min = Math.ceil(-200);
    const max = Math.floor(70);
    const rand1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const rand2 = Math.floor(Math.random()*(-300 - 100) + 1)
    return {
      rand1,
      rand2
    }
  }
  
  const setButtonPosition = (type) => {
    const {
      rand1,
      rand2
    } = getRandomPositon()
    const btnNo = document.getElementById(type)
    btnNo.style.transform = `translate(${rand1}px, ${rand2}px)`;
    if (type === '_yes') {
      setCounter(counter + 1)
    }
    if (counter > 10) setLetterOpen('surprise')
  }



  return (
    <div className="App">
     
      {
        isLetterOpen === 'letter' && <LetterPage />
      }
      
      { isLetterOpen === 'envelope' &&
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
              </div>
            </div>
            { !isEnvelopeOpen && <h1 className='instruction'>Click envelope to open, a button will appear.</h1>}
            { isEnvelopeOpen && <div className="btn" onClick={() => setLetterOpen('letter')}>Read All</div>}
          </div>
        </div>
      }

      {
        isLetterOpen === 'message' &&
        <div className='envelope-container'>
          <h2 className='display-message'>Do you love me?</h2>
          <div className='btn-container'>
            {
              // isAbsBtn &&
              // <div id='_abs' className="btn btn-yes" onClick={() => setLetterOpen('surprise')}>ABSOLUTELY! ❤️</div>
            }
            <div id='_yes' className="btn btn-yes" onClick={() => setButtonPosition('_yes')}>YES ❤️</div>
            <div id='_no' className="btn btn-no" onClick={() => setButtonPosition('_no')}>NO! &#128148; </div>
          </div>
        </div>
      }

      { isLetterOpen === 'surprise' &&
        <div className='envelope-container'>
          <h2 className='display-message' style={{ width: '300px' }}>Mahal na mahal na mahal na mahal mo ako ah? ❤️</h2>
          <div className='btn-container'>
            <div id='_yes' className="btn btn-yes" onClick={() => setLetterOpen('envelope')}>NAMAN !!! ❤️</div>
          </div>
        </div>
      }
    
    </div>
  );
}

export default App;
