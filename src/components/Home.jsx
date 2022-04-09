import React, { useEffect } from "react";
import MoovieDetail from "./MoovieDetail";
import VideoCard from "./VideoCard";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoovies } from "../features/moovie/moovieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const allMoovies = useSelector((state) => state?.moovie?.moovies);

  console.log("AllMoovies", allMoovies);

  useEffect(() => {
    onSnapshot(collection(db, "movies"), (snapshot) => {
      console.log("snapshot", snapshot);
      const result = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          data: doc.data(),
        };
      });
      console.log("result", result);
      dispatch(fetchMoovies(result));
    });
  }, []);

  return (
    <>
      <div className="carousel-container">
        <div className="carousel">
          <div className="slider">
            <div className="slide-content">
              <h1 className="movie-title">loki</h1>
              <p className="movie-des">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Suscipit saepe eius ratione nostrum mollitia explicabo quae nam
                pariatur. Sint, odit?
              </p>
            </div>
            <img src="images/slider 1.PNG" alt="" />
          </div>
        </div>
      </div>
      <VideoCard />

      <h1 className="title">New</h1>
      <div className="movies-list">
        <button className="pre-btn">
          <img src="images/pre.png" alt="" />
        </button>
        <button className="nxt-btn">
          <img src="images/nxt.png" alt="" />
        </button>
        <div className="card-container">
          {allMoovies.map((moovie, index) => {
            if (moovie.data.type === "new") {
              const { title, cardImg, subTitle, type } = moovie.data;

              return (
                <>
                  <MoovieDetail
                    id={moovie.id}
                    key={index}
                    title={title}
                    image={cardImg}
                    subtitle={subTitle}
                    type={type}
                  />
                </>
              );
            }
          })}
        </div>
      </div>

      <h1 className="title">recommended for you</h1>
      <div className="movies-list">
        <button className="pre-btn">
          <img src="images/pre.png" alt="" />
        </button>
        <button className="nxt-btn">
          <img src="images/nxt.png" alt="" />
        </button>
        <div className="card-container">
          {allMoovies.map((moovie, index) => {
            if (moovie.data.type === "recommend") {
              const { title, cardImg, subTitle, type } = moovie.data;
              return (
                <>
                  <MoovieDetail
                    id={moovie.id}
                    key={index}
                    title={title}
                    image={cardImg}
                    subtitle={subTitle}
                    type={type}
                  />
                </>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
