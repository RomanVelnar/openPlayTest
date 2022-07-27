import React from "react";
import tw from "twin.macro";
import facilities from "../../data/facilities.json";

const Container = tw.div`grid grid-cols-3`
const FacilitiesCard = tw.div`w-1/3 p-4 rounded cursor-pointer bg-primary-500 hover:bg-primary-300`
const Heading = tw.h2``

const Facilities = ({ facilitiesResult }) => {

    let locations = structuredClone(facilities.data);
    console.log(locations)
    
    return(
        <Container>
                {/* {locations.data
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((location) => (
                    // <Link to="/Services">
                        <FacilitiesCard key={location.id}>
                            <Heading>{location.name}</Heading>
                        </FacilitiesCard>  
                    // </Link>   
                    )
                )} */}


                {facilitiesResult.slice(0, 6).map((facility, value) => (
                    <FacilitiesCard key={value}>
                        <Heading>{facility.name.replaceAll('_', ' ')}</Heading>
                    </FacilitiesCard>
                ))}



        </Container>
    )
}

export default Facilities;
