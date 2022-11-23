import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi,how are you?', likeCount: 5},
                {id: 2, message: 'It is my first post', likeCount: 10},
            ],
            newPostText: 'it-kamasutra.com'
        },

        dialogsPage: {
            dialogs:[   {id:1 , name:'Sweta'},
                        {id:2 , name:'Alex'},
                        {id:3 , name:'Anton'},
                        {id:4 , name:'Gleb'},
                        {id:5 , name:'Rewa'},

            ],
            messages:[ {id:1 , message:'Hi'},
                        {id:2 , message:'How are yiu'},
                        {id:3 , message:'Yo'},
                        {id:4 , message:'Yo'},
                        {id:5 , message:'Yo'},
            ],
            newMessageBody: ''
        },

        sidebar: {}
},
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observe) {
        this._callSubscriber = observe;
    },

    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage.action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage.action);
        this._state.sidebar = sidebarReducer(this._state.sidebar.action);
        this._callSubscriber(this._state);
    },

}
    export default store;
    window.store = store;