import { GET_INFORMATION } from "./ActionCreator";

const instialstate={
    information:""

}
export const Reducer=(state=instialstate,action:any)=>{
switch (action.type) {
    case GET_INFORMATION:
        
        return{
            ...state,
            information:action.payload
        };

    default:
        return state;
}
}
