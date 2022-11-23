import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";
import {UpdateNewPostText} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <Profileinfo isOwner = {props.isOwner}
                         saveProfile = {props.saveProfile}
                         profile = {props.profile}
                         status = {props.status}
                         updateStatus = {props.updateStatus}
                         savePhoto ={props.savePhoto} />
            <MyPostsContainer />
        </div>
    )
}
export default Profile;