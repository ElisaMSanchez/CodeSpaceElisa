
export default function MainWebFootItem(props){

    return (

        <div className="main-web-foot-item-container">
            <div>
               <a href={props.enlace}> {props.image}</a>

            </div>
        </div>
    )
}