import "./main-web-body-item.css"

export default function MainWebBodyItem({image, text, direction}) {
    return (
        <div className={`main-web-body-item-container ${direction}`}>
            <img
                alt="Foto"
                className="main-web-body-item-container-image"
                src={image}
            />
            <p className="main-web-body-item-container-paragraph">
                {text}
            </p>
        </div>
    );
}