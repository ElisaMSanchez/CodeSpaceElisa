import headerLogo from "../image/headerLogo.jpg";
import './header.css'

export default function MainWebHeader(){
    return(
        <div className={"mainWeb-header"}>
            <img className={"mainWeb-header-logo"} src={headerLogo} alt={"logo"}/>
        </div>
    );
 }
