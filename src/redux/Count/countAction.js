import { INC_FORK,INC_STAR,INC_WATCH } from "./countType"

export const fork =()=>{
    return {
        type:INC_FORK
    }
}
export const star =()=>{
    return {
        type:INC_STAR
    }
}
export const watch =()=>{
    return {
        type:INC_WATCH
    }
}