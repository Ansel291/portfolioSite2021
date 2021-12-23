import './Navbar.css';
import { FaBars } from 'react-icons/fa'
import { Link as LinkR} from 'react-router-dom'
/* import { Link as LinkNav} from 'react-router-dom' */ 
import { Link as LinkS } from 'react-scroll'
import {IconContext } from 'react-icons/lib'
import { animateScroll as scroll} from 'react-scroll'

const Navbar = ({clickHandler}) => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#999' }}>
                <div className="navbar"> 
                    <div className="navbar-container">
                        <LinkR to="/" className="navbar-logo-r" onClick={toggleHome} >
                            jason asahara
                        </LinkR>
                        <div onClick={clickHandler} className="mobile-icon">
                            <FaBars />
                        </div>
                        <ul className="nav-menu">
                        <li className="nav-item">
                                <LinkS to="home" className="nav-links" smooth={true} duration={500} spy={true} exact='true' offset={-76} >jason asahara</LinkS>
                            </li>
                            <li className="nav-item">
                                <LinkS to="work" className="nav-links" smooth={true} duration={500} spy={true} exact='true' offset={-25} >work</LinkS>
                            </li>
                            <li className="nav-item">
                                <LinkS to="about" className="nav-links" smooth={true} duration={500} spy={true} exact='true' offset={-25} >about</LinkS>
                            </li>
                            <li className="nav-item">
                                <LinkS to="contact" className="nav-links" smooth={true} duration={500} spy={true} exact='true'>contact</LinkS>
                            </li>
                        </ul>
                        
                        <div className="nav-btn">
                            <LinkR to="/signin" className="nav-btn-link">sign in</LinkR>
                        </div>
                        
                    </div>
                </div>
            </IconContext.Provider>
            
        </>
    )
}
 
export default Navbar
