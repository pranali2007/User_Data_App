import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from '../UserCard/UserCard';
import '../UserCard/userCard.css';

function GitHubUser() {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await axios.get('https://api.github.com/users'); //fetch the data through api
        setUsers(response.data);
    };

    //http://localhost:3000
    useEffect(() => {
        getUsers();
    }, []);


    return (
        <div>
            <h1>List Of Users</h1>
            <div className="container mt-5 ">
                <div className="row">
                    {users.map((user) => {
                        return (
                            <div className="col-md-4">
                                <UserCard key={user.id} userDetail={user} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default GitHubUser
