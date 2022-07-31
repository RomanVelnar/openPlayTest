import tw from "twin.macro";
import { Link } from "react-router-dom";
import activities from "../../data/activities.json";


const LocationCard = tw.div`p-4 text-center rounded cursor-pointer bg-primary-500 hover:bg-primary-300`
const LocationCardHeader = tw.h2``
const LocationCardText = tw.p``

const FacilitiesCard = (props) => {

    const {cardHeader, cardText, linkText} = props;
    let activitiesData = structuredClone(activities.data)

    return(
        <LocationCard>
            <Link 
                to={`/activity:${activitiesData.facility_id}`}
                key={activitiesData.facility_id}
            >{linkText}
            <LocationCardHeader>{cardHeader}</LocationCardHeader>
            <LocationCardText>{cardText}</LocationCardText>
            </Link>
        </LocationCard>
    )
}

export default FacilitiesCard;