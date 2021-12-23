import './Footer.css'

function Footer() {
    return (
        <>
            <div id="footer" className="footer-container">
                <div className="footer-wrapper">
                    <div className="footer-row">
                        <div className="footer-description">Created by <span className="footer-description-span">Jason Asahara</span>  Copyright {new Date().getFullYear()}</div>
                    </div>
                </div>
            </div>    
        </>
    )
}

export default Footer
