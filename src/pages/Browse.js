import { useContext } from "react"
import { HouseContext } from "../contexts/HouseContext"


function Browse(){
    const { houses } = useContext(HouseContext);
    console.log(houses);

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
                    <img src={house.img} alt="house for rent"/>
                    <div>{house.title}</div>
                    <div>€{house.pricePerDay}</div>
                </div>  
                
            ))}
        </div>
    )
}
export default Browse