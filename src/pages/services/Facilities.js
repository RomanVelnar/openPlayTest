import React, { useState } from "react";
import tw from "twin.macro";
import FuzzySearchBar from "../../components/fuzzySearchBar/FuzzySearch";
import Facility from "./Facility";
import Fuse from "fuse.js";

const Container = tw.div`px-10 pt-10`;
const Heading = tw.h1`text-3xl font-bold text-primary-600 text-center`;

const Facilities = ({ facilitiesData }) => {

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
            <FuzzySearchBar query={query} setQuery={setQuery} />
            <Facility facilitiesResult={facilitiesResult} />
        </Container>
    )
}

export default Facilities;
