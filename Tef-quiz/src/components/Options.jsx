/*function Options({ pquestion, dispatch }) {
  return (
    <div>
      {pquestion.options.map((option, index) => (
        <button
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
export default Options;
*/
function Options({ dispatch, answer, pquestions, index, questionPageRef }) {
  //const hasAnswered = answer !== null;
  // if(answer !==null)return null
//============Derived state of selected Answer=================//
 
  const selectedAns = answer[index];
  return (
    <div className="question-options">
      <br></br>
      {/*pquestions.options.map((option, index) => (
          <button
            className={`btn ${index === answer ? "answer" : ""} ${hasAnswered ? (index === pquestions.correctAnswer ? "correct" : "wrong") : ""}`}
            key={option}
            onClick={() => dispatch({ type: "NEW_ANSWER", payload: index })}
          >
            {option}
          </button>
        ))*/}
      {pquestions.options.map((option, index) => (
        <button
          key={index}
          className={` options ${selectedAns === index ? "active" : ""}`}
          onClick={() => 
            dispatch({ type: "NEW_ANSWER", payload: index })
           
          }
        >
          {option}
        </button>
      ))}


    
   
    </div>
  );
}
export default Options;
