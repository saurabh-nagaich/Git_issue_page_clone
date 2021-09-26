import { INC_FORK,INC_STAR,INC_WATCH } from "./countType"


const initialState = {
    star:0,
    fork:0,
    watch:0
}

const countReducer = (state=initialState,action)=>{
    console.log(action.type)
    switch(action.type){
        case INC_STAR : return{
            ...state,
            star:state.star+1
        }
        case INC_FORK : return{
            ...state,
            fork:state.fork+1
        }
        case INC_WATCH : return{
            ...state,
            watch:state.watch+1
        }
        default : return state
    }
}


export default countReducer