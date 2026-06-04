function NextButton({dispatch}) {
  return (
    <div>
      {" "}
      <button onClick={() => dispatch({ type: "NEXT_QUESTION" })}>Next</button>
    </div>
  );
}
export default NextButton;
