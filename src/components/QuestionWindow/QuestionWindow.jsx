import { useState } from 'react'
import './QuestionWindow.css'

function QuestionWindow(){

    const [displayText,SetDisplayText] = useState('Вы макак?')

    const triggerWindow = () => {
        SetDisplayText('Спасиб)')
    }

    return(
    <div className='question-div'>
        <p>{displayText}</p>
        <div className='buttons'>
            <button onClick={triggerWindow}>da</button>
            <button>net</button>
        </div>
    </div>
    )
}

export default QuestionWindow