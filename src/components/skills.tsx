import "./assets/css/skill.css";
import Skillbox from "./inc/skillsbox";

const Skills = () => {
	return (
		<>
			<div className='skills'>
				<div className='bm'>
					<div className='text-skill'>
						<h2 className='skill-title'>My Skills and Experiences </h2>
						<hr />
						<br />
						<p>
							IF you are searching for the Guy who knows the web development ,
							Video editing , game development , advertiser , 3d modiling and
							other tech .. I am working and learning more technology ! ~ if you
							have any doubts and question , feel free to contact me .
						</p>
					</div>
					<div className='skills-box'>
						<Skillbox lang='HTML' background='#E45126' percent={90} />
						<Skillbox lang='CSS / SCSS' background='royalblue' percent={95} />
						<Skillbox lang='JS' background='#E3A324' percent={80} />
						<Skillbox lang='PHP' background='#6D7EB8' percent={85} />
						<Skillbox lang='PYTHON' background='#30DD6D' percent={60} />
						<Skillbox lang='C#' background='#A179DC' percent={50} />
						<Skillbox lang='C' background='#5766B4' percent={60} />
						<Skillbox lang='DART' background='#00BAAA' percent={70} />
						<Skillbox lang='TYPESCRIPT' background='#007ACC' percent={60} />
						<Skillbox lang='REACT' background='#00CDF2' percent={70} />
						<Skillbox lang='NEXT JS' background='#1A3B5F' percent={50} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Skills;
