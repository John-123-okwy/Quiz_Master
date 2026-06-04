function RevNextButton({ reviewIndex, questions, dispatch }) {
  return (
    <div>
      <button
        disabled={reviewIndex === questions.length - 1}
        onClick={() =>
          dispatch({ type: "GO_TO_REVIEW", payload: reviewIndex + 1 })
        }
      > Next</button>
    </div>
  );
}
export default RevNextButton;
