import React from 'react'

function moiveItem(props) {
  return (
    <>
        <div className="movie_item">
            <div className="movie_poster">
            ${props.mv_poster}
            </div>
            <div className="movie_box">
                <div className="movie_title">${props.mv_title}</div>
                <div className="movie_year">${props.mv_year}</div>
            </div>
            <div className="movie_type">${props.mv_type}</div>

        </div>

    </>
  )
}

export default moiveItem