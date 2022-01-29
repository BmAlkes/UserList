import React from "react";
import { Button } from "./style";

const ButtonModal = ({ modal, setModal }) => {
    return <Button onClick={() => setModal(!modal)}>Edit</Button>;
};

export default ButtonModal;
