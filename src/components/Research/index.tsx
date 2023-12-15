const Research = () => {
    return (
        <div id="forks" style={{ display: 'block' }}>
            <h1>research and poc.</h1>
            <div className="projects" id="forks_section">
                <a href="https://drive.google.com/file/d/1vcyO86G6LAzNFWr9SfwEWYg2lSHJ86Uo/view?usp=sharing" target="_blank" rel="noreferrer">
                    <section>
                        <div className="section_title">
                            <span className="alignleft">Dimensionality and Balance</span>
                            <span className="alignright">→</span>
                        </div>
                        <div className="about_section_OS">
                            <span style={{ display: 'block' }}>This study conducts a comprehensive analysis of machine learning model performance 
                            across varied data scenarios, focusing on the challenges of high-dimensional data and class imbalance.</span>
                        </div>
                    </section>
                </a>
                <a href="https://github.com/keyurkhant/module-federation-using-react-v2" target="_blank" rel="noreferrer">
                    <section>
                        <div className="section_title">
                            <span className="alignleft">Module Federation</span>
                            <span className="alignright">→</span>
                        </div>
                        <div className="about_section_OS">
                            <span style={{ display: 'block' }}>
                                This proof of concepts includes Module Federation in the context of Micro Frontends, 
                                emphasizing its role in facilitating seamless integration of independently developed frontend applications. 
                                It delves into the utilization of Module Federation, a key feature of the Webpack bundler, 
                                to enable distinct frontend teams to autonomously build and deploy segments of a web application.</span>
                        </div>
                    </section>
                </a>
            </div>
        </div>
    )
}

export default Research;