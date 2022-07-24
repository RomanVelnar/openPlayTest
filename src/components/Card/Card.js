import tw from "twin.macro";

const Card = tw.div`p-4 w-1/3 rounded cursor-pointer bg-primary-500 hover:bg-primary-300`
const CardText = tw.p`text-center`


const FacilitiesCard = (props) => {
    return(
        <Card>
            <CardText></CardText>
        </Card>
    )
}

export default FacilitiesCard;