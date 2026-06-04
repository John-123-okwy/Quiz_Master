import { useEffect } from "react"

function Timer({dispatch,secondsRemaining}){


    //==========derived state for min and sec for timer =============//

    const min=Math.floor(secondsRemaining/60)
    const sec=secondsRemaining % 60

//========useEffect for timer========================//


    useEffect(function(){
     const Id=setInterval(function(){
            dispatch({type:"TICK"})
        },1000)
        //clean up function
        return()=>clearInterval(Id)
    },[dispatch])
    return<div>{min < 10 && 0}{min}:{sec}</div>
}
export default Timer