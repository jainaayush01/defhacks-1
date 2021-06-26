import React from "react-dom";
import { Form, FormGroup, Input ,Container,Button} from "reactstrap";
const AddDonor = () => {
  return (
    <>
      <h2 className="text-center my-4">
        Fill in the details in order to donate
      </h2>
      <Form>
        <FormGroup>
          <label for="donorName">Name: </label>
          <Input
            type="text"
            placeholder="Enter your Full Name"
            name="donorName"
            id="donorName"
          ></Input>
        </FormGroup>
        <FormGroup>
          <label for="donorDescription">Donation description: </label>
          <Input
            type="textarea"
            placeholder="Enter the description of your donation"
            name="donorDescription"
            id="donorDescription"
            style={{ height: 150 }}
          ></Input>
        </FormGroup>
        <FormGroup>
          <label for="donorId">Email: </label>
          <Input
            type="text"
            placeholder="Enter your email address"
            name="donorId"
            id="donorId"
          ></Input>
        </FormGroup>
        <Container className="text-center">
          <Button color="success">Submit</Button>
          <Button className="mx-4 my-5" color="warning">Clear All</Button>
        </Container>
      </Form>
    </>
  );
};
export default AddDonor;
