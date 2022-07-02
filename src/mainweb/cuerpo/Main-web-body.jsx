import MainWebBodyItem from "./Main-web-body-image-text";
import dog from "../image/dog.jpg";
import "./Main-web-body.css"

export default function MainWebBody(){
    const body=[
        {text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            image : dog, key: 1
        },{text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            image : dog,key: 2
        },{text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            image : dog, key: 3
        }];

    return(
        <div className="mainWeb-body">
            {
                body.map(item =>
                    <MainWebBodyItem
                  text= {item.text}
                  image= {item.image}
                  key={item.key}
            />

                )
            }

    </div>);

}
