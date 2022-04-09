import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/singleMoovie.css";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";

const SingleMoovie = () => {
  const [singleMoovie, SetSingleMoovie] = useState({});
  const { id } = useParams();
  console.log("id", id);

  useEffect(() => {
    onSnapshot(doc(db, "movies", id), (doc) => {
      //console.log("Current data: ", doc.data());
      SetSingleMoovie(doc.data());
    });
  }, [id]);
  //console.log("singleMoovie", singleMovie);
  return (
    <>
      <div className="img"></div>
      <div className="wrap">
        <div className="banner">
          <div className="content">
            <div className="everything">
              <span className="vip">Premium</span>
              <div className="title">
                <span>{singleMoovie.title}</span>
              </div>
              <div className="episodes">
                <span>2025 | </span>
                <span>1 Season |</span>
                <span> 6 Episodes |</span>
                <span> Superhero |</span>
                <span> 12+ |</span>
                <span> Marvel</span>
              </div>
              <div className="description">
                <span>{singleMoovie.description}</span>
              </div>
              <div className="starring">
                <span>{singleMoovie.subTitle}</span>
              </div>
              <div className="watch">
                <i className="fas fa-play"></i>
                <button>Watch Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleMoovie;
