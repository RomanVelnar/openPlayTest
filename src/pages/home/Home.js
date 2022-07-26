import React from "react";
import tw from "twin.macro";
import Services from "../services/Services";
import facilitiesData from "../../data/facilities.json"

const Container = tw.section`flex flex-col`

const Home = () => {



    // if (error) return "An error has occurred.";
    // if (!data) return "Loading..."

    const formattedData = Object.entries(facilitiesData.data).map((entry) => ({ name: entry[0], id: entry[1] }));
    console.log(formattedData)
    return(
        <Container>
            <Services apiData={formattedData} />
        </Container>
    )
};

export default Home;