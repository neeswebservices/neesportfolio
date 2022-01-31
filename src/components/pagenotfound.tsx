import "./assets/css/pagenotfound.css";
import { Link } from "react-router-dom";

function Pagenotfound() {
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
		<div className='pagenotfound'>
			<span className='name'>
				<span
					className='letter'
					onMouseOver={MouseOver}
					onMouseOut={MouseOut}
					onClick={(e) => {
						letterclicked(e);
					}}>
					4
				</span>
				<span
					className='letter'
					onMouseOver={MouseOver}
					onMouseOut={MouseOut}
					onClick={(e) => {
						letterclicked(e);
					}}>
					0
				</span>
				<span
					className='letter'
					onMouseOver={MouseOver}
					onMouseOut={MouseOut}
					onClick={(e) => {
						letterclicked(e);
					}}>
					4
				</span>
			</span>
			<h3 className='sm-tx'>Page Not found</h3>

			<h5 className='notfound'>
				The requested url is not found in our server !!!
			</h5>
			<Link to='/' className='go-home-btn'>
				{" "}
				Go Home
			</Link>
		</div>
	);
}

export default Pagenotfound;
