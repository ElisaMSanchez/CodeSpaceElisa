import './mainweb.css'
import MainWebHeader from "./cabezera/main-web-header.jsx";
import MainWebBody from "./cuerpo/Main-web-body"
import MainWebFoot from "./foot/main-web-foot";

function MainWeb() {
    return (
        <div className={"mainWeb"}>

            <MainWebHeader/>
            <MainWebBody/>
            <MainWebFoot/>

        </div>

    );
}

export default MainWeb;
