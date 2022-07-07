export default function MainWebFootItem({enlace, image}) {

    return (

        <div className="main-web-foot-item-container">
            <div>
                <a href={enlace}> {image}</a>
                <label></label>
            </div>
        </div>
    )
}