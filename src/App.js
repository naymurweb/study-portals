import { useEffect, useState } from "react";
import "./App.css";
import Profile from "./Components/Profile/Profile";
import Question from "./Components/Quasion/Question";
import Subject from "./Components/Subject/Subject";
import logo from "./image/favicon.png";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const [sub, setSub] = useState([]);
  const subBtn = (subject) => {
    // console.log(sub);
    const newSub = [...sub, subject];
    setSub(newSub);
  };

  return (
    <div className="main-container">
      
      <div className="main-sub">
        <div className="header">
          <img src={logo} alt="" />

          <h1>study portals</h1>
        </div>

        <div className="subject-container">
          {data.map((subject) => (
            <Subject
              btnClick={subBtn}
              allSubject={subject}
              key={subject.id}
            ></Subject>
          ))}
        </div>
        <Question></Question>
      </div>

      <div className="profile-container">
        <Profile selectSub={sub}></Profile>
      </div>
    </div>
  );
}

export default App;
