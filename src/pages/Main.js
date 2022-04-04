import data_main from "../data/data_recipe"
import Dish from "../components/Dish"
import "../assets/css/dishes.css"
import "../assets/css/main.css"


export default function Main() {
    const main = data_main.main.map((x) => {
        return <Dish key={x.title} {...x} />
    })
    return (
        <section className="main_dish hide">
           {main}
        </section>
    )
}
