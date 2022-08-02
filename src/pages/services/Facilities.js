import React, { useState } from "react";
import tw from "twin.macro";
import FuzzySearchBar from "../../components/fuzzySearchBar/FuzzySearch";
import Facility from "./Facility";
import Fuse from "fuse.js";

const Container = tw.div`px-10 pt-10`;
const Heading = tw.h2`text-3xl font-bold text-primary-600 text-center`;

const Facilities = ({facilitiesData}) => {

<<<<<<< HEAD
    const [query, setQuery] = useState('')

    const options = {
        keys: [
            "name",
        ],
        includeScore: true
    };

    const fuse = new Fuse(facilitiesData, options);

    const results = fuse.search(query);

    const facilitiesResult = query ? results.map(results => results.item) : facilitiesData;

    return(
        <Container>
            <Heading>Facilities</Heading>
            <FuzzySearchBar 
                query={query} 
                setQuery={setQuery}
                searchPlaceholder={"Search for locations"} 
            />
            <Facility facilitiesResult={facilitiesResult} />
=======
    let locations = structuredClone(facilities.data);
    console.log(locations)
    
    return(
        <Container>
                {facilitiesResult
                    .slice(0, 6)
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((facility, value) => (
                        <FacilitiesCard key={value}>
                            <Heading>{facility.name.replaceAll('_', ' ')}</Heading>
                        </FacilitiesCard>
                ))}
>>>>>>> 0609561 (code cleanup)
        </Container>
    )
}

export default Facilities;
