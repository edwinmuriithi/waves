import { Link } from "react-router-dom";

const GiveToday = () => {
  return (
    <Link to="/">
      <div className="rounded backdrop-blur-3xl">
        <h1 className="text-3xl underline">Give Today</h1>
        <p>We couldn't do our ocean conservation work without you</p>
      </div>
    </Link>
  );
};
