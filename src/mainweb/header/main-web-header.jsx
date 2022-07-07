import headerLogo from "../image/headerLogo.jpg";
import './main-web-header.css'

export default function MainWebHeader() {
    return (
        <div className="main-web-header">
            <img className="main-web-header-logo" src={headerLogo} alt="logo"/>
        </div>
    );
}
