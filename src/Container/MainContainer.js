import {useState, useEffect} from 'react'
import Form from '../Components/Form';
import CheckInList from '../Components/CheckInList';
import CheckInService from '../Services/CheckInService';

const MainContainer = () => {

    const [checkIns, setCheckIns] = useState([])
    

    useEffect(()=>{
        CheckInService.getCheckIns()
        .then(data => setCheckIns(data))
        
    },[])

    const createCheckIn = newCheckIn => {
        CheckInService.postCheckIn(newCheckIn)
        .then(savedCheckIn => setCheckIns([...checkIns, savedCheckIn]))
    }

    const deleteCheckIn = (id) =>{
        CheckInService.deleteBooking(id)
        .then(()=>{
            setCheckIns(checkIns.filter(checkIn =>checkIn._id !== id))
        })
    }

    // const upD

    return ( 
    <>
        <Form createCheckIn={createCheckIn}/>
        <CheckInList checkIns={checkIns} deleteCheckIn={deleteCheckIn} />
    </> 
    );
}
 
export default MainContainer;