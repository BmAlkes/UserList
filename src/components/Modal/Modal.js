import React from "react";
import { Container } from "./style";

const Modal = ({
    modal,
    setModal,
    name,
    setName,
    email,
    setEmail,
    location,
    setLocation,
}) => {
    const handleForm = (event) => {
        event.preventDefault();
        console.log(name, email, location);
    };

    if (modal === true)
        return (
            <Container>
                <form onSubmit={handleForm}>
                    <label htmlFor="name">name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <label htmlFor="email">email</label>
                    <input
                        type="text"
                        id="email"
                        placeholder="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        placeholder="location"
                        value={location.country}
                        onChange={(event) => setLocation(event.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="location"
                        value={location.city}
                        onChange={(event) => setLocation(event.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="location"
                        value={location.street.name}
                        onChange={(event) => setLocation(event.target.value)}
                    />
                    <div>
                        <button>Send</button>
                        <button onClick={() => setModal(false)}>cancel</button>
                    </div>
                </form>
            </Container>
        );
    return null;
};

export default Modal;
