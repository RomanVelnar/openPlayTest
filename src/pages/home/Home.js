import React from "react";
import tw from "twin.macro";
import facilities from "../../data/facilities.json";
import Activity from "../activities/Activity";
import Facilities from "../services/Facilities";


const Container = tw.section`flex flex-col`

const Home = () => {

    // const map = new Map();
    // facilitiesData.forEach(item => map.set(item.id, item));
    // activitiesData.forEach(item => map.set(item.facility_id, {...map.get(item.facility_id), ...item}));
    // const mergedArr = Array.from(map.values());

    // console.log(mergedArr);
    
    let facilitiesData = structuredClone(facilities.data);

    return(
        <Container>
            <Facilities facilitiesData={facilitiesData} />
        </Container>
    )
};

export default Home;