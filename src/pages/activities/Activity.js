import React, { useState } from "react";
import tw from "twin.macro";
import activities from "../../data/activities.json";
import { useParams } from "react-router-dom";
import facilities from "../../data/facilities.json";

const Container = tw.div`grid grid-cols-3 gap-3`
const ActivitiesContainer = tw.div`text-center p-10 bg-primary-500`
const Header = tw.h2``
const Time = tw.p``
const Location = tw.p``
const Level = tw.p``


const Activity = () => {

    // const [data, setData] = useState([]);

    let activitiesData = structuredClone(activities.data);
    let facilitiesData = structuredClone(facilities.data)

    const { facility_id } = useParams();

    // create a function that compares two data sets
    // match the facilities "id" with activities "facility_id" 
    // connect the "id's" to the Link in Facilities.js
    // some example might be find. forEach. filter. that can connect two data sets
    // think of joining the datasets in parent component

    return(
        // <Container>
        //     {activitiesData.map((activity, value) => {
        //         if(facilitiesData.id === activitiesData.facility_id){
        //                 <ActivitiesContainer key={value}>
        //                     <h1>{activity.name}</h1>
        //                     <p>{activity.start_time}</p>
        //                 </ActivitiesContainer>
        //                 }
        //     })}

        // </Container>

        <Container>
            {activitiesData
                .sort((a, b) => a.start_time - b.start_time)
                .map((activity, value) => (
                    <ActivitiesContainer key={value}>
                        <Time>{activity.start_time}</Time>
                        <Header>{activity.name}</Header>
                        <Time>{activity.end_time}</Time>
                        <Level>{activity.level}</Level>
                        <Location>{activity.location}</Location>
                    </ActivitiesContainer>
            ))}
        </Container>

    )
};

export default Activity;

