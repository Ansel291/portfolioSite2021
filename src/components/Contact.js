import './Contact.css'
import {FaGithubSquare, FaLinkedin, FaPhoneSquareAlt} from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md';
import {IconContext } from 'react-icons/lib'

function Contact() {
    return (
        <>
            <IconContext.Provider value={{ color: '#ba332e', size: '.95em' }}>
                <div id="contact" className="contact-container">
                    <div className="contact-wrapper">
                        <div className="contact-row">
                            <h2 className="contact-headline">Los Angeles, CA</h2>
                            <ul className="contact-ul">
                                <li className="contact-li"><a href="tel:+13109099358" className="contact-a"><FaPhoneSquareAlt /><p className="contact-p">310-909-9358</p></a></li>
                                <li className="contact-li"><a href="mailto:jasahara@yahoo.com" className="contact-a">< MdOutlineEmail /><p className="contact-p">jasahara@yahoo.com</p></a></li>
                                <li className="contact-li"><a href='https://github.com/Ansel291' target="_blank" rel="noreferrer" className="contact-a"><FaGithubSquare /><p className="contact-p">GitHub</p></a></li>
                                <li className="contact-li"><a href='https://www.linkedin.com/in/jasahara/' target="_blank" rel="noreferrer" className="contact-a"><FaLinkedin /><p className="contact-p">LinkedIn</p></a></li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </IconContext.Provider> 
        </>
    )
}

export default Contact
