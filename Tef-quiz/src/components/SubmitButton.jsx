function SubmitButton({ index, questions, dispatch }) {

  //=============Derived state for last Question========//
  const isLastQuestion = index === questions.length - 1;
  return (
    <div className={`submit-btn ${isLastQuestion? "submit":""}`}>
      {isLastQuestion ? (
        <button onClick={()=>dispatch({type:"FINISH_QUIZ"})}>Submit Quiz</button>
      ) : (
        <button onClick={() => dispatch({ type: "NEXT_QUESTION" })}>
          Next
        </button>
      )}
    </div>
  );
}
export default SubmitButton;
