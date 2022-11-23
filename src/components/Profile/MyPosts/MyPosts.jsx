import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const MyPosts = React.memo(props => {

   /* shouldComponentUpdate(nextProps, nextState) {
        return nextProps != this.props || nextState != this.state
    } */


        let PostsElement = props.posts.map(p =>   <Post key={p.id} message={p.message} likeCount={p.likeCount}/>)
        let onAddPost = (values) => {
            props.addPost(values.newPostText);
            //props.dispatch (addPostActionCreator ());
        }
        return (
            <div className={s.postsBlock}>
                <h3>My post </h3>
                < AddNewPostFormRedux onSubmit={onAddPost}/>
                <div className={s.posts}>
                    {PostsElement}
                </div>
            </div>
        )
} ) ;

const maxLength10 = maxLengthCreator (10)
const AddNewPostForm = (props) => {
    return (
        < form onSubmit={props.handleSubmit}>
            <div>
            < Field component ={ Textarea } name = 'newPostText' placeholder={'Post Message'}
                    validate={[required, maxLength10]}  />
            </div>
            <div>
            <button >Add post</button>
            </div>
            < /form >

    )
            }

const AddNewPostFormRedux =  reduxForm ({form : 'ProfileAddNewPostForm'}) (AddNewPostForm)

export default MyPosts;










