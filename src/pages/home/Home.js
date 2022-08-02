import React, { useState } from "react";
import tw from "twin.macro";
import facilities from "../../data/facilities.json";
import Facilities from "../services/Facilities";


const Container = tw.section`flex flex-col`


const Home = () => {    

    const [facilitiesData] = useState(facilities.data);

    return(
        <Container>
            <Facilities facilitiesData={facilitiesData} />
        </Container>
    )
};

export default Home;