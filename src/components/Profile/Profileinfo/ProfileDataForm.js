import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import s from './Profileinfo.module.css';
import styles from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm =({handleSubmit,profile,error})=>{
    return <form onSubmit={handleSubmit}>
        {  error   &&
            <div className={styles.formSummaryError}>
                {error}
            </div>
        }
        <div> <button onClick={ () => {}} > save </button> </div>
        <div>
            <b>Full name </b>:
            {createField("Full name","fullName", [],Input)}
        </div>
        <div>
            <b>Looking for a job</b>:
            {createField("","lookingForAJob", [],Input,{type:"checkbox"})}
        </div>
            <div>
                <b> My professional skills </b>:
                {createField("My professional skills","lookingForAJobDescription", [],Textarea)}
            </div>
        <div>
            <b>About me</b>:
            {createField("About me","aboutMe", [],Textarea)}
        </div>
        <div>
            <b>Contacts</b>:{Object.keys (profile.contacts).map(key => {
            return <div key ={key} className={s.contact}>
                <b>{key} : {createField(key, "contacts." + key, [], Input)}</b>
            </div>
        } ) }
            </div>

    </form>
}
export const ProfileDataFormReduxForm = reduxForm({form :'edit_profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;