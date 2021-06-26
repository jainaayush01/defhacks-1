import React from "react-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container,
} from "reactstrap";
const Donor=({DonorIdentity})=>{
return(
    <Card className="text-center">
        <CardBody>
            <CardSubtitle tag="h4">Donor name :{DonorIdentity.name}</CardSubtitle>
            <CardText>{DonorIdentity.description}</CardText>
            <Container>
                <Button color="info"><a href={`mailto:${DonorIdentity.email}`} style={{ textDecoration: 'none',color:"#000" }}>Reach Out</a></Button>
            </Container>
        </CardBody>
    </Card>
)
}
export default Donor;