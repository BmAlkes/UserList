import React from "react";
import { Container } from "./style";

const NewUser = () => {
    return (
        <Container>
            <form>
                <h2>Register new user</h2>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Name" />
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="Email" />
                <label htmlFor="text">Country</label>
                <input type="text" id="country" placeholder="Country" />
                <label htmlFor="city">City</label>
                <input type="text" id="city" placeholder="City" />
                <label htmlFor="street">Street</label>
                <input type="text" id="street" placeholder="Street" />
                <label htmlFor="ID">ID</label>
                <input type="number" id="ID" placeholder="ID" />
                <label htmlFor="picture">picture</label>
                <input type="file" />

                <button>Send</button>
            </form>
        </Container>
    );
};

export default NewUser;
