function PreviousButton({dispatch}) {
  return (
    <div className="submit-btn">
      <button onClick={() => dispatch({ type: "PREVIOUS_QUESTION" })}>
        Previous
      </button>
    </div>
  );
}
export default PreviousButton;
