import headerLogo from "../image/headerLogo.jpg";
import './main-web-header.css';
import {FaRegUserCircle} from "react-icons/fa";
import {Link} from 'react-router-dom';

export default function MainWebHeader() {
    return (
        <div className="main-web-header">
            <img className="main-web-header-logo" src={headerLogo} alt="logo"/>
            <Link to="/admin">
                <FaRegUserCircle className="main-web-header-login" />
            </Link>
        </div>
    );
}
