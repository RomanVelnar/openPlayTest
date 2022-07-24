import React from "react";
import tw from "twin.macro";
import Facilities from "./Facilities"

const Container = tw.div`px-10 pt-10`

const Heading = tw.h1`text-3xl font-bold text-primary-600 text-center`


const Services = () => {

    return(
        <Container>
            <Heading>Facilities</Heading>
            <Facilities />
        </Container>
    )
}

export default Services;
