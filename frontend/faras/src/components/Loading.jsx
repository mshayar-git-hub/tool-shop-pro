import './Loading.css'

export default function Loading() {
  return (
    <div className="loading-screen">
      <div className="loader"></div>
      <h5 className="mt-4">Loading...</h5>
      <p className="text-muted">Please wait a moment</p>
    </div>
  );
}