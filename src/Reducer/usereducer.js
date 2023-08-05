export const initialstate=1;

export const reducer =(state,action)=>{
    if(action.type==="USER"){
        return action.payload;

    }
    return state;
}