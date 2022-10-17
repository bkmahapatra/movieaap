import React from "react";
import "../stylesheets/Paginate.css";

const Pagination = ({ paginate, totalPosts, postPerPage }) => {
  const totalPage = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++)
    totalPage.push(i);

  return (
    <div className="pagination">
      <div className="btn btn-prev" onClick={()=>paginate("prev")}>&lt;</div>

      {totalPage.map((item) => {
        return (
          <div key={item} onClick={()=>paginate(item)} className="btn">
            {item}
          </div>
        );
      })}

      <div className="btn btn-next" onClick={()=>paginate("next")}>&gt;</div>
    </div>
  );
};

export default Pagination;
