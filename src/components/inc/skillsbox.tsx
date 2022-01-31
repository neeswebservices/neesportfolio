type skillprops = {
	lang: string;
	percent: number;
	background: string;
};

const Skillbox = (props: skillprops) => {
	const skillstyle = {
		background: props.background,
		width: `${props.percent}%`,
	};

	return (
		<div className='skill-container'>
			<div className='top'>
				<span>{props.lang}</span>
				<span>{props.percent}%</span>
			</div>
			<div className='bottom'>
				<div style={skillstyle} className='inner'></div>
			</div>
		</div>
	);
};

export default Skillbox;
