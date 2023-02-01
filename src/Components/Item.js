const Item = ({checkIn,deleteCheckIn}) => {

    const handleClickDelete =()=>{
        deleteCheckIn(checkIn._id)
    }

    return (  
        <div>
        <h2>Name: {checkIn.name}</h2>
        <h2><i>Email Address: {checkIn.EmailAddress}</i></h2>
        <p>Check In Status: {checkIn.checkInStatus ? "Check In": "Not Check In" }</p>
        <button type="button" onClick={handleClickDelete}>Delete</button>
        </div>
    );
}
 
export default Item;