import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section">
      <div className="container card">
        <h1 className="section-title">Page Not Found</h1>
        <p className="detail-description">
          The route does not exist. Check the URL or return to the project list.
        </p>
        <div className="btn-row">
          <Link className="btn btn-primary" href="/">
            Home
          </Link>
          <Link className="btn btn-secondary" href="/projects">
            Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
