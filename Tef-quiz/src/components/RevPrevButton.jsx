function RevPrevButton({ reviewIndex, dispatch }) {
  return (
    <div>
      <button
        disabled={reviewIndex === 0}
        onClick={() =>
          dispatch({ type: "GO_TO_REVIEW", payload: reviewIndex - 1 })
        }
      >
        Previous{" "}
      </button>
    </div>
  );
}

export default RevPrevButton