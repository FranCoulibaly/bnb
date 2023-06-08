import { useContext } from "react"
import { HouseContext } from "../contexts/HouseContext"
import { Link } from "react-router-dom";

function Browse(){
    const { houses } = useContext(HouseContext);
    // console.log(houses);
    if (houses.length === 0 || undefined){
        return (
            <div>loading</div>
        )
    }
    return (
        <div>
            <h2>All Houses</h2>
            {houses.map(house => (
                // console.log(house);
                <div className="browseHouse" key={house._id}>
                    <img src={house.img} alt={house.title}/>
                    <Link to={`/house/${house._id}`}>
                        <div>{house.title}</div>
                        <div>€{house.pricePerDay}</div>
                    </Link>
                    
                </div>  
            ))}
        </div>
    )
}
export default Browse