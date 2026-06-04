import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

function NoQuestions(){
    const navigate=useNavigate()
    return<div className="no-question">
         <button onClick={()=>navigate("/dashboard")} className="back-btn"><ArrowLeft/> <span>Back To Dashboard</span></button>
        <h2> No Questions Found Yet...</h2>
    </div>
}
export default NoQuestions