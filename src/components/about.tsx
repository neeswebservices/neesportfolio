import "./assets/css/about.css";

const About = () => {
	const downloadresume = () => {
		const a = Object.assign(document.createElement("a"), {
			href: "./assets/images/nees.jpg",
			download: "neesresume.jpg",
			style: { display: "none" },
		});
		a.click();
		a.remove();
	};
	return (
		<>
			<div className='about'>
				<h2 className='header-title'> About Me</h2>
				<h5 className='chiron-text'>
					<img
						className='avtar-img'
						src='https://lh3.googleusercontent.com/TF9zUE-kJf6XWO3lyZ7JONjQ5X73m-z4AQnXveic-KO6NxGQ46mD3QwDig-NSzRjw6mdN_OPFjAoc7eCYuLUIik6leDd1E4=s160'
						alt=''
					/>
					techneesofficial/README.md
				</h5>
				<h2 style={{ margin: "20px auto" }}>
					Hey Folks !!{" "}
					<img
						style={{ width: "50px", margin: "auto 15px" }}
						src='https://camo.githubusercontent.com/15e3210e72e50f62f0e00f1d9a7a8d6af11e0c299abef5203dd6337f50f90d51/68747470733a2f2f6d656469612e74656e6f722e636f6d2f696d616765732f32616466653934653639313339663365323236323362363164333735613761372f74656e6f722e676966'
						alt=''
					/>
				</h2>
				<hr />
				<h2 style={{ color: "lime", margin: "30px auto" }}>
					{" "}
					I am Neeschal Dahal, from Dolakha !{" "}
				</h2>
				<div className='center-container' style={{ textAlign: "center" }}>
					Tech Hunter from Nepal , who is learning App Development, Ethical
					Hacking, Web Development ..
				</div>
				<h2>
					Hi there
					<img
						style={{ width: "50px", margin: "auto 15px" }}
						src='https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif'
						alt=''
					/>
					you will know about me here !
				</h2>
				<div className='about-me'>
					<ul className='data-list'>
						<li>
							🔭 I don't want you to know what I am working on , it's super
							secret .. '!
						</li>
						<li>
							My web service{" "}
							<a className='tag' href='https://neeswebservices.business.site'>
								{" "}
								Nees web service
							</a>
						</li>

						<li>💬 Ask me about typescript, dart, cpp , python</li>
						<li>
							📫 My contact email <strong>officialneeschalyt@gmail.com</strong>
						</li>
						<li>
							⚡ Fun fact{" "}
							<strong>
								Basically programmers don't have girlfriend but I do :)
							</strong>
						</li>
					</ul>
				</div>
				<img
					src='https://camo.githubusercontent.com/6b49c47ac2d67a03690ba417cf297e2253d9ba5fc3c4462bea1376280defc828/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d6e6565737765627365727669636573266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174'
					alt=''
				/>
				<div className='images'>
					<div className='img-container'>
						<img
							className='git-img'
							src='https://github-readme-stats.vercel.app/api?username=techneesofficial17'
							alt=''
						/>
					</div>

					<div className='img-container'>
						<img
							className='git-img'
							src='https://github-readme-stats.vercel.app/api?username=techneesofficial17&show_icons=true&theme=onedark'
							alt=''
						/>
					</div>
				</div>
				<div className='download'>
					<button onClick={downloadresume} className='button'>
						{" "}
						<i className='fas fa-download'></i> Download Resume
					</button>
				</div>
			</div>
		</>
	);
};

export default About;
