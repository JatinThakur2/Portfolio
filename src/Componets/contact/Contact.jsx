import "./contact.scss"
import emailjs from "emailjs-com";



export default function Contact() {
    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_knlpirc', 'template_o5kdr7f', e.target, 'user_cG6AR5EZzAOISW1CTApsZ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            
            </div>
            <div className="right">
                    <h2>Contact</h2>
            <form onSubmit={sendEmail}>
                            <input type="text" placeholder="Name" name="name"/>
                            <input type="email" placeholder="Email Address" name="email"/>
                            <input type="text" placeholder="Subject" name="subject"/> 
                            <textarea placeholder="Your message" name="message"></textarea>
                            <button type="submit" className="btn" value="">Send Message</button>                       
                </form>
     
                </div>
        </div>
    )
}
