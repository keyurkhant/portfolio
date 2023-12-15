const Docs = () => {
    return (
        <>
            <div id="forks" style={{ display: 'block' }}>
                <h1>docs.</h1>
                <div className="projects" id="forks_section">
                    <a href="https://drive.google.com/file/d/1zCwLxHKbeDilMyvmFIj0GegdcJCEef4Y/view?usp=drive_link" target="_blank" rel="noreferrer">
                        <section>
                            <div className="section_title">📄 Résumé</div>
                            <div className="about_section_OS">
                                <span style={{ display: 'block' }}>A little about me.</span>
                            </div>
                            <div className="bottom_section">
                                <span><i className="far fa-file-pdf"></i>&nbsp;</span>
                            </div>
                        </section>
                    </a>
                    {/* <a href={coverLetter} target="_blank" rel="noreferrer">
                        <section>
                            <div className="section_title">📝 Cover Letter</div>
                            <div className="about_section_OS">
                                <span style={{ display: 'block' }}>Letter of interest.</span>
                            </div>
                            <div className="bottom_section">
                                <span><i className="far fa-file-pdf"></i>&nbsp;</span>
                            </div>
                        </section>
                    </a> */}
                </div>
            </div>
        </>
    )
}

export default Docs;