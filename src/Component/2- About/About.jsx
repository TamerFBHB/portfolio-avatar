
import "./About.scss";
import { MdVerified } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import devAnimation from './dev.json'
import Lottie from "lottie-react";
// import avatar from "../../images/me.jpg";


const About = () => {
    return (
        <div className="About" id="About">
            <div className="info ">
                <div className="foto ">
                    <img src="../../images/me.jpg" alt="" />
                    <MdVerified className="icon-ali" />
                </div>
                <h1 >Software designer, founder, and amateur astronaut.</h1>
                <p>iam Ali Hassan, a software designer and entrepreneur based in New York City. Iam the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.</p>
                <div className="social">
                    < FaSquareXTwitter className="icon-social" />
                    < FaInstagramSquare className="icon-social" />
                    < FaGithub className="icon-social" />
                    < FaLinkedin className="icon-social" />
                </div>
            </div>
            <div className="animation ">
                <Lottie
                className=" "
                    animationData={devAnimation}
                />
            </div>
        </div>
    );
}

export default About;
