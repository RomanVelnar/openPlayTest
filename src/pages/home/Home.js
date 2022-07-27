import React from "react";
import tw from "twin.macro";
import Services from "../services/Services";
import facilities from "../../data/facilities.json";


const Container = tw.section`flex flex-col`

const Home = () => {
    
    let locations = structuredClone(facilities.data);

    return(
        <Container>
            <Services apiData={locations} />
        </Container>
    )
};

export default Home;