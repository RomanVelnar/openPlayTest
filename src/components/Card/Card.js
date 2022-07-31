import tw from "twin.macro";
import { Link } from "react-router-dom";
import activities from "../../data/activities.json";


const LocationCard = tw.div`p-4 text-center rounded cursor-pointer bg-primary-500 hover:bg-primary-300`
const LocationCardHeader = tw.h2``
const LocationCardText = tw.p``

const ActivityCard = tw.div`text-center p-10 rounded cursor-pointer bg-primary-500 hover:bg-primary-300`;
const ActivityHeader = tw.h2``;
const ActivityTime = tw.h2``;
const ActivityLevel = tw.p``;
const ActivityLocation = tw.p``;

export const FacilitiesCard = (props) => {

    const {locationCardHeader, locationCardText, linkText} = props;
    let activitiesData = structuredClone(activities.data)

    return(
        <LocationCard>
            <Link 
                to={`/activities`}
                key={activitiesData.facility_id}
            >{linkText}
            <LocationCardHeader>{locationCardHeader}</LocationCardHeader>
            <LocationCardText>{locationCardText}</LocationCardText>
            </Link>
        </LocationCard>
    )
}

export const ActivitiesCard = (props) => {
    
    const {activityHeader, activityStartTime, activityEndTime, activityLevel, activityLocation} = props 

    return(
        <ActivityCard>
            <ActivityHeader>{activityHeader}</ActivityHeader>
            <ActivityTime>{activityStartTime}</ActivityTime>
            <ActivityTime>{activityEndTime}</ActivityTime>
            <ActivityLevel>{activityLevel}</ActivityLevel>
            <ActivityLocation>{activityLocation}</ActivityLocation>
        </ActivityCard>
    )
}
