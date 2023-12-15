const Profile = () => {
    return (
        <>
            <div id="profile">
                <div id="username">
                    <span style={{ display: 'block' }}>Hey there 👋🏽</span>
                </div>
                <div id="about">
                    <p>I'm Keyur Khant. I'm pursuing masters in applied computer science from
                        <a href="https://www.dal.ca/" target="_blank" rel="noreferrer"> Dalhousie University</a>.
                    </p>
                    
                    
                    <p>At <a href="https://www.cybage.com/" target="_blank" rel="noreferrer">Cybage</a>, I honed my skills in loyalty management systems, enhancing customer engagement and loyalty strategies tools using AWS serverless technologies. 
                    My journey then led me to <a href="https://www.contentstack.com/" target="_blank" rel="noreferrer">Contentstack</a>, where I played a key role in developing headless content management systems, pushing the boundaries of digital content delivery. 
                    Most recently, at <a href="https://edba.io/" target="_blank" rel="noreferrer"> Edba.io</a>, I've been instrumental in building an educational management platform from the ground up, 
                    creating an interactive and adaptive learning environment. </p>                    

                    <p>I have Computer Engineering bachelors degree from <a className="link" href="https://www.gtu.ac.in/" target="_blank" rel="noreferrer">Gujarat Technological University</a>.
                    </p>
                    <p>I live in Halifax, NS, Canada. I was born and raised in Surat, India.</p>
                    <p>I follow everything about history, innovation and cooking.</p>
                    <p>If you're here, chances are you might want to hire me. Scroll down to get more info about me. </p>
                </div>
                <div id="socials">

                    <div className="socials">
                        <span style={{ display: 'block' }}><a href="https://www.linkedin.com/in/keyurkhant/" target="_blank"
                            className="socials" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a></span>
                        <span style={{ display: 'block' }}><a href="https://github.com/keyurkhant" target="_blank" className="socials" rel="noreferrer"><i
                            className="fab fa-github"></i></a></span>
                        <span style={{ display: 'block' }}><a href="https://twitter.com/keyurkhant07" target="_blank"
                            className="socials" rel="noreferrer"><i className="fab fa-twitter"></i></a></span>
                        <span style={{ display: 'block' }}><a href="mailto: keyurpkhant@gmail.com" target="_blank"
                            className="socials" rel="noreferrer"><i className="fas fa-envelope"></i></a></span>
                    </div>
                    <div className="sidebar__inner "></div>
                </div>
            </div>
        </>
    )
}

export default Profile;