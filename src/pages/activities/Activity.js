import React from "react";
import tw from "twin.macro";
import activities from "../../data/activities.json";
import { ActivitiesCard } from "../../components/Card/Card";

const Container = tw.div`grid grid-cols-3 gap-10`

const Activity = ({activitiesResult, props}) => {

    // const [data, setData] = useState([]);

    let activitiesData = structuredClone(activities.data);

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
            {activitiesResult
                // .sort((a, b) => a.start_time - b.start_time)
                .sort((a, b) => parseFloat(a.start_time) - parseFloat(b.start_time))
                .map((activity, value) => (
                    <ActivitiesCard 
                        key={value}
                        activityHeader={activity.name}
                        activityStartTime={activity.start_time}
                        activityEndTime={activity.end_time}
                        activityLevel={activity.level}
                        activityLocation={activity.location}
                    />
            ))}

        </Container>

    )
};

export default Activity;

