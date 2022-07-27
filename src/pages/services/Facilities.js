import React from "react";
import { Link } from "react-router-dom";
import tw from "twin.macro";
import facilities from "../../data/facilities.json";
import activities from "../../data/activities.json"

const Container = tw.div`grid grid-cols-3`
const FacilitiesCard = tw.div`w-1/3 p-4 rounded cursor-pointer bg-primary-500 hover:bg-primary-300`
const Heading = tw.h2`text-center`

const Facilities = ({ facilitiesResult }) => {

    let locations = structuredClone(facilities.data);
    let activitiesData = structuredClone(activities.data)
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


                {facilitiesResult
                    .slice(0, 6)
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((facility, value) => (
                        <FacilitiesCard key={value}>
                            <Heading>{facility.name.replaceAll('_', ' ')}</Heading>
                            <Link to={`/activities/${locations.id}`}>View</Link>
                        </FacilitiesCard>
                ))}



        </Container>
    )
}

export default Facilities;
