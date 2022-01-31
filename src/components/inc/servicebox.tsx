type serviceprops = {
	icon: string;
	title: string;
	detail: string;
};

const ServiceBox = (props: serviceprops) => {
	return (
		<div className='service-single-box'>
			<div className='service-icon'>
				<i className={props.icon}></i>
			</div>
			<div className='text'>{props.title}</div>
			<p className='detail'>{props.detail}</p>
		</div>
	);
};

export default ServiceBox;
