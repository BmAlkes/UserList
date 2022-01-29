import React from "react";
import { Button } from "./style";

import { FaEdit } from "react-icons/fa";

const ButtonModal = ({ modal, setModal }) => {
    return (
        <Button onClick={() => setModal(!modal)}>
            <FaEdit className="icon" />
            Edit
        </Button>
    );
};

export default ButtonModal;
