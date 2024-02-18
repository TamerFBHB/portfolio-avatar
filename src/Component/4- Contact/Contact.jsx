import Lottie from "lottie-react";
import ContactForm from "../4-ContactForm/ContactForm";
import contactAnimation from './contact.json'
import "./Contact.scss"

const Contact = () => {
    return (
        <div className="contact" id="Contact">
            <div className="contactForm">
                <ContactForm />
            </div>
            <div className="animation">
                <Lottie
                    className="contact-animation"
                    style={{ height: 355 }}
                    animationData={contactAnimation}
                />
            </div>
        </div>
    );
}

export default Contact;
