import { useContext, useEffect } from "react";
import { HouseContext } from "../contexts/HouseContext"

function Home(){
    const { houses } = useContext(HouseContext);

    if (houses.length === 0 || undefined){
        return (
            <div>loading</div>
        )
    }
    let house = houses[0]
    // console.log(randomIndex, houses[randomIndex]);
    return(
        <>
            <h1>
                Latest Home
            </h1>
            <div className="browseHouse" key={house._id}>
                <img src={house.img} alt={house.title}/>
                <div>{house.title}</div>
                <div>€{house.pricePerDay}</div>
            </div>  
        </>
    )
}
export default Home