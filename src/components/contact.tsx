import { useState } from "react";
import "./assets/css/contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
	let sociallinks = [
		{
			name: "fab fa-facebook-f",
			link: "https://www.facebook.com/techneesofficial17/",
			color: "royalblue",
		},
		{
			name: "fab fa-instagram",
			link: "https://www.instagram.com/tech_nees_official/",
			color: "golden",
		},
		{
			name: "fab fa-github",
			link: "https://github.com/techneesofficial17",
			color: "purple",
		},
		{
			name: "fas fa-globe",
			link: "https://neeswebservices.business.site/",
			color: "black",
		},
		{
			name: "fab fa-linkedin-in",
			link: "https://np.linkedin.com/in/techneesofficial17",
			color: "blue",
		},
		{
			name: "fab fa-twitter",
			link: "https://twitter.com/neeschalyt",
			color: "royalblue",
		},
		{
			name: "fas fa-mug-hot",
			link: "buymeacoffee.com/neesofficial",
			color: "brown",
		},
	];

	const [alert, setAlert] = useState({
		type: "",
		message: "",
	});

	const sendMail = (e: any) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_x5b4ci6",
				"template_3laq0yq",
				e.target,
				"user_nCQ7mULE5I2PAL5XvoZmS"
			)
			.then(() => {
				setAlert({
					type: "alert-s",
					message: "Message sent successfully",
				});

				setTimeout(() => {
					setAlert({
						type: "",
						message: "",
					});
				}, 3000);
				e.target.reset();
			})
			.catch((err) => {
				setAlert({
					type: "alert-d",
					message: "Failed to send Message , Try again !!",
				});

				setTimeout(() => {
					setAlert({
						type: "",
						message: "",
					});
				}, 3000);
			});
	};

	return (
		<>
			<div className='contact'>
				<div className='contactbox'>
					<form
						onSubmit={(e) => {
							sendMail(e);
						}}>
						<div className='form-group'>
							<div className={alert.type}>{alert.message}</div>
						</div>
						<div className='form-group'>
							<label htmlFor='email' className='form-label'>
								Email address
							</label>
							<input
								required
								id='email'
								className='form-control'
								type='email'
								placeholder='test@example.com'
								name='email'
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='name' className='form-label'>
								Name
							</label>
							<input
								required
								id='name'
								className='form-control'
								placeholder='hecker cat'
								type='name'
								name='name'
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='Message' className='form-label'>
								Message
							</label>
							<textarea
								required
								className='form-control txtmsg'
								placeholder='hello i love hecker'
								name='message'></textarea>
						</div>

						<div className='form-group'>
							<input className='submitbutton' type='submit' value='Say Hello' />
						</div>
					</form>
					<div className='sociallinks'>
						{sociallinks.map((l) => (
							<a href={l.link} rel='noopener' className='sociallinkbtn'>
								<i style={{ color: l.color }} className={`fab ${l.name}`}></i>
							</a>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
