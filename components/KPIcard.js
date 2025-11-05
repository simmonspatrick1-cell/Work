export default function KPIcard({ title, value }) {
  return (
    <div style={{
      border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', display: 'inline-block', minWidth: '120px'
    }}>
      <h3>{title}</h3>
      <p style={{ fontSize: '2em' }}>{value}</p>
    </div>
  );
}
