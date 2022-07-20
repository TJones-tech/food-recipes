import { useState, useEffect } from "react";
import PreviousSearches from "../components/PreviousSearches"
import SpecialCard from "../components/SpecialsCard";

function Specilas() {
    const [specials, setSpecials] = useState([])

   useEffect(() => {
    fetch('http://localhost:3001/specials')
    .then(res => res.json())
    .then(res => setSpecials(res))
   }, [])

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {specials.map((special, index) => (
                    <SpecialCard key={index} special={special} />
                ))}
            </div>
        </div>
    )
}

export default Specilas;