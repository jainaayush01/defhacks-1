import React from "react-dom";
import { Form, FormGroup, Input, Container, Button } from "reactstrap";
import useGeoLocation from "./GeoLocation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddDonor = () => {
    const location = useGeoLocation();
    const submit = () =>
        toast.success("Submitted Successfully.", {
            progress: undefined,
        });
    const clear = () => toast.warning("Cleared!");
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
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
                    <label for="latitude">Latitude:</label>
                    <Input
                        type="text"
                        placeholder="Current Latitude"
                        value={location.coordinates.lat}
                        name="latitude"
                        id="latitude"
                    ></Input>
                    <label for="longitude">Longitude:</label>
                    <Input
                        type="text"
                        placeholder="Current Longitude"
                        value={location.coordinates.lng}
                        name="longitude"
                        id="longitude"
                    ></Input>
                </FormGroup>
                <Container className="text-center">
                    <Button color="success" onClick={submit}>
                        Submit
                    </Button>
                    <Button
                        className="mx-4 my-5"
                        color="warning"
                        onClick={clear}
                    >
                        Clear All
                    </Button>
                </Container>
            </Form>
        </>
    );
};
export default AddDonor;
