import { CircleHelp, ClipboardList, TrendingUp, Trophy } from "lucide-react";
import StatCards from "./StatsCard";

function StatsCardCont({quizzesTaken,averageScore,
        bestScore,
        questionAnswered, streak}) {
  return (
    <section className="stats-section">
      <StatCards icon={<ClipboardList />} value={quizzesTaken} title="Quizzes Taken" />
      <StatCards icon={<TrendingUp />} value={`${averageScore}%`} title="Average Score" />
      <StatCards icon={<Trophy />} value={`${bestScore}%`} title="Best Score" />
      <StatCards icon={<CircleHelp />} value={questionAnswered} title="Questions Answered" />
    </section>
  );
}
export default StatsCardCont;
