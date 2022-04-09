import React from "react";
import { Link } from "react-router-dom";

const MoovieDetail = ({ id, title, image, subTitle, type }) => {
  return (
    <Link to={`/moovie/detail/${id}`}>
      <div className="card">
        <img src={image} className="card-img" alt="" />
        <div className="card-body">
          <h2 className="name">{title}</h2>
          <h6 className="des">{subTitle}</h6>
          <smaal>{type}</smaal>
          <button className="watchlist-btn">add to watchlist</button>
        </div>
      </div>
    </Link>
  );
};

export default MoovieDetail;
