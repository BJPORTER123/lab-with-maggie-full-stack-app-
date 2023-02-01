import React from "react";
import Item from "./Item";

const CheckInList = ({checkIns,deleteCheckIn}) => {

    return ( 
    <div className="check-in-list">
    {checkIns.map(checkIn =>{
        return (
            <Item
            key={checkIn._id}
            checkIn={checkIn}
            deleteCheckIn={deleteCheckIn}
            />
        )
    })}
    </div> 
    );
}
 
export default CheckInList;
    