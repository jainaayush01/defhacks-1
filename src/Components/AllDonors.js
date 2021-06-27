import { useState, useEffect, useRef } from "react";
import React from "react-dom";
import Donor from "./Donor";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import tt from "@tomtom-international/web-sdk-maps";

const AllDonors = () => {
    const mapElement = useRef();
    const [mapLongitude, setMapLongitude] = useState(-121.91599);
    const [mapLatitude, setMapLatitude] = useState(37.36765);
    const [mapZoom, setMapZoom] = useState(13);
    const [map, setMap] = useState({});

    const [donors, setDonors] = useState([
        {
            name: "Zoheb Ahmed",
            description: "5 fabiflu",
            email: "zohebcool1542@gmail.com",
            latitude: 56,
            longitude: 49,
        },
        {
            name: "Aayush Jain",
            description: "20 Paracetamol tablets",
            email: "imjainaayush@gmail.com",
            latitude: 52,
            longitude: 12,
        },
        {
            name: "Shubham",
            description: "10 Fabiflu",
            email: "devshub21@gmail.com",
            latitude: 43.33,
            longitude: -121.61,
        },
    ]);

    useEffect(() => {
        var map = tt.map({
            key: "TIjaWwtU15vTa3xmSG3rU80sPTJ6lGI6",
            container: mapElement.current,
            center: [mapLongitude, mapLatitude],
        });
        setMap(map);
        donors.forEach((donor) => {
            var lng = donor.longitude;
            var ltd = donor.latitude;
            parseInt(lng);
            parseInt(ltd);
            console.log(lng, ltd);

            var marker = new tt.Marker().setLngLat([lng, ltd]).addTo(map);
            console.log(marker);

            var popupOffsets = {
                top: [0, 0],
                bottom: [0, -70],
                "bottom-right": [0, -70],
                "bottom-left": [0, -70],
                left: [25, -35],
                right: [-25, -35],
            };

            var popup = new tt.Popup({ offset: popupOffsets }).setHTML(
                "<b>"+donor.name+"</b>, " + donor.description
            );
            marker.setPopup(popup).togglePopup();
        });
    }, []);
    
    return (
        <div>
            <h1 className="text-center">All Donors list</h1>
            <div
                ref={mapElement}
                className="mapDiv"
                style={{ height: "700px", width: "900px" }}
            ></div>
            {donors.length > 0
                ? donors.map((donor) => <Donor DonorIdentity={donor} />)
                : "No donors"}
        </div>
    );
};
export default AllDonors;
