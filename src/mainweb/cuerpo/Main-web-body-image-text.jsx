import "./Main-web-body-image-text.css"

export default function MainWebBodyItem(props){
    return (

            <div className="main-web-body-item-container">
            <div>
                <img
                    alt="perry"
                    className="main-web-body-item-container-image"
                    src={props.image}
                />
            </div>
            <div className="main-web-body-item-container-paragraph">
                <p >
                    {props.text}
                </p>
            </div>

            </div>



    );
}