import React from "react";
import { Link } from "react-router-dom";
import tw from "twin.macro";
import activities from "../../data/activities.json"

const Container = tw.div`grid grid-cols-3 gap-5`
const FacilitiesCard = tw.div`p-4 text-center rounded cursor-pointer bg-primary-500 hover:bg-primary-300`
const Heading = tw.h2``

const Facility = ({ facilitiesResult }) => {

    let activitiesData = structuredClone(activities.data)
    
    return(
        <Container>

                {facilitiesResult
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((facility, value) => (
                        <FacilitiesCard key={value}>
                            <Heading>{facility.name.replaceAll('_', ' ')}</Heading>
                            <Link 
                                to={`/activity:${activitiesData.facility_id}`}
                                key={activitiesData.facility_id}
                            >
                                <p>View</p>
                            </Link>
                        </FacilitiesCard>
                ))}

        </Container>
    )
}

export default Facility;
