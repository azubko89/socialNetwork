import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./HOC/withSuspense";
const DialogsContainer = React.lazy ( ()=> import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy ( ()=> import('./components/Profile/ProfileContainer'));


class App extends React.Component {
    catchAllUnhandledErrors =(reason,promise) => {
        alert("Some error occured");
        // console.error(promiceRejectionEvent)
    }
    componentDidMount () {
        this.props.initializeApp ();
        window.addEventListener("unhandledrejection",this. catchAllUnhandledErrors);
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection",this. catchAllUnhandledErrors);
    }

    render() {

        if (! this.props. initialized) {
             return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route exact path='/' render= {()=> < Redirect to = {"/profile"} /> }/>
                    <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                    <Route path='/profile/:userId?' render={() => {
                        return <React.Suspense fallback = {<Preloader/>} >
                        <ProfileContainer/>
                        </React.Suspense> } }/>
                    <Route path='/users' render={() => < UsersContainer/>}/>,
                    <Route path='/login' render={() => < LoginPage/>}/>,
                        <Route path='*' render={() => < div> 404 NOT FOUND </div>}/>
                    </Switch>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => ( {
    initialized : state.app. initialized
})

let AppContainer = compose (
    withRouter ,
    connect (mapStateToProps,{initializeApp}) ) (App);

const SamuraiJsApp = (props)=> {
    return <BrowserRouter>
        <Provider store = {store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default SamuraiJsApp;
