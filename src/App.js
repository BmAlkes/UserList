import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Edit from "./components/Edit";
import NewUser from "./components/newUser";

import { AiOutlineUserAdd } from "react-icons/ai";

const App = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        try {
            fetch(`https://randomuser.me/api/?results=10`)
                .then((response) => response.json())
                .then((json) => setData(json.results));
        } catch (err) {
            console.log(err);
        }
    }, [setData]);
    return (
        <>
            <BrowserRouter>
                <div className="header">
                    <Link to="/">
                        <h2>Users Profile</h2>
                    </Link>
                    <Link to="/newuser">
                        <button>
                            <AiOutlineUserAdd className="icon" />
                            Add User
                        </button>
                    </Link>
                </div>
                <Routes>
                    <Route path="/newuser" element={<NewUser />} />
                    <Route path="/" element={<Home data={data} />} />
                    <Route path="edit/:id" element={<Edit data={data} />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
