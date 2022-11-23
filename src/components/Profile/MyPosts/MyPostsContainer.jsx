import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";



let mapStateToProps = (state) =>{
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) =>{
            dispatch(addPostActionCreator(newPostText));
        }
    }
}
const PostsContainer = connect (mapStateToProps,mapDispatchToProps) (MyPosts);
export default PostsContainer;










