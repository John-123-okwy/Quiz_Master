import { useEffect, useState } from "react"
import { auth, db } from "../firebase/firebase"
import { doc, getDoc } from "firebase/firestore"
import { Navigate } from "react-router-dom"

/////========================================////

function AdminRoute({children}){

    //===================================//
    const[loading, setLoading]=useState(true)

    //==================================//
    const[isAdmin, setIsAdmin]=useState(false)

    //=====================================//
    useEffect(()=>{
        async function checkAdmin(){
            const user=auth.currentUser;
            if(!user){
                setLoading(false);
                return;

            }
            const userRef=doc(db,"users",user.uid);
            const userSnap=await getDoc(userRef);
            if(userSnap.exists()){
                const userData=userSnap.data();
                setIsAdmin(userData.role==="admin");
            }
            setLoading(false);
        }
        checkAdmin()
    },[])
//===================================================//
    if(loading){
        return<h2>Loading...</h2>
    }
//=============================================//
if(!isAdmin){
    return<Navigate to="/dashboard" replace/>
}


    /////////////////////////////////////
  return children
}
export default AdminRoute