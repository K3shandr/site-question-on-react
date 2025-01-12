import './QuestionWindow.css'

function QuestionWindow({flag}){

    if (flag == 1) {
        return (
            <>
                <p>Спасибо за честни ответ</p>
            </>
        )
    }
    if (flag == 2) {
        return (
            <>
            <p>Врешь</p>
            </>
        )
    }


}

export default QuestionWindow