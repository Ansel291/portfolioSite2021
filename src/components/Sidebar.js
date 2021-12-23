import './Sidebar.css';
import { Link as LinkS } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({isOpen, clickHandler}) => {

    return (
        <>
            <aside className={isOpen ? 'sidebar-container' : 'sidebar-container hide-sidebar-container'}>
                <div onClick={clickHandler} className="sidebar-icon">
                    <FaTimes className="sidebar-close-icon" />
                </div>
                <div className="sidebar-wrapper">
                    <div className="sidebar-menu">
                        <LinkS to="home" onClick={clickHandler} className="sidebar-link-s" exact='true' offset={-76} >
                            home
                        </LinkS>
                        <LinkS to="work" onClick={clickHandler} className="sidebar-link-s" exact='true' offset={-25} >
                            work
                        </LinkS>
                        <LinkS to="about" onClick={clickHandler} className="sidebar-link-s" exact='true' offset={-25} >
                            about
                        </LinkS>
                        <LinkS to="contact" onClick={clickHandler} className="sidebar-link-s" exact='true'>
                            contact
                        </LinkS>
                    </div>
                    <div className="side-btn-wrap">
                        <a href="tel:+13109099358" onClick={clickHandler} className="sidebar-link-r">call us</a>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Sidebar
