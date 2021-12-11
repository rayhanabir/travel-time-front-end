import { useEffect, useState } from "react"

const usePlaces = () =>{
    const [places, setPlaces] = useState([])
    useEffect(()=>{
        fetch('places.json')
        .then(res=>res.json())
        .then(data =>setPlaces(data))
    },[])
    return [
        places
    ]
}
export default usePlaces;