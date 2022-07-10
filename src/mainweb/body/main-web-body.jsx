import MainWebBodyItem from "./main-web-body-item";
import dogSleeping from "../image/dog_sleeping.jpg";
import duoDogsFlowers from "../image/duo_dogs_flowers.jpg";
import walkingDog from "../image/walking_dog.jpg";
import "./main-web-body.css"

export default function MainWebBody() {
    const body = [
        {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            image: duoDogsFlowers, key: 1, direction: 'normal'
        }, {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            image: dogSleeping, key: 2, direction: 'reverse'
        }, {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            image: walkingDog, key: 3, direction: 'normal'
        }];

    return (
        <div className="main-web-body">
            {
                body.map(item =>
                    <MainWebBodyItem
                        text={item.text}
                        image={item.image}
                        direction={item.direction}
                        key={item.key}
                    />
                )
            }
        </div>
    );

}
