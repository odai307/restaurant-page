import Coffee from "./assets/images/coffee.jpg";
import Bread from "./assets/images/bread.jpg";
import FruitJuice from "./assets/images/fruit_juice.jpg"

export default class Menu {

    static displayCoffee = () => {
        const img = document.createElement("img");
        img.src = Coffee;
        return img;
    } 

    static displayBread = () => {
        const img = document.createElement("img");
        img.src = Bread;
        return img;
    }

    static displayFruitJuice = () => {
        const img = document.createElement("img");
        img.src = FruitJuice;
        return img;
    }


}
