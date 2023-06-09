import { useState, useEffect, createContext } from "react"

export const HouseContext = createContext("");

function HouseProvider( {children} ){
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        fetch("https://ironbnb-m3.herokuapp.com/apartments")
        .then(res => res.json())
        .then(data => {setHouses(data)})
        .catch(err => console.log(err))


    }, [houses]);

    return(
        <HouseContext.Provider value={{houses, setHouses}}>
            {children}
        </HouseContext.Provider>
    )
}
export default HouseProvider