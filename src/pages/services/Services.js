import React, { useState } from "react";
import tw from "twin.macro";
import FuzzySearchBar from "../../components/fuzzySearchBar/FuzzySearch";
import Facilities from "./Facilities";
import Fuse from "fuse.js";

const Container = tw.div`px-10 pt-10`;
const Heading = tw.h1`text-3xl font-bold text-primary-600 text-center`;

const Services = ({ apiData }) => {

    const [query, setQuery] = useState('')

    const options = {
        keys: [
            "name",
        ],
        includeScore: true
    };

    const fuse = new Fuse(apiData, options);

    const results = fuse.search(query);

    const facilitiesResult = query ? results.map(results => results.item) : apiData;

    return(
        <Container>
            <Heading>Facilities</Heading>
            <FuzzySearchBar query={query} setQuery={setQuery} />
            <Facilities facilitiesResult={facilitiesResult} />
        </Container>
    )
}

export default Services;
