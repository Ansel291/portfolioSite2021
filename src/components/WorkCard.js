import './WorkCard.css'
import { FaGithubSquare } from 'react-icons/fa'
import {IconContext } from 'react-icons/lib'


const WorkCard = ({item: {title, description, tools, altSide, mainClass,sideImage, projectUrl, github, ctaColor} }) => {
    return (
        <>
            <IconContext.Provider value={{ className: "github-icon", size: '2em' }}>
                <div className="work-row-2">
                    <div className={`main-img-background ${mainClass}`}></div>
                </div>
                <div className="work-row-3">
                    <div className="work-col-1">
                    <img className="side-image" src={sideImage} alt={altSide} />
                    </div>
                    <div className="work-col-2">
                        <h1 className="work-title">{title}</h1>
                        <p className="work-description">{description}</p>
                        <h2 className="work-tools-title">tools used:</h2>
                        <p className="work-tools-description">{tools}</p>
                        <div className="project-link-wrapper">
                            <a href={projectUrl} target="_blank" className={ctaColor} rel="noreferrer">visit site</a>
                        </div>
                        <div className="github-link-wrapper">
                            <a href={github} target="_blank" className="github-link" rel="noreferrer"><FaGithubSquare/></a>
                        </div>
                    </div>
                </div>  
            </IconContext.Provider>
        </>
    )
}

export default WorkCard
