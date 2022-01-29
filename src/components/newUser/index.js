import React, { useState } from "react";
import { Container } from "./style";
import { useAlert } from "react-alert";

const NewUser = () => {
    const alert = useAlert();

    const [form, setForm] = useState({
        name: " ",
        email: " ",
        country: " ",
        street: " ",
        id: " ",
        picture: " ",
    });

    const handleForm = (e) => {
        e.preventDefault();
        console.log(form);
        if (form.name.length < 3) {
            alert.error("name must be more than 3 characters");
        }
        alert.success("form send with sucess");
    };

    const handleChange = ({ target }) => {
        const { id, value } = target;
        setForm({ ...form, [id]: value });
    };

    return (
        <Container>
            <form onSubmit={handleForm}>
                <h2>Register new user</h2>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                />
                <label htmlFor="text">Country</label>
                <input
                    type="text"
                    id="country"
                    placeholder="Country"
                    onChange={handleChange}
                />
                <label htmlFor="city">City</label>
                <input
                    type="text"
                    id="city"
                    placeholder="City"
                    onChange={handleChange}
                />
                <label htmlFor="street">Street</label>
                <input
                    type="text"
                    id="street"
                    placeholder="Street"
                    onChange={handleChange}
                />
                <label htmlFor="ID">ID</label>
                <input
                    type="number"
                    id="ID"
                    placeholder="ID"
                    onChange={handleChange}
                />
                <label htmlFor="picture">picture</label>
                <input type="file" />
                <button>Send</button>
            </form>
        </Container>
    );
};

export default NewUser;
