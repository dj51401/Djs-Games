import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Home from "./pages/home.js";

const apiKey = "f2fb08d8bd68461aaad674d2dd38e60c";

function App() {
  const [dataList, setDataList] = useState([]);
  const url = `https://api.rawg.io/api/games?key=${apiKey}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setDataList(json.results))
      .catch((err) => console.log(err));
  });

  return (
    <div>
      {dataList.map(data => {
        return(
        <div>
          <h1 key={data.id}>{data.name}</h1>
          <img src={data.background_image} alt=""/>
          <p>{data.rating} / 5</p>
        </div>
        );
      })}
    </div>
  );
}

export default App;
