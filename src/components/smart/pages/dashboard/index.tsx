import { Link } from "react-router-dom";
import { Dropdown } from "../../../dumb/atomics/dropdown";

export function Dashboard() {
  return (
    <div>
      this is the dashboard
      <Dropdown
        defaultOption={{ label: "Select", value: "select" }}
        options={[
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2" },
          { label: "Option 3", value: "option3" },
        ]}
        onSelected={(option) => console.log("new option", option)}
      />
      <Link to="/secondary-page">Go to secondary page</Link>
    </div>
  );
}
