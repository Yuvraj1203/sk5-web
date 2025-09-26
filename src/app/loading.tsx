// This loading UI will be shown instantly while the content
// of the `dashboard` route segment is being fetched and rendered.
export default function Loading() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Loading...</h1>
      {/* You can add a spinner or skeleton UI here */}
    </div>
  );
}
