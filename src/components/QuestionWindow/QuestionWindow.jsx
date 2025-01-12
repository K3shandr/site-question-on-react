import Button from '../Button/Button'
import './QuestionWindow.css'

function QuestionWindow(){
    return(
    <div className='question-div'>
        <p>are you bibizyan?</p>
        <div className='buttons'>
            <Button buttonItem ='da'/>
            <Button buttonItem ='ne'/>
        </div>
    </div>
    )
}

export default QuestionWindow