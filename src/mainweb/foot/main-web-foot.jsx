
import MainWebFootItem from "./main-web-foot-item";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope }from "react-icons/fa";

export default function MainWebFoot() {
    const foot = [{image:

            <FaWhatsapp className="main-web-foot-icons"/>, enlace : "tel:636843673"}, {image:<FaInstagram className="main-web-foot-icons"/>,}, {image:<FaEnvelope className="main-web-foot-icons"/> ,}];

    return (

        <div className="mainWEb-foot">
            {
                foot.map(item =>
                    <MainWebFootItem
                        image={item.image}
                        enlace={item.enlace}
                    />
                )
            }
        </div>);
}