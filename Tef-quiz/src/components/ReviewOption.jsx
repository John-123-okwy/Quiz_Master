function ReviewOption({ pquestion,userAnswer }) {
  return (
    <div>
      {pquestion.options.map((option, optionIndex) => {
        let className = "review-options";
        if (optionIndex === pquestion.correctAnswer) {
          className = "correct";
        } else if (optionIndex === userAnswer) {
          className = "wrong";
        }

        return (
          <div key={optionIndex} className={className}>
            {option}
          </div>
        );
      })}
    </div>
  );
}
export default ReviewOption;
