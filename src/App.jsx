
// import Toggle from './component/Toggle';
// import Car from './component/Car';
// import Student from './component/Student';
// import Welcome from './component/Welcome';
// import User from './component/User';
// import Increment from './component/Increment';
// import TogglleTheme from './component/TogglleTheme';
// function App() {
//   return (
//     <div>
//       <TogglleTheme/>
//       <Toggle/>
//        <Car></Car>
//       <Student></Student>
//        <Welcome></Welcome>
//       <User></User>
//       <Increment /> 
//     </div>
//   );
// }
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import BMICalculator from "./pages/BMICalculator";
// import Result from "./pages/Result";
// import bgImage from "./assets/bmi-bg.jpg";

// function App() {
//   return (
//     <div
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         minHeight: "100vh"
//       }}
//     >
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<BMICalculator />} />
//         <Route path="/result" element={<Result />} />
//       </Routes>
//     </BrowserRouter>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import Bike from "./vechicle/Bike";
import Car from "./vechicle/Car";
import Truck from "./vechicle/Truck";
import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div>
      <h1>Vehicle Gallery</h1>

      <button onClick={() => setActiveModal("bike")}>Bike</button>
      <button onClick={() => setActiveModal("car")}>Car</button>
      <button onClick={() => setActiveModal("truck")}>Truck</button>

      {/* Modal */}
      {activeModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="close-btn"
              onClick={() => setActiveModal(null)}
            >
              X
            </button>

            {activeModal === "bike" && <Bike />}
            {activeModal === "car" && <Car />}
            {activeModal === "truck" && <Truck />}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;