import {Card,CardBody,Button,Container,Row,Col} from "reactstrap";
import React from 'react-dom';
const Header=()=>{
    return(
        <div>
        <Card className="my-2 bg-info">
            <CardBody>
                <h1 className="text-center my-2">Covid Medicines Donation</h1>
            </CardBody>
        </Card>
        </div>
    )
}
export default Header;