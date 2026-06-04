import { Link, useNavigate, useParams } from "react-router-dom";
import subjects from "../data/subjects";
import NavBar from "../components/NavBar";
import { ArrowLeft, ArrowUp, BookOpen, Clock3, Trophy } from "lucide-react";
import { useState } from "react";
import SideBar from "../components/SideBar";

function SubjectDetails() {
  //============state variable for showing side bar============//

  const [showSidebar, setShowSidebar] = useState(false);

  //==============isOnline state variable===================//
  const[isOnline, setIsOnline]=useState(false)

  //=============useParam for selecting specifc subjects===========//
  const { subjectId } = useParams();
  console.log(subjectId)

  //=================useNaviagate for linking pages========//
  const navigate = useNavigate();

  //================constant variable for selecting subject details based on id=============//

  const subject = subjects?.find((item) => item.id === subjectId);

  if (!subject) {
    return <h2>Subject not found!</h2>;
  }

  return (
    <div className="subjectdetails-section">
       
      <NavBar setShowSidebar={setShowSidebar} />
      <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <main className="subject-details">
        <button className="back-btn" onClick={() => navigate("/dashboard")}>
          <ArrowLeft size={18} />
          Back To Dashboard
        </button>
        <section className="subject-header">
          <h1>{subject.name}</h1>
          <p>{subject.description}</p>
        </section>
        <section className="subject-stats">
          <div className="stat-box">
            <BookOpen />
            <h3> {subject.questions}</h3>
            <p>Questions</p>
          </div>
          <div className="stat-box">
            <Clock3 />
            <h3> {subject.duration}</h3>
            <p>Duration</p>
          </div>
          <div className="stat-box">
            <Trophy />
            <h3>{subject.totalPoints}</h3>
            <p>Total Points</p>
          </div>
        </section>
        <section className="instructions-card">
          <h2>Instructions</h2>
          <ul>
            <li>Read every questions carefully.</li>
            <li> You can move between questions. </li>
            <li>Answers can be changed before submission. </li>
            <li>Quiz submits automatically when time runs out. </li>
            <li>You can review answers after quiz. </li>
          </ul>
        </section>
        <button
          className="start-btn"
          onClick={() => {
            sessionStorage.removeItem("resultSaved");
            navigate(`/quiz/${subjectId}`);
          }}
        >
          Start Quiz
        </button>
        {/* <Link to={`/quiz/${subject.id}`}>Start quiz</Link> <br></br>
      <Link to={"/dashboard"}>g back</Link>*/}
      </main>
      <div className="Up-btn">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <ArrowUp size={18} />
        </button>
      </div>
    </div>
  );
}
export default SubjectDetails;
