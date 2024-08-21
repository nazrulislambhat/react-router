import { Link } from 'react-router-dom';
function NotFoundPage() {
  return (
    <div>
      404 Page Not Found
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default NotFoundPage;
