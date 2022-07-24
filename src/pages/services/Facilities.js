
import tw from "twin.macro";
import styled from "styled-components";
import locations from "../../data/facilities.json"
import { data } from "autoprefixer";

const Container = tw.div`grid grid-cols-3`
const FacilitiesCard = tw.div``
const Heading = tw.h2``


const Facilities = () => {
    return(
        <Container>
                {locations.data.map(location => {
                    return(
                    <FacilitiesCard key={location.id}>
                        <Heading>{location.name}</Heading>
                    </FacilitiesCard>     
                    );
                })}
        </Container>
    )
}

export default Facilities;