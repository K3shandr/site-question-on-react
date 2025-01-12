import { useState } from 'react'
import './App.css'
import QuestionWindow from './components/QuestionWindow/QuestionWindow'

function App() {

  const [flag,setFlag] = useState(0)

  const triggerWindow = () => {
    setFlag(1)
  }

  const triggerWindow2 = () => {
    setFlag(2)
  }

  return (
    <div className='question-div'>
        <p>вопрос</p>
        <div className='buttons'>
            <button onClick={triggerWindow}>da</button>
            <button onClick={triggerWindow2}>net</button>
        </div>
        <QuestionWindow flag = {flag} />
    </div>
  )
}

export default App
