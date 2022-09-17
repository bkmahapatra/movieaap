import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../stylesheets/Home.css";
import MoiveItem from "../components/MoiveItem";

function Home() {
  const [movies, setMovies] = useState([]);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const updateMovie = async (pg) => {
    const url =
      "https://test-apis.veeksha.app/ba6evgdsa/tywcavgshdrfjdgvc.json";
    let data = await fetch(url);
    let parsedData = await data.json();
    setMovies(parsedData);

    let deta=movies.map(dt=>{
      return {
        Title:dt.Title,
        Year:dt.Year.slice(0,4),
        imdbID:dt.imdbID,
        Type:dt.Type,
        Poster:dt.Poster
      }
    })

    sort("asc",deta);
    
    if (pg === 1) {
      setData(deta.slice(0, 20));
    } else if (pg === 2) {
      setData(movies.slice(20, 40));
    }
    

  };
  useEffect(() => {
    updateMovie(page);
  }, [page, updateMovie()]);

  const sort=(type,deta)=>{
    if(type==="asc"){
      deta.sort((a,b)=>{
        return parseInt(a.Year) - parseInt(b.Year);
      })
    }
    else if(type==="desc"){
      deta.sort((a,b)=>{
        return parseInt(b.Year) - parseInt(a.Year);
      })
    }
  }
  const prev = () => {
    setPage(1);
  };
  const next = () => {
    setPage(2);
  };
  const pg1 = () => {
    setPage(1);
  };
  const pg2 = () => {
    setPage(2);
  };

  return (
    <>

      <div className="row">
        {data.map((dt) => (
          <div className="col" key={dt.imdbID}>
            <MoiveItem
              mv_poster={dt.Poster}
              mv_title={dt.Title}
              mv_year={dt.Year}
              mv_type={dt.Type}
            />
          </div>
        ))}
      </div>

      <div className="pagination">
        <button id="prev" onClick={prev}>
          Previous
        </button>
        <button id="pg1" onClick={pg1}>
          1
        </button>
        <button id="pg2" onClick={pg2}>
          2
        </button>
        <button id="next" onClick={next}>
          Next
        </button>
      </div>
    </>
  );
}

export default Home;
