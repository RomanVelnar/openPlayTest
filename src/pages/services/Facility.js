import React from "react";
import tw from "twin.macro";
import FacilitiesCard from "../../components/Card/FacilitiesCard";

const Container = tw.div`grid grid-cols-3 gap-5`

const Facility = ({ facilitiesResult }) => {    
    return(
        <Container>

            {facilitiesResult
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((facility, value) => (
                    <FacilitiesCard 
                        key={value}
                        locationCardHeader={facility.name.replaceAll('_')}
                        locationCardText={""}
                    />

            ))}

        </Container>
    )
}

export default Facility;
