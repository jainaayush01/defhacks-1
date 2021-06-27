import { React, useState } from "react-dom";
import { Form, FormGroup, Input, Container, Button } from "reactstrap";
import useGeoLocation from "./GeoLocation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddDonor = () => {
    const BACKEND_URL = "http://defhacks-backend.herokuapp.com/api/donor";
    const location = useGeoLocation();
    const submit = (e) => {
        e.preventDefault();
        fetch(BACKEND_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: document.getElementById("name").value,
                description: document.getElementById("description").value,
                email: document.getElementById("email").value,
                longitude: document.getElementById("longitude").value,
                latitude: document.getElementById("latitude").value,
            }),
        })
        toast.success("Submitted Successfully.", {
            progress: undefined,
        });
      
    };
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
                    <label for="name">Name: </label>
                    <Input
                        type="text"
                        placeholder="Enter your Full Name"
                        name="name"
                        id="name"
                        // onChange={(e) => setUserName(e.target.value)}
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <label for="description">Donation description: </label>
                    <Input
                        type="textarea"
                        placeholder="Enter the description of your donation"
                        name="description"
                        id="description"
                        style={{ height: 150 }}
                        // onChange={(e) => setDescription(e.target.value)}
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <label for="email">Email: </label>
                    <Input
                        type="text"
                        placeholder="Enter your email address"
                        name="email"
                        id="email"
                        // onChange={(e) => setEmail(e.target.value)}
                    ></Input>
                    <label for="latitude">Latitude:</label>
                    <Input
                        type="text"
                        placeholder="Current Latitude"
                        value={location.coordinates.lat}
                        name="latitude"
                        id="latitude"
                        // onChange={(e) => setLatitude(e.target.value)}
                    ></Input>
                    <label for="longitude">Longitude:</label>
                    <Input
                        type="text"
                        placeholder="Current Longitude"
                        value={location.coordinates.lng}
                        name="longitude"
                        id="longitude"
                        // onChange={(e) => setLongitude(e.target.value)}
                    ></Input>
                </FormGroup>
                <Container className="text-center">
                    <Button color="success" onClick={(e) => submit(e)}>
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
