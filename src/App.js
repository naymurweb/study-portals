import { useEffect, useState } from "react";
import "./App.css";
import Profile from "./Components/Profile/Profile";
import Subject from "./Components/Subject/Subject";


function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
 
  return (
    <div className="main-container">
      <div className="subject-container">
        {
          data.map(subject=><Subject allSubject ={subject} key={subject.id}></Subject>)
        }


      </div>
      <Profile></Profile>
    </div>
  );
}

export default App;
