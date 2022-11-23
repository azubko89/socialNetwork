import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from 'react' ;
import ReactDOM from "react-dom";
import App from '../App';

let state = {
        posts: [
            {id: 1, message: 'Hi,how are you?', likeCount: 5},
            {id: 2, message: 'It is my first post', likeCount: 10},
        ],
    }

test('length of posts should be increase', () => {
        // 1 test data
        let action = addPostActionCreator("it-kamasutra.com")

    // 2 action
    let newState = profileReducer(state, action)
    // 3 expectation
    expect(newState.posts.length).toBe(3);

});

test('Message of new post  should be correct', () => {
        // 1 test data
        let action = addPostActionCreator("it-kamasutra.com")

    // 2 action
    let newState = profileReducer(state, action)
    // 3 expectation
    expect (newState.posts [2].message).toBe ('it-kamasutra.com');

});
test('After deleting messages should be decrement', () => {
    // 1 test data
    let action = deletePost(1)

    // 2 action
    let newState = profileReducer(state, action)
    // 3 expectation
    expect (newState.posts.length).toBe (1);

});

test('After deleting length shouldn`t be decrement if id is incorrect', () => {
    // 1 test data
    let action = deletePost(1000)

    // 2 action
    let newState = profileReducer(state, action)
    // 3 expectation
    expect (newState.posts.length ). toBe (2);

});