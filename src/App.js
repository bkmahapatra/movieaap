import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import MoiveItem from "./components/MoiveItem";
import Pagination from "./components/Pagination";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [postPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);

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
  }, [currentPage]);

  const searchFunc = (words) => {
    if (words.trim().length > 0) {
      const posts = movies.filter((item) =>
        Object.values(item).join(" ").toLocaleLowerCase().includes(words)
      );
      console.log("high");
      setSearchData(posts);
    }
  };
  const paginate = (pageNum) => {
    if (pageNum === "prev") {
      if (currentPage > 1) setCurrentPage(currentPage - 1);
    } else if (pageNum === "next") {
      if (currentPage < Math.ceil(movies.length / postPerPage))
        setCurrentPage(currentPage + 1);
    } else setCurrentPage(pageNum);
  };
  //show page logic
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = movies.slice(firstPostIndex, lastPostIndex);

  return (
    <div id="main">
      <Navbar searchKey={searchFunc} />
      <div className="movie_posts">
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
          : currentPosts.map((item) => {
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
      <Pagination
        totalPosts={movies.length}
        postPerPage={postPerPage}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
