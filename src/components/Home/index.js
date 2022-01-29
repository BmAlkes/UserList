import React from "react";
import Users from "../users/index";
import { Container } from "./style";

const Home = ({ data }) => {
    return (
        <Container>
            {data && (
                <div>
                    {data.map((item, index) => (
                        <Users key={index} item={item} data={data} />
                    ))}
                </div>
            )}
        </Container>
    );
};

export default Home;
