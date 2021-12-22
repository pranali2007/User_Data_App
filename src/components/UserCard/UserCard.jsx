import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import "./userCard.css"


export default function UserCard({ userDetail }) {
    const [userData, setUserData] = useState(userDetail)
    const [followers, setFollowers] = useState([])
    const [followings, setFollowings] = useState([])
    const [subscriptions, setSubscription] = useState([])
    const [organizations, setOrganization] = useState([])
    const [events, setEvents] = useState([])
    const [repos, setRepos] = useState([])

    const initialFunction = async () => {
        const { followers_url, following_url, subscriptions_url, repos_url, organizations_url, events_url } = userData
        const following = await axios.get(following_url)
        setFollowings(following.data)
        const followers = await axios.get(followers_url)
        setFollowers(followers.data)
        const subscriptions = await axios.get(subscriptions_url)
        setSubscription(subscriptions.data)
        const organizations = await axios.get(organizations_url)
        setOrganization(organizations.data)
        const repos = await axios.get(repos_url)
        setRepos(repos.data)
        const events = await axios.get(events_url)
        setEvents(events.data)
    }

    useEffect(() => {
        initialFunction();
    }, []);

    const showList = (list, listName) => {
        console.log(list, listName)
    }
    return (
        <Card sx={{ maxWidth: 345 }} className="m-2">
            <CardHeader
                avatar={
                    <Avatar
                        alt="Remy Sharp"
                        src={userDetail.avatar_url}
                        sx={{ width: 56, height: 56 }}
                    />
                }

                title={userDetail.login}

            />

            <CardContent>
                {/* Folllowers and Followings */}
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-6">
                            <h5>{followers.length}</h5>
                            <button type="button" class="btn btn-outline-secondary " onClick={() => showList(userDetail.followers_url, "Followers")}>Followers</button>
                        </div>
                        <div className="col-md-6">
                            <h5>{followings.length}</h5>
                            <button type="button" class="btn btn-outline-secondary ">Following</button>
                        </div>
                    </div>
                </div>
                {/* Extra Information */}
                <div className="container mt-2">
                    <div className="row">
                        <div className="col-md-9"><span className="extraInfoHeading">Subscription</span></div>
                        <div className="col-md-3 extraInfoHeading">
                            {subscriptions.length}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-9"><span className="extraInfoHeading">Organizations</span></div>
                        <div className="col-md-3 extraInfoHeading">
                            {organizations.length}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-9"><span className="extraInfoHeading">Events</span></div>
                        <div className="col-md-3 extraInfoHeading">
                            {events.length}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-9"><span className="extraInfoHeading">Repositary</span></div>
                        <div className="col-md-3 extraInfoHeading">
                            {repos.length}
                        </div>
                    </div>
                </div>

            </CardContent>


        </Card>
    );
}
