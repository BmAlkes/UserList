import React from "react";
import { Container } from "./style";
import { ImCancelCircle } from "react-icons/im";
import { AiOutlineSend } from "react-icons/ai";

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
        setName(event.target.value);
        setEmail(event.target.value);
        if (event.target.getAttribute("name") == "location") {
            setLocation({
                country: event.target.value,
                city: event.target.value,
                street: event.target.value,
            });
        }
        console.log(name, email, location);
    };

    if (modal === true)
        return (
            <Container>
                <form onSubmit={handleForm}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="name"
                        name={name}
                        onChange={(event) => handleForm(event)}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        placeholder="email"
                        name={email}
                        onChange={(event) => handleForm(event)}
                    />
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        placeholder="Country"
                        name={"location"}
                        onChange={(event) => handleForm(event)}
                    />
                    <input
                        type="text"
                        placeholder="State"
                        name={"location"}
                        onChange={(event) => handleForm(event)}
                    />
                    <input
                        type="text"
                        placeholder="city"
                        name={"location"}
                        onChange={(event) => handleForm(event)}
                    />
                    <div>
                        <button>
                            <AiOutlineSend className="icon" />
                            Send
                        </button>
                        <button onClick={() => setModal(false)}>
                            <ImCancelCircle className="icon" />
                            cancel
                        </button>
                    </div>
                </form>
            </Container>
        );
    return null;
};

export default Modal;
