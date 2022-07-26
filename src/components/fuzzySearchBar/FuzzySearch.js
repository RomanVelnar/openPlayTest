import React from "react";
import tw from "twin.macro";

const Container = tw.div`p-8`;
const ContainerFlex = tw.div`flex items-center rounded-full shadow-xl`;
const SearchInput = tw.input`rounded w-full py-4 px-6 text-gray-700 focus:outline-none`

const FuzzySearchBar = ({setQuery, query}) => {

    function handleOnSearch({ currentTarget = {} }) {
        const { value } = currentTarget;
        setQuery(value);    
    }

    return(
        <Container>
            <ContainerFlex>
                <SearchInput 
                    type="search"
                    placeholder="Search for facilities locations"
                    autoComplete="off"
                    id="search"
                    value={query}
                    onChange={handleOnSearch}
                />
            </ContainerFlex>
        </Container>
    )
};

export default FuzzySearchBar;