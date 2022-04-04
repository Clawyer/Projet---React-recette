
import "../assets/css/details.css"
import Propsdetails from "../components/Props-details";
import tableaudetails from "../data/data_desc"

export default function Details() {

const detailsrecette = tableaudetails.data.map((description) => {
    return  <Propsdetails key={description.title} {...description} />;
});
    return <div className='details-container'>{detailsrecette[0]}</div>;

}
