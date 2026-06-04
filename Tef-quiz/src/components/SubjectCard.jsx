import { ArrowRight } from "lucide-react";

function SubjectCard({subject,questions, onSelect}) {
  return (
    <div className="subject-card">
      <h3>{subject}</h3>
      <p>{questions} Question</p>
      <button onClick={onSelect}>
        Contiue <ArrowRight size={18} />
      </button>
    </div>
  );
}

export default SubjectCard;
