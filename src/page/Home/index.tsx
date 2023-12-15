import Docs from "../../components/Docs";
import Footer from "../../components/Footer";
import OpenSource from "../../components/OpenSource";
import Profile from "../../components/Profile";
import Projects from "../../components/Projects";
import Research from "../../components/Research";

const Home = () => {
    return (
        <>
            <Profile />
            <div id="display">
                <Docs />
                <Projects />
                <Research />
                <OpenSource />
                <Footer />
            </div>˝
        </>
    )
}

export default Home;