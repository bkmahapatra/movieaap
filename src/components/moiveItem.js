import React from "react";
import "../stylesheets/Movieitem.css";

function MoiveItem(props) {
  return (
    <>
      <div className="movie_item">
        <img className="movie_poster" src={props.mv_poster} alt="" />

        <div className="movie_box">
          <div className="movie_title">{props.mv_title}</div>
          <div className="movie_year">{props.mv_year}</div>
        </div>
        <div className="movie_type">{props.mv_type}</div>
      </div>
    </>
  );
}

// MoiveItem.defaultProps={
//   mv_poster:"https://m.media-amazon.com/images/M/MV5BYjdkZWFhNzctYmNhNy00NGM5LTg0Y2YtZWM4NmU2MWQ3ODVkXkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg" ,
//   mv_title:"Son of Batman",
//   mv_year: 2014,
//   mv_type: "movie"

// };

// MoiveItem.propTypes={
//   mv_poster: PropTypes.string,
//   mv_title: PropTypes.string,
//   mv_year: PropTypes.number,
//   mv_type: PropTypes.string,

// };

export default MoiveItem;
