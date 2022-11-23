import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./Dialogitem/Dialogitem";
import Message from "./Message/Message";
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) =>{
    return {
        dialogsPage: state.dialogsPage,

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) =>{
            dispatch (sendMessageCreator(newMessageBody))
        }
    }
}
export default compose (
    connect (mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)
(Dialogs);

/*let authRedirectComponent = withAuthRedirect (Dialogs);

let DialogsContainer = connect (mapStateToProps,mapDispatchToProps) (authRedirectComponent);

export default DialogsContainer;*/
