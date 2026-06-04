import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";


function Admin() {

  //==================================//
  const navigate = useNavigate();
  //=================================//
  async function fetchQuestions() {
    try {
      const querySnapshot = await getDocs(collection(db, "questions"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setQuestions(data);
    } catch (error) {
      console.log(error);
    }
  }

  //---------------------------
  useEffect(() => {
    fetchQuestions();
  }, []);
  //================================//

  async function handleSubmit(e) {
    e.preventDefault();

    //--------------------------------//
    if (!question || !optionA || !optionB || !optionC || !optionD || !subject) {
      alert("Please fill all the fields");
      return;
    }
    try {
      if (editingId) {
        await updateDoc(doc(db, "questions", editingId), {
          question,
          options: [optionA, optionB, optionC, optionD],
          correctAnswer: Number(correctAnswer),
          subject: subject.toLowerCase(),
          difficulty,
          points: Number(points),
          explanation,
        });
        alert("Questions updated!");
        setEditingId(null);
        fetchQuestions();
        setQuestion("");
        setOptionA("");
        setOptionB("");
        setOptionC("");
        setOptionD("");
        setCorrectAnswer("");
        setSubject("");
        setDifficulty("easy");
        setExplanation("");
        setPoints(0);
      } else {
        await addDoc(collection(db, "questions"), {
          question,
          options: [optionA, optionB, optionC, optionD],
          correctAnswer: Number(correctAnswer),
          subject: subject.toLowerCase(),
          difficulty,
          createdAt: new Date().toISOString(),
          points: Number(points),
          explanation,
        });
        alert("Question added succesfully");
        fetchQuestions();

        setQuestion("");
        setOptionA("");
        setOptionB("");
        setOptionC("");
        setOptionD("");
        setCorrectAnswer("");
        setSubject("");
        setDifficulty("easy");
        setExplanation("");
        setPoints(0);
      }
    } catch (error) {
      console.error(error);
      alert("Failed To Add Question");
    }
  }
  //======================================//
  const [editingId, setEditingId] = useState(null);
  //==================================//
  const [questions, setQuestions] = useState([]);
  //===================================//
  const [question, setQuestion] = useState("");
  //=================================//
  const [optionA, setOptionA] = useState("");
  //==================================//
  const [optionB, setOptionB] = useState("");
  //=================================//
  const [optionC, setOptionC] = useState("");
  //===============================//
  const [optionD, setOptionD] = useState("");

  //==================================================//

  const [correctAnswer, setCorrectAnswer] = useState("");
  //============================================//

  const [subject, setSubject] = useState("");
  //=======================================//

  const [difficulty, setDifficulty] = useState("easy");

  //================================================//
  const [points, setPoints] = useState("");
  //==================================================//
  const [explanation, setExplanation] = useState("");

  //===========================================//
  async function deleteQuestion(id) {
    try {
      await deleteDoc(doc(db, "questions", id));
      fetchQuestions();
    } catch (error) {
      console.log(error);
    }
  }
  ///////////////////////////////////
  return (
    <div className="admin-page">
      <button onClick={() => navigate("/dashboard")} className="back-btn">
        <ArrowLeft /> <span>Back To Dashboard</span>
      </button>
      <div className="admin-header">
        {" "}
        <h1>Admin Panel</h1>
      </div>
      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <input
          type="text"
          placeholder="Option A"
          value={optionA}
          onChange={(e) => setOptionA(e.target.value)}
        />

        <input
          type="text"
          placeholder="Option B"
          value={optionB}
          onChange={(e) => setOptionB(e.target.value)}
        />

        <input
          type="text"
          placeholder="Option C"
          value={optionC}
          onChange={(e) => setOptionC(e.target.value)}
        />

        <input
          type="text"
          placeholder="Option D"
          value={optionD}
          onChange={(e) => setOptionD(e.target.value)}
        />

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <input
          type="text"
          placeholder="Explanation To Answer"
          value={explanation}
          onChange={(e) => setExplanation(e.target.value)}
        />

        <input
          type="text"
          placeholder="Point per question"
          value={points}
          onChange={(e) => setPoints(e.target.value)}
        />

        <select
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(Number(e.target.value))}
        >
          <option value="">Select correct option</option>
          <option value={0}>Option A</option>
          <option value={1}>Option B</option>
          <option value={2}>Option C</option>

          <option value={3}>Option D</option>
        </select>

        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <button type="submit" className="add-question-btn">
          {editingId ? "Update Question" : "Add Question"}
        </button>
      </form>
 <h2>All Questions</h2>
      <div className="questions-list">
       
        {questions.map((item) => (
          <div className="quesstion-card" key={item.id}>
            <h3>{item.question}</h3>
            <span className="theSubject-badge">subject:{item.subject}</span>
            <span className="theSubject-badge">Point:{item.points}</span>

            <span className="theSubject-badge">
              Correct:{item.options[item.correctAnswer]}
            </span>
            <span className="theSubject-badge">Question Id:{item.id}</span>
            <span className="theSubject-badge">
              Difficulty:{item.difficulty}
            </span>
            <span className="theSubject-badge">
              Explanation:{item.explanation}
            </span>
            <div className="the-options">
              {item.options.map((option, index) => (
                <p key={index}>
                  {String.fromCharCode(65 + index)}.{option}
                </p>
              ))}{" "}
            </div>
            <button
              onClick={() => deleteQuestion(item.id)}
              className="delete-question-btn"
            >
              Delete
            </button>
            <button
              onClick={() => {
                setEditingId(item.id);
                setQuestion(item.question);
                setOptionA(item.options[0]);
                setOptionB(item.options[1]);
                setOptionC(item.options[2]);
                setOptionD(item.options[3]);
                setCorrectAnswer(item.correctAnswer);
                setSubject(item.subject);
                setDifficulty(item.difficulty);
              }}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
