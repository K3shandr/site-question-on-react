import { useState } from 'react'
import './App.css'
import QuestionWindow from './components/QuestionWindow/QuestionWindow'


function App() {

  const [flag,setFlag] = useState(0)

  const [width,setWidth] = useState('20px')

  const triggerWindow = () => {
    setFlag(1)
  }

  const triggerWindow2 = () => {
    setWidth(`${2*Math.random()*100}px`)
    setFlag(2)
  }

  const triggerWindow3 = () => {
    setFlag(3)
  }

  return (
    <div className='question-div'>
        <QuestionWindow flag = {flag} />
        <div className='buttons'>
            <button onClick={triggerWindow}>da</button>
            <button onMouseEnter={triggerWindow2} style={{ left:[width],top:[width]}}>net</button>
            
        </div>
        
        <button className='bottom-button' onClick={triggerWindow3}>сброс</button>
        
    </div>
  )
}

export default App
