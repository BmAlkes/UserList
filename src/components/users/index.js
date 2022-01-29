import React, { useState, useRef } from "react";
import ButtonModal from "../ButtonModal";
import Modal from "../Modal/Modal";
import { Container } from "./style.js";

import { FaTrashRestore } from "react-icons/fa";

const Users = ({ item }) => {
    const [name, setName] = useState(item.name.first);
    const [email, setEmail] = useState(item.email);
    const [location, setLocation] = useState({
        State: "",
        Country: "",
        city: "",
    });
    const [modal, setModal] = useState(false);
    const handleDeleteUser = () => {
        div.current.remove();
    };
    const div = useRef();

    return (
        <Container className="section" ref={div}>
            <div className="profile">
                <img src={item.picture.large} />
                <div className="details">
                    <h3>Name</h3>
                    <p>{`${item.name.title} ${item.name.first} ${item.name.last}`}</p>
                    <div>
                        <p>{item.email}</p>
                    </div>
                </div>
                <div className="location">
                    <h3>Location</h3>
                    <p> country : {item.location.country}</p>
                    <p>city: {item.location.city}</p>
                    <p> street: {item.location.street.name}</p>
                </div>
                <p>ID: {item.id.value}</p>
            </div>
            <button className="btn" onClick={handleDeleteUser}>
                <FaTrashRestore className="icon" />
                Delete
            </button>
            <Modal
                modal={modal}
                setModal={setModal}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                location={location}
                setLocation={setLocation}
            />
            <ButtonModal setModal={setModal} modal={modal} />
        </Container>
    );
};

export default Users;
