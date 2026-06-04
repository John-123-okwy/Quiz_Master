function QuestionNavigation({ questions, dispatch, index, answer }) {
  return (
    <div>
      <div className="question-nav">
        {questions.map((_, i) => (
          <button
            key={i}
            className={
              index === i
                ? "active-question"
                : answer[i] !== undefined
                  ? "answered-question"
                  : "btn-color"
            }
            onClick={() => {
              dispatch({ type: "GO_TO_QUESTION", payload: i });
              window.scrollTo({top:0, behavior: "smooth" });
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionNavigation;
