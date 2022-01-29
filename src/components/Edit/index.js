import React from "react";
import { Container } from "./styles";
import { useParams } from "react-router-dom";

const Edit = ({ data }) => {
    const params = useParams();
    console.log(params);
    return <Container>teste</Container>;
};

export default Edit;
