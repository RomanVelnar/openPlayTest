
import tw from "twin.macro";
import locations from "../../data/facilities.json";
import activity from "../../data/activities.json";
import Services from "./Services";
import { Link } from "react-router-dom";


const Container = tw.div`grid grid-cols-3`
const FacilitiesCard = tw.div`w-1/3 p-4 rounded cursor-pointer bg-primary-500 hover:bg-primary-300`
const Heading = tw.h2``

const Facilities = () => {
    return(
        <Container>
                {locations.data
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((location) => (
                    // <Link to="/Services">
                        <FacilitiesCard key={location.id}>
                            <Heading>{location.name}</Heading>
                        </FacilitiesCard>  
                    // </Link>   
                    )
                )}
        </Container>
    )
}

export default Facilities;