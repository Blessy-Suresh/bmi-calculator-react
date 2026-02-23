import { useLocation, useNavigate } from "react-router-dom";
import "./Result.css";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state) {
    return (
      <div className="resultContainer">
        <div className="resultCard">
          <h2>No Data Found</h2>
          <button onClick={()=>navigate("/")}>Go Back</button>
        </div>
      </div>
    );
  }

  const { name, bmi, status } = location.state;

  const tips = {
    Underweight: "Eat nutritious food and increase calories",
    Healthy: "Maintain your healthy lifestyle",
    Overweight: "Exercise regularly and avoid junk food",
    Obese: "Consult doctor and follow diet plan"
  };

  return (
    <div className="resultContainer">
      <div className="resultCard">
        <h1>Hello {name}</h1>
        <h2>Your BMI: {bmi}</h2>
        <h2>You are {status}</h2>
        <p>{tips[status]}</p>

        <button onClick={()=>navigate("/")}>Recalculate</button>
      </div>
    </div>
  );
}

export default Result;
