import './Question.css';

function Question({flag}) {

	if (flag == 1) {
		return (
			<p>Верю</p>
		);
	}
	if (flag == 2) {
		return (
			<p>Врешь</p>
		);
	} 

	return (
		<p>Вы манки?</p>
	);





}

export default Question;