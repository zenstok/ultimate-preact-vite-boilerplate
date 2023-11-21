import { Link } from "react-router-dom";

export function SecondaryPage() {
  return (
    <div>
      this is a secondary page
      <Link to="/">Go to dashboard</Link>
    </div>
  );
}
