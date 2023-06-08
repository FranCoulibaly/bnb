import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { HouseContext } from "../contexts/HouseContext";

function SingleHouse(){
    
    const navigate = useNavigate();
    const {houses, setHouses} = useContext(HouseContext);
    const { houseId } = useParams();

    const currentHouse = houses.find(currentHouse => currentHouse._id === houseId);
    
    
    const handleDelete = (e) => {
        e.preventDefault();
        
        const filtered = ((current => current.filter(house => {
            console.log(house._id) 
            return house !== currentHouse
        })))
        // console.log(currentHouse) 
        fetch("https://ironbnb-m3.herokuapp.com/apartments", {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
            console.log("Success:", data)
            navigate("/browse")
        })
        .catch(err => console.log("Error:", err))  
    }
    if (houses.length === 0 || undefined){
        return (
            <div>loading</div>
        )
    }

    return(
        <div className="browseHouse">
            <img src={currentHouse.img} alt={currentHouse.title}></img>
            <h2>{currentHouse.title}</h2>
            <div>€{currentHouse.pricePerDay}</div> 
            <div className="btnContainer">
                <button>Edit</button>
                <button onClick={handleDelete}>
                    Delete</button>
            </div>
        </div>
    )
}
export default SingleHouse