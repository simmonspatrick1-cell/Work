export default function ProjectList({ projects }) {
  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {(projects || []).map((proj, i) => (
          <li key={i}>
            {proj.name} &mdash; {proj.progress}%
            <progress value={proj.progress} max="100" />
          </li>
        ))}
      </ul>
    </div>
  );
}
