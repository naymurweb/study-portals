import { useEffect, useState } from "react";
import "./App.css";
import Profile from "./Components/Profile/Profile";
import Subject from "./Components/Subject/Subject";
import logo from'./image/favicon.png'

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="main-container">
      <div>
        <div className="header">
        <img src={logo} alt="" />

        <h1>study portals</h1>
        </div>
      

        <div className="subject-container">
          {data.map((subject) => (
            <Subject allSubject={subject} key={subject.id}></Subject>
          ))}
        </div>
      </div>

      <div className="profile-container">
        <Profile></Profile>
      </div>
    </div>
  );
}

export default App;
