import React from "react";
import { Link } from "react-router-dom";
import tw from "twin.macro";
import activities from "../../data/activities.json"

const Container = tw.div`grid grid-cols-3`
const FacilitiesCard = tw.div`w-1/3 p-4 rounded cursor-pointer bg-primary-500 hover:bg-primary-300`
const Heading = tw.h2`text-center`

const Facilities = ({ facilitiesResult }) => {

    let activitiesData = structuredClone(activities.data)
    
    return(
        <Container>

                {facilitiesResult
                    .slice(0, 6)
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((facility, value) => (
                        <FacilitiesCard key={value}>
                            <Heading>{facility.name.replaceAll('_', ' ')}</Heading>
                            <Link 
                                to={`/activities/:${activitiesData.facility_id}`}
                                key={activitiesData.facility_id}
                            >
                                <p>View</p>
                            </Link>
                        </FacilitiesCard>
                ))}

        </Container>
    )
}

export default Facilities;
