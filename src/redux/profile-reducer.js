import {profileAPI, usersAPI} from "../api/api";
import {toggleFollowingProgress, unfollowSuccess} from "./users-reducer";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi,how are you?', likeCount: 5},
        {id: 2, message: 'It is my first post', likeCount: 10},
    ],
    profile:null,
    newPostText: 'it-kamasutra',

    status : ''
}

const profileReducer = (state = initialState ,action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,

                posts: [...state.posts, newPost],
                newPostText: ''
            };

        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case DELETE_POST:
            return {
                ...state,posts: state.posts.filter (p => p.id != action.postId)

            }
        case  SAVE_PHOTO_SUCCESS:
            return {...state,profile: {...state.profile, photos:action.photos }
            }
        default:
            return state;
    }
}

    export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
    export const setUserProfile = (profile) => ({type: SET_USER_PROFILE,profile});
    export const setStatus = (status) => ({type: SET_STATUS,status});
    export const deletePost = (postId) => ({type: DELETE_POST,postId});
    export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS,photos});

export const  getUserProfile = (userId) => {
    return async (dispatch) => {
       let response = await usersAPI.getProfile(userId)
                dispatch(setUserProfile(response.data));
            }
}

export const  getStatus = (userId) => {
    return async (dispatch) => {
      let response = await  profileAPI.getStatus(userId)
                    dispatch(setStatus(response.data));
            }
}

export const  updateStatus = (status) => {
    return async (dispatch) => {
        try {
            let response = await profileAPI.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        }
                catch (error) {}
            }
}

export const  savePhoto = (file) => {
    return async (dispatch) => {
        let response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos));
        }
    }
}
   export const  saveProfile = (profile) => {
       return async (dispatch,getState) => {
           const userId = getState ().auth. userID;
           const response = await profileAPI.saveProfile(profile);
            if (response.data.resultCode === 0) {
           dispatch(getUserProfile(userId));
       }
            else {
                dispatch (stopSubmit ("edit_profile" , {"_error": response.data.messages[0] } ));
                return Promise.reject(response.data.messages[0]);

            }
   }
}
export default profileReducer;