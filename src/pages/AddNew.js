import { useState, useContext, useEffect } from "react";
import { HouseContext } from "../contexts/HouseContext";

function AddNew(){
    const [formData, setFormData] = useState({
        title: "",
        pricePerDay: "",
        img: ""
    });

    

    const handleChange = (e) => {

        setFormData({
            ...formData, 
            [e.target.name]: e.target.value,
        });
    }


    const handleImageFileChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: (URL.createObjectURL(e.target.files[0]))
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        fetch("https://ironbnb-m3.herokuapp.com/apartments", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => console.log("Success:", data))
        .catch(err => console.log("Error:", err))

    }

    useEffect(() => {
        
    }, [formData])

    return(
        <div>
            <h2>Add New House</h2>
            <form onSubmit={handleFormSubmit} >
                <input type="text"  placeholder="Title" name="title" value={formData.title} onChange={handleChange}/>
                <input type="number"  placeholder="Price Per Day" name="pricePerDay" value={formData.pricePerDay} onChange={handleChange}/>
                <input type="file"  placeholder="Upload Image" name="img" onChange={handleImageFileChange}/>
                <img src={formData.img} />
                <button type="submit" >Submit</button>
            </form>
            
        </div>
    )
}
export default AddNew