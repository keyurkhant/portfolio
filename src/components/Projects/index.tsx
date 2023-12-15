const Projects = () => {
    return (
        <div id="work">
            <h1>projects.</h1>
            <div className="projects" id="work_section">
                <a href="https://github.com/keyurkhant/gitcolab" target="_blank" rel="noreferrer">
                    <section>
                        <div className="section_title">
                            <span className="alignleft">GitColab 🚀</span>
                            <span className="alignright">→</span>
                        </div>
                        <div className="about_section">
                            <span style={{ display: 'block' }}>An integration platform for github and atlassian for better productivity of open source contributors.</span>
                        </div>
                    </section>
                </a>
                <a href="https://github.com/keyurkhant/OCR-Form-Processor" target="_blank" rel="noreferrer">
                    <section>
                        <div className="section_title">
                            <span className="alignleft">OCR Form Processor 📝</span>
                            <span className="alignright">→</span>
                        </div>
                        <div className="about_section">
                            <span style={{ display: 'block' }}>Optical Character Recognition using Google Vision API and Python (Flask) for medical patient diagnosis report.</span>
                        </div>
                    </section>
                </a>
                <a href="https://github.com/keyurkhant/automated-load-tester" target="_blank" rel="noreferrer">
                    <section>
                        <div className="section_title">
                            <span className="alignleft">Automated Load Tester 📈</span>
                            <span className="alignright">→</span>
                        </div>
                        <div className="about_section">
                            <span style={{ display: 'block' }}>Automated load testing mechanism for large scaled headless content management APIs using Playwright, Loader.io and Datadog.</span>
                        </div>
                    </section>
                </a>
                <a href="https://github.com/keyurkhant/AgricultureAutomation" target="_blank" rel="noreferrer">
                    <section>
                        <div className="section_title">
                            <span className="alignleft">Agriculture Automation 🌱</span>
                            <span className="alignright">→</span>
                        </div>
                        <div className="about_section">
                            <span style={{ display: 'block' }}>Crop yield prediction and IoT integration tool.</span>
                        </div>
                    </section>
                </a>
                <a href="https://github.com/keyurkhant/dal-hours-server" target="_blank" rel="noreferrer">
                    <section>
                        <div className="section_title">
                            <span className="alignleft">DalHours 🕙</span>
                            <span className="alignright">→</span>
                        </div>
                        <div className="about_section">
                            <span style={{ display: 'block' }}>An mobile application prototype of timesheet management for teaching assistants/markers in Dalhousie University.</span>
                        </div>
                    </section>
                </a>
            </div>
        </div>
    )
}

export default Projects;