import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {
    follow,
    setCurrentPage,

    unfollow, toggleFollowingProgress, requestUsers
} from '../../redux/users-reducer';
import * as axios from 'axios';
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers,
} from "../../redux/users-selecrors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers (this.props.currentPage,this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers (pageNumber,this.props.pageSize);
        /*this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching (true);

        usersAPI.getUsers( pageNumber, this.props.pageSize).then(data => {
                this.props.setUsers(data.items);
                this.props.toggleIsFetching (false);

            });*/
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader />: null }
            <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow ={this.props.follow}
                      unfollow ={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
            < />
    }
}
 /*let mapStateToProps =(state) =>{
    return {
        users:state.usersPage.users ,
        pageSize : state.usersPage.pageSize,
        totalUsersCount : state.usersPage. totalUsersCount,
        currentPage : state.usersPage. currentPage,
        isFetching : state.usersPage.isFetching,
        followingInProgress : state.usersPage.followingInProgress
    }
}*/
let mapStateToProps =(state) =>{
    return {
         users:getUsers (state),
        pageSize : getPageSize (state),
        totalUsersCount : getTotalUsersCount (state),
        currentPage : getCurrentPage (state),
        isFetching : getIsFetching (state) ,
        followingInProgress :getFollowingInProgress (state)
    }
}

   /* let mapDispatchToProps =(dispatch) => {
        return {
            follow: (userId) => {
                dispatch(followAC(userId));
            },
            unfollow: (userId) => {
                dispatch(unfollowAC(userId));
            },
            setUsers: (users) => {
                dispatch(setUsersAC(users));
            },
            setCurrentPage: (pageNumber) => {
                dispatch(setCurrentPageAC(pageNumber));
            },
            setTotalUsersCount: (totalCount) => {
                dispatch(setTotalUsersCountAC(totalCount));
            },
            toggleIsFetching: (isFetching) => {
                dispatch(toggleIsFetchingAC(isFetching))
            }

        }
    }*/

 /*export default  withAuthRedirect (connect (mapStateToProps , {
    follow, unfollow,
    setCurrentPage,
    toggleFollowingProgress,getUsers})(UsersContainer) );*/
 export default compose (
    // withAuthRedirect,
    connect (mapStateToProps , {
        follow, unfollow,
        setCurrentPage,
        toggleFollowingProgress,getUsers: requestUsers} ) )
(UsersContainer);


