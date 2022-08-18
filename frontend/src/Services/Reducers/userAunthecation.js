const initialstate={
        registerduser:[],
        activeusers:[]
}
export function user(state=initialstate,action){
            switch (action.type) {
                case "SIGN_UP":
                    return{
                        ...state,
                        registerduser:[...state.registerduser,action.payload.data]
                    }

                case 'ACTIVE_USERS':
                    console.log(action.payload);
                    return{
                        ...state,
                        activeusers:action.payload
                    }

                    case "SIGNOUT":

                        return{
                                  ...state,activeusers:null
                        }
                  
               
         default:
             return state
            }
}