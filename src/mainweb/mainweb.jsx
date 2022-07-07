import './mainweb.css'
import MainWebHeader from "./header/main-web-header.jsx";
import MainWebBody from "./body/main-web-body"
import MainWebFoot from "./foot/main-web-foot";

function MainWeb() {
    return (
        <div className="main-web">

            <MainWebHeader/>
            <MainWebBody/>
            <MainWebFoot/>

        </div>

    );
}

export default MainWeb;
