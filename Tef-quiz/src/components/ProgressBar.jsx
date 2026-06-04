//////////////////
function ProgressBar({ answer, questions, questionPageRef }) {
  //==============Answered question derived state================//
  const answeredQuestions = Object.keys(answer).length;

  //=============Derived state on progress========================//
  const progress = (answeredQuestions / questions.length) * 100;

  //=============Derived state for Total number of questions=================//

  const totalQuestions = questions.length;

  return (
    <div className="progress-container">
      <div className="progress" ref={questionPageRef}>
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <div>
        <span className="progress-numAnswered">
          {answeredQuestions}/{totalQuestions}
        </span>
      </div>
    </div>
  );
}
export default ProgressBar;
