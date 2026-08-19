import { Link } from "react-router-dom";

function NotFoundPage() {
return (
<main className="result-page">
<section className="result-card empty-result">
<div className="result-icon">!</div>

    <p className="result-label">PAGE NOT FOUND</p>

    <h1>Oops! We can't find that page.</h1>

    <p className="result-description">
      The page you're looking for doesn't exist or may have been moved.
    </p>

    <Link className="result-button" to="/">
      Back to home
    </Link>
  </section>
</main>

);
}

export default NotFoundPage;