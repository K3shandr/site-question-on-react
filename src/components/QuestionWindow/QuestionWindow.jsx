import Question from '../Question/Question';
import './QuestionWindow.css';
import { useState } from 'react';

function QuestionWindow(){
	const [flag,setFlag] = useState(0);

	const [left,setLeft] = useState('0px');
	const [top,setTop] = useState('0px');

	const triggerWindow = () => {
		setFlag(1);
	};

	const triggerWindow2 = () => {
		setLeft(`${Math.random()*600-300}px`);
		setTop(`${Math.random()*600-300}px`);
		setFlag(2);
	};
 
	const triggerWindow3 = () => {
		setFlag(3);
		setLeft('0px');
		setTop('0px');
	};
	if (flag === 1) {
		return(
			<>
				<Question flag = {flag}/>
				<button className='bottom-button' onClick={triggerWindow3}>сброс</button>
			</>
		);
	}
	return(
		<>
			<Question flag = {flag}/>
			<div className='buttons'>
				<button className='button-question' onClick={triggerWindow}>da</button>
				<button className='button-question' onMouseEnter={triggerWindow2} style={{ left:[left],top:[top]}}>net</button>
			</div>
		</>
	);
}

export default QuestionWindow;