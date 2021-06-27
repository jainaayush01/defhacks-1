import { useState } from "react";
import React from "react-dom";
import Donor from "./Donor";
const AllDonors = () => {
    const [donors, setDonors] = useState([
        {
            name: "Zoheb Ahmed",
            description: "This is my donation",
            email: "zohebcool1542@gmail.com",
        },
        {
            name: "Satoru Gojo",
            description: "This is my donation",
            email: "Satorugojo@gmail.com",
        },
        {
            name: "Kakashi Hatake",
            description: "This is my donation",
            email: "KakashiHatake@gmail.com",
        },
    ]);

    return (
        <div>
            <h1 className="text-center">All Donors list</h1>
            {donors.length > 0
                ? donors.map((donor) => <Donor DonorIdentity={donor} />)
                : "No donors"}
        </div>
    );
};
export default AllDonors;
