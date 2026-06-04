function ReviewQuestion({reviewIndex,pquestion}){
    return<div
    >
        <h2>Question {reviewIndex +1}</h2>
        <p>
            {pquestion.question}
        </p>

    </div>
}
export default ReviewQuestion