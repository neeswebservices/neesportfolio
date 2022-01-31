import "./assets/css/service.css";
import ServiceBox from "./inc/servicebox";

const Service = () => {
	let servicedetail = [
		{
			icon: "fas fa-globe",
			title: "web development",
			details:
				"Do you want to make websites ? do you want to design some portfolio ? if then feel free to contact me I will provide you in best offers !",
		},
		{
			icon: "fas fa-video",
			title: "Video Editing",
			details:
				"Are you searching for your project video editor ? I can help you with video editing and editing your video in best way !",
		},
		{
			icon: "fas fa-mobile-alt",
			title: "App Development",
			details:
				"If you Are looking for app developer ? I can help you with app development and design your app in best way with best ideas and UI !",
		},
		{
			icon: "fab fa-youtube",
			title: "Content Creator",
			details:
				"Hey i am youtuber too, you can watch my free content tutorials videos on youtube !",
		},
		{
			icon: "fab fa-grav",
			title: "Graphics Designer",
			details:
				" I can help you by designing awesome graphics included 3d models , illustrations, photo editing, and UI design !",
		},
		{
			icon: "fas fa-funnel-dollar",
			title: "Digital Marketing",
			details:
				"I can help you with digital marketing and social media marketing by different Protocols !",
		},
	];

	return (
		<div className='service'>
			<div className='service-box'>
				<div className='service-title'>
					<h2 className='service-title'>Our Services</h2>
				</div>

				<div className='servicemainbox'>
					{servicedetail.map((item, index) => {
						return (
							<ServiceBox
								detail={item.details}
								icon={item.icon}
								title={item.title}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Service;
