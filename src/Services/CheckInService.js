const baseURL = 'http://localhost:9000/api/checkins/'

const CheckInService = {
    
    getCheckIns(){
        return fetch(baseURL)
        .then(res =>res.json())
    },

    postCheckIn(payload){
        return fetch(baseURL, {
            method: "POST",
            body: JSON.stringify(payload),
            headers:{ 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
    },

    deleteBooking(id){
        return fetch(baseURL + id,{
            method: "DELETE"
        })
    },

    UpdateBooking(payload){
        return fetch(baseURL, {
            method: "PUT",
            body: JSON.stringify(payload),
            headers:{ 'Content-Type': 'application/json'}

        })
    }
  
}
 
export default CheckInService;