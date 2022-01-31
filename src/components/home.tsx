import "./assets/css/home.css";
import neespng from "./assets/images/asfdasdf.png";

const Home = () => {
	const randomcolorcode = () => {
		let n = (Math.random() * 0xfffff * 1000000).toString(16);
		return "#" + n.slice(0, 6);
	};
	function MouseOver(event: any) {
		event.target.style.color = randomcolorcode();
	}
	function MouseOut(event: any) {}
	const letterclicked = (e: any) => {
		e.target.style.color = "#0d1117";
		e.target.style.WebkitTextStrokeColor = "none";
	};

	return (
		<>
			<div className='home-container'>
				<div className='left-home'>
					<div className='txt'>
						<span>I 'm,</span>
						<span className='name'>
							<span
								onMouseOver={MouseOver}
								onMouseOut={MouseOut}
								onClick={(e) => {
									letterclicked(e);
								}}
								className='letter'>
								N
							</span>
							<span
								onMouseOver={MouseOver}
								onMouseOut={MouseOut}
								onClick={(e) => {
									letterclicked(e);
								}}
								className='letter'>
								E
							</span>
							<span
								onMouseOver={MouseOver}
								onMouseOut={MouseOut}
								onClick={(e) => {
									letterclicked(e);
								}}
								className='letter'>
								E
							</span>
							<span
								onMouseOver={MouseOver}
								onMouseOut={MouseOut}
								onClick={(e) => {
									letterclicked(e);
								}}
								className='letter'>
								S
							</span>
							<span
								onMouseOver={MouseOver}
								onMouseOut={MouseOut}
								onClick={(e) => {
									letterclicked(e);
								}}
								className='letter'>
								C
							</span>
							<span
								onMouseOver={MouseOver}
								onMouseOut={MouseOut}
								onClick={(e) => {
									letterclicked(e);
								}}
								className='letter'>
								H
							</span>
							<span
								onMouseOver={MouseOver}
								onMouseOut={MouseOut}
								onClick={(e) => {
									letterclicked(e);
								}}
								className='letter'>
								A
							</span>
							<span
								onMouseOver={MouseOver}
								onMouseOut={MouseOut}
								onClick={(e) => {
									letterclicked(e);
								}}
								className='letter'>
								L
							</span>
						</span>
						<span>Dahal</span>
					</div>
				</div>
				<div className='right-home'>
					<img className='right-image' src={neespng} alt='' />
				</div>
			</div>
		</>
	);
};

export default Home;
