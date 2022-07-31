import React, { useState } from "react";
import tw from "twin.macro";
import activities from "../../data/activities.json";
import { useParams } from "react-router-dom";
import facilities from "../../data/facilities.json";
import FacilitiesCard from "../../components/Card/Card";

const Container = tw.div`grid grid-cols-3 gap-3`
const ActivitiesContainer = tw.div`text-center p-10 bg-primary-500`
const Header = tw.h2``
const Time = tw.p``
const Location = tw.p``
const Level = tw.p``


const Activity = ({props}) => {

    // const [data, setData] = useState([]);

    let activitiesData = structuredClone(activities.data);
    let facilitiesData = structuredClone(facilities.data)

    const { facility_id } = useParams();

    console.log(activitiesData)

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
                // .sort((a, b) => parseFloat(a.start_time) - parseFloat(b.start_time))

                .map((activity, value) => (
                    <ActivitiesContainer key={value}>
                        <Time>{activity.start_time}</Time>
                        <Header>{activity.name}</Header>
                        <Time>{activity.end_time}</Time>
                        <Level>{activity.level}</Level>
                        <Location>{activity.location}</Location>
                    </ActivitiesContainer>
            ))}

            <FacilitiesCard 
                cardHeader={"safdsfadfafd"}
                cardText={"dfasdfadsfaf"}
            />
        </Container>

    )
};

export default Activity;

