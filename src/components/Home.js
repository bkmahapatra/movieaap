import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../stylesheets/Home.css";
import MoiveItem from "../components/MoiveItem";

function Home() {
  const dat = [
    {
      Title: "Batman: Arkham City",
      Year: "2011",
      imdbID: "tt1568322",
      Type: "game",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZDE2ZDFhMDAtMDAzZC00ZmY3LThlMTItMGFjMzRlYzExOGE1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Son of Batman",
      Year: "2014",
      imdbID: "tt3139072",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYjdkZWFhNzctYmNhNy00NGM5LTg0Y2YtZWM4NmU2MWQ3ODVkXkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
    },
    {
      Title: "Superman/Batman: Apocalypse",
      Year: "2010",
      imdbID: "tt1673430",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjk3ODhmNjgtZjllOC00ZWZjLTkwYzQtNzc1Y2ZhMjY2ODE0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Batman Beyond: Return of the Joker",
      Year: "2000",
      imdbID: "tt0233298",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNmRmODEwNzctYzU1MS00ZDQ1LWI2NWMtZWFkNTQwNDg1ZDFiXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg",
    },
    {
      Title: "Batman",
      Year: "1966�1968",
      imdbID: "tt0059968",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTkzNDY5NTg5MF5BMl5BanBnXkFtZTgwNzI4NzM1MjE@._V1_SX300.jpg",
    },
    {
      Title: "Superman/Batman: Public Enemies",
      Year: "2009",
      imdbID: "tt1398941",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZDc5NTFiMzgtZWJiOS00N2M1LWJmOGYtZmNjMzFhMzcxZjRiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Batman: Bad Blood",
      Year: "2016",
      imdbID: "tt4870838",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZWZiZmZhYmQtYjVkZi00MWIzLWEzM2MtYzhkNjliNzc2MTMwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Batman vs. Robin",
      Year: "2015",
      imdbID: "tt4324274",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjI0ODY2MDE5Nl5BMl5BanBnXkFtZTgwMTk0NTcyNTE@._V1_SX300.jpg",
    },
    {
      Title: "Batman Ninja",
      Year: "2018",
      imdbID: "tt7451284",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjFlMDc2NGMtYjkyMS00MTlhLTgxNWItMmYxZjc5NzVhMGE0XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SX300.jpg",
    },
    {
      Title: "Batman: Arkham Asylum",
      Year: "2009",
      imdbID: "tt1282022",
      Type: "game",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMWE1MGI0ZmItNzU2My00Mzk5LThkNTMtMmFiMjRiZDNlNzkwXkEyXkFqcGdeQXVyNjgyODQ1Mzk@._V1_SX300.jpg",
    },
    {
      Title: "Batman Begins",
      Year: "2005",
      imdbID: "tt0372784",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "Batman v Superman: Dawn of Justice",
      Year: "2016",
      imdbID: "tt2975590",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "The Batman",
      Year: "2022",
      imdbID: "tt1877830",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg",
    },
    {
      Title: "Batman",
      Year: "1989",
      imdbID: "tt0096895",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZDNjOGNhN2UtNmNhMC00YjU4LWEzMmUtNzRkM2RjN2RiMjc5XkEyXkFqcGdeQXVyMTU0OTM5ODc1._V1_SX300.jpg",
    },
    {
      Title: "Batman Returns",
      Year: "1992",
      imdbID: "tt0103776",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg",
    },
    {
      Title: "Batman & Robin",
      Year: "1997",
      imdbID: "tt0118688",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg",
    },
    {
      Title: "Batman Forever",
      Year: "1995",
      imdbID: "tt0112462",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "The Lego Batman Movie",
      Year: "2017",
      imdbID: "tt4116284",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg",
    },
    {
      Title: "Batman: The Animated Series",
      Year: "1992�1995",
      imdbID: "tt0103359",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg",
    },
    {
      Title: "Batman: The Killing Joke",
      Year: "2016",
      imdbID: "tt4853102",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Batman: Under the Red Hood",
      Year: "2010",
      imdbID: "tt1569923",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Batman v Superman: Dawn of Justice - Ultimate Edition",
      Year: "2016",
      imdbID: "tt18689424",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2I4OTllM2MtMWVhNC00MjkzLWJlMDUtN2FhMGQ2ZGVjMjllXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg",
    },
    {
      Title: "Batman: The Dark Knight Returns, Part 1",
      Year: "2012",
      imdbID: "tt2313197",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg",
    },
    {
      Title: "Batman: Mask of the Phantasm",
      Year: "1993",
      imdbID: "tt0106364",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYTRiMWM3MGItNjAxZC00M2E3LThhODgtM2QwOGNmZGU4OWZhXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
    },
    {
      Title: "Batman: The Dark Knight Returns, Part 2",
      Year: "2013",
      imdbID: "tt2166834",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYTEzMmE0ZDYtYWNmYi00ZWM4LWJjOTUtYTE0ZmQyYWM3ZjA0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    },
    {
      Title: "Batman",
      Year: "1966",
      imdbID: "tt0060153",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMmM1OGIzM2UtNThhZS00ZGNlLWI4NzEtZjlhOTNhNmYxZGQ0XkEyXkFqcGdeQXVyNTkxMzEwMzU@._V1_SX300.jpg",
    },
    {
      Title: "Batman: Year One",
      Year: "2011",
      imdbID: "tt1672723",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTJjMmVkZjctNjNjMS00ZmI2LTlmYWEtOWNiYmQxYjY0YWVhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Batman: Assault on Arkham",
      Year: "2014",
      imdbID: "tt3139086",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZDU1ZGRiY2YtYmZjMi00ZDQwLWJjMWMtNzUwNDMwYjQ4ZTVhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Batman Beyond",
      Year: "1999�2001",
      imdbID: "tt0147746",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZWJhNjA4YTAtODBlMS00NjIzLThhZWUtOGYxMGM3OTRmNDZmXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg",
    },
    {
      Title: "Batman: Gotham Knight",
      Year: "2008",
      imdbID: "tt1117563",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BM2I0YTFjOTUtMWYzNC00ZTgyLTk2NWEtMmE3N2VlYjEwN2JlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Batman: Arkham VR",
      Year: "2016",
      imdbID: "tt5807562",
      Type: "game",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGU2MzZkOWQtM2U3Ny00NDQ0LTk3NjctOTE3Mjk5Njc4Y2Y2XkEyXkFqcGdeQXVyNDYyNDIxNDM@._V1_SX300.jpg",
    },
    {
      Title: "Riddle Me This: Why Is Batman Forever?",
      Year: "1995",
      imdbID: "tt0486464",
      Type: "movie",
      Poster: "N/A",
    },
    {
      Title: "Batman & Robin",
      Year: "1998",
      imdbID: "tt0284883",
      Type: "game",
      Poster: "N/A",
    },
    {
      Title: "Superman vs. Batman: When Heroes Collide",
      Year: "2013",
      imdbID: "tt2662762",
      Type: "movie",
      Poster: "N/A",
    },
    {
      Title: "Batman: Death Wish",
      Year: "2012",
      imdbID: "tt2197827",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTc2ZTEzOGItZmU0YS00Y2Y2LThlNDctNjMxM2ZlNjc3MTkwXkEyXkFqcGdeQXVyMzYzNzc1NjY@._V1_SX300.jpg",
    },
    {
      Title:
        "Shadows of the Bat: The Cinematic Saga of the Dark Knight - Batman Unbound",
      Year: "2005",
      imdbID: "tt0486908",
      Type: "movie",
      Poster: "N/A",
    },
    {
      Title: "Lego Batman vs. Superman",
      Year: "2014",
      imdbID: "tt4955340",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTQ0MDkwOTQxNV5BMl5BanBnXkFtZTgwOTExNzM2NjE@._V1_SX300.jpg",
    },
    {
      Title: "Batman: The Enemy Within",
      Year: "2017",
      imdbID: "tt7170214",
      Type: "game",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BM2Y5NjhlODctMGQ1ZS00Y2I0LTk0YjgtM2Y5MzFkZTBiZTAzXkEyXkFqcGdeQXVyMjM5NzU3OTM@._V1_SX300.jpg",
    },
    {
      Title: "Batman Adventures: Mad Love",
      Year: "2008",
      imdbID: "tt1614951",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzg1YmE2NTgtZGE3Ny00ZWRjLThiZDMtZTZjZTYzMjE0YTQzXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg",
    },
    {
      Title: "Batman: Anarchy",
      Year: "2016",
      imdbID: "tt5516944",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BODM3MmUyYjAtNzk1OS00ZjA1LTk0NmEtY2VkMjkxYjg4YzljXkEyXkFqcGdeQXVyMjE5MjI4NDI@._V1_SX300.jpg",
    },
  ];
  const [movies, setMovies] = useState([]);
  const [totalmovies, setTotalmovies] = useState(0);

  //   const updateMovie = async () => {
  //     const url ="https://test-apis.veeksha.app/ba6evgdsa/tywcavgshdrfjdgvc.json";

  //     let data = await fetch(url);
  //     let parsedData = data.json();

  //     setMovies(parsedData);
  //     setTotalmovies(parsedData.length);
  //   };

  //   useEffect(() => {
  //     updateMovie();
  //   }, []);

  return (
      <>
      <div className="row">
        {dat.map(dt=>
            <div className="col">
            <MoiveItem
            mv_poster={dt.Poster}
            mv_title={dt.Title}
            mv_year={dt.Year}
            mv_type={dt.Type}
            />
            </div>
      )}
      </div>
    </>    

  );
}

export default Home;
