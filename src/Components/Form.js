import React,{useState, useEffect} from "react";

const Form = ({createCheckIn}) => {

    const [name,setName] = useState('')
    const [address, setAddress] = useState('')
    const [status,setStatus] = useState(false)
   

    const handleNameChange = (evt) => setName(evt.target.value)
    const handleAddressChange = (evt) => setAddress(evt.target.value)
    const handleStatusChange = () => {
        setStatus(!status)
        console.log("bvevbi")
    }
    const handleSubmit =(evt)=>{
        evt.preventDefault()
        const checkIn ={
            name,
            address,
            status
        }
        createCheckIn(checkIn)
        setName('')
        setAddress('')
        setStatus(false)
    }


    return ( 
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} required></input>
        
        <label htmlFor="address">Email Address:</label>
        <input type="text" id="address" value={address} onChange={handleAddressChange} required></input>
        
        <label htmlFor="status">Checked In ?:</label>
        <input type="checkbox" id="status" value={status} onChange={handleStatusChange}></input>

        <input type="submit" name ="submit" value="Save"></input>
    </form> 
    );
}
 
export default Form;