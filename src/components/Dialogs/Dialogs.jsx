import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./Dialogitem/Dialogitem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControls/FormsControls";

const Dialogs = (props) => {

    let state=props.dialogsPage;

    let dialogsElements = state.dialogs.map( d =>
        < DialogItem name ={d.name} key ={d.id} id={d.id}  />)
    let messagesElements=state.messages.map(m => <Message message ={m.message} key = {m.id}/>)


    const addNewMessage = (values) =>{
        props.sendMessage (values.newMessageBody);
    }
     if (!props.isAuth) return <Redirect to = { '/Login' } />;
    return(
        <div className={s.dialogs}>
            <div className = {s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                <div>{messagesElements} </div>
            </div>
            < AddMessageFormRedux onSubmit = {addNewMessage} />
            </div>
    )
}
const maxLength50 = maxLengthCreator (50)
const AddMessageForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <div>
                <Field component = {Textarea} name = 'newMessageBody' placeholder='Enter your message'
                       validate={[required, maxLength50]}/>
                       </div>
            <div>
                <button> Send</button>
                </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm ({form : 'dialogAddMessageForm'}) (AddMessageForm)
        export default Dialogs;