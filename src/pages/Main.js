import data_main from "../data/data_main"
import Dish from "../components/Dish"
import "../assets/css/main.css"

export default function Main() {
    const main = data_main.data.map((x) => {
        return <Dish key={x.title} {...x} />
    })
    return (
        <>
           {main}
        </>
    )
}
