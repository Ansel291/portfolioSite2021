import './WorkSection.css';
import WorkCard from './WorkCard';
import Data from '../Data'

function WorkSection() {
    return (
        <>
            <div id="work" className="work-container">
                <div className="work-wrapper">
                    <div className="work-row-1">
                        <h1 className="work-headline">work:</h1>
                    </div>
                    {Data.map((item, index) => (
                        <WorkCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default WorkSection
