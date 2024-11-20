import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div>
      <div>
        <h3>Uh oh, we could not find the page you were looking for!</h3>
        <Link to="/">Return to the Code Journal</Link>
      </div>
    </div>
  );
}
