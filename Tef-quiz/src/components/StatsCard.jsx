function StatCards({icon, value, title}) {
  return (
    <div className="stats-card">
      <div className="stats-icon">{icon}</div>
      <h2>{value}</h2>
      <p>{title}</p>
    </div>
  );
}
export default StatCards;
