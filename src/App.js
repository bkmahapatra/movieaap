import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import MoiveItem from "./components/MoiveItem";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchData, setSearchData] = useState([]);

  const updateData = async () => {
    const url =
      "https://test-apis.veeksha.app/ba6evgdsa/tywcavgshdrfjdgvc.json";
    const response = await axios.get(url);
    const data = response.data;
    setMovies(data);
    console.log(movies);
  };

  useEffect(() => {
    updateData();
  }, []);

  const searchFunc = (words) => {
    if (words.trim().length > 0) {
      
      const posts = movies.filter((item) =>
        Object.values(item).join(" ").toLocaleLowerCase().includes(words)
      );
      console.log("high");
      setSearchData(posts);
    }
  };
  return (
    <div id="main">
      <Navbar searchKey={searchFunc} />
      <div className="movie_posts" >
        {movies.length > 0 && searchData.length > 0
          ? searchData.map((item) => {
              return (
                <MoiveItem 
                  key={item.imdbID}
                  mv_title={item.Title}
                  mv_poster={item.Poster}
                  mv_year={item.Year}
                  mv_type={item.Type}
                />
              );
            })
          : movies.map((item) => {
              return (
                <MoiveItem
                  key={item.imdbID}
                  mv_title={item.Title}
                  mv_poster={item.Poster}
                  mv_year={item.Year}
                  mv_type={item.Type}
                />
              );
            })}
      </div>
    </div>
  );
}

export default App;
