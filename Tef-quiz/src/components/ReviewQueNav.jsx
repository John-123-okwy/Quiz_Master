function ReviewQueNav({ questions, reviewIndex, dispatch }) {
  return (
    <div className="review-nav">
      {questions.map((_, i) => (
        <button
          key={i}
          className={reviewIndex === i ? "active-review" : "btn-color"}
          onClick={() => dispatch({ type: "GO_TO_REVIEW" , payload:i})}
        >
          {1 + i}
        </button>
      ))}
    </div>
  );
}
export default ReviewQueNav;
