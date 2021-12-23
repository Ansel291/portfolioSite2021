import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { useState } from 'react'
import HeroSection from '../HeroSection';
import WorkSection from '../WorkSection';
import About from '../About';
import Contact from '../Contact';
import Footer from '../Footer';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const clickHandler = () => {
        setIsOpen(!isOpen)
    }
    
    {/* const toggledClass = isOpen ? 'sidebar-container' : 'sidebar-container hide-sidebar-container'  */}

    return (
        <>
            <Sidebar clickHandler={clickHandler} isOpen={isOpen}/>
            <Navbar clickHandler={clickHandler} />
            <HeroSection />
            <WorkSection />
            <About />
            <Contact />
            <Footer />
        </>
    )
}

export default Home
