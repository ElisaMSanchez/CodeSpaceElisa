
import MainWebFootItem from "./main-web-foot-item";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope }from "react-icons/fa";
import "./main-web-foot.css";

export default function MainWebFoot() {
    const foot = [
        {image:<FaWhatsapp className="main-web-foot-icons"/>, enlace : "tel:636843673",key:1}, {image:<FaInstagram className="main-web-foot-icons"/>,enlace: "https://www.instagram.com/elisita_casi_arte/",key:2}, {image:<FaEnvelope className="main-web-foot-icons"/> ,enlace:"email:emsp.star@gmail.com", key:3}];

    return (

        <div className="mainWEb-foot">
            {
                foot.map(item =>
                    <MainWebFootItem
                        image={item.image}
                        enlace={item.enlace}
                        key={item.key}
                    />
                )
            }
        </div>);
}