import './About.css'

const About = () => {
    return (
        <>
            <div id="about" className="about-container">
                <div className="about-wrapper">
                    <div className="about-row">
                        <h2 className="about-headline">about me:</h2>
                        <img src="./images/self-portrait-2021-square-1-opt.jpg" alt="Self Portrait" className="about-img" height="200px" width="200px"/>
                        <p className="about-description">Originally from Northern California.  BFA in photography from Art Center College of Design.  Then later decided to become a Developer.  A foodie, enjoys daytrip adventures, and loves nba basketball.</p>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default About
