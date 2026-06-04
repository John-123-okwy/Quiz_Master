/*mport Options from "./Options"

function Questions({dispatch,pquestion}){
    return<div>
        <h2>Questions are here active</h2>
<p>{pquestion?.question}</p>
    </div>
}

export default Questions*/

function Questions({pquestions}){
    return<div className="question-card" >
        <h3>{pquestions.question}</h3> 
    </div>
}
export default Questions