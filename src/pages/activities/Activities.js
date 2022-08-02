import React, { useState } from "react";
import tw from "twin.macro";
import FuzzySearchBar from "../../components/fuzzySearchBar/FuzzySearch";
import activities from '../../data/activities.json'
import Activity from "./Activity";
import Fuse from "fuse.js";

const Container = tw.div`p-10 text-center`;
const Header = tw.h2`text-3xl font-bold text-primary-600 text-center`


const Activites = () => {
    const [activitiesData] = useState(activities.data)

    const [query, setQuery] = useState('')

    const options = {
        keys: [
            "name",
        ],
        includeScore: true
    };

    const fuse = new Fuse(activitiesData, options);

    const results = fuse.search(query);

    const activitiesResult = query ? results.map(results => results.item) : activitiesData;

    return(
        <Container>
            <Header>Activities</Header>
            <FuzzySearchBar 
                query={query} 
                setQuery={setQuery}
                searchPlaceholder="Search for activities"
            />
            <Activity activitiesResult={activitiesResult} />
        </Container>
    )
}

export default Activites;