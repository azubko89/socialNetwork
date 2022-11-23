
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state=initialState,action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages : [...state.messages,{id: 6, message: body}],
            }

        default:
            return state;
    }
}
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE , newMessageBody});


export default dialogsReducer;