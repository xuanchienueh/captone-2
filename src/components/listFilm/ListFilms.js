import React, { useState } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import CardFilm from "../filmItem/CardFilm";
import styles from "./listFilms.module.scss";
import Trailer from "../trailer/Trailer";

function ListFilms({ isShowing }) {
  const [film, setFilm] = useState({});
  let { listFilms } = useSelector((state) => state.manageFilmReducer);
  let arrFilmShowing = listFilms.filter((film) => film.dangChieu === true);
  let arrFilmNotShowing = listFilms.filter((film) => film.sapChieu === true);

  const renderFilm = (arr) =>
    arr.map((item) => {
      return (
        <div key={item.maPhim}>
          <CardFilm getFilmTrailer={setFilm} film={item} />
        </div>
      );
    });

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          slidesPerRow: 1,
          nextArrow: <div />,
          prevArrow: <div />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <div />,
          prevArrow: <div />,
        },
      },
    ],
  };
  return (
    <>
      <Trailer film={film} />
      <div className={styles.listFilms}>
        <div className="relative">
          <div className="container mx-auto sm:px-0 xl:px-[60px] ">
            <Slider {...settings}>
              {isShowing ? renderFilm(arrFilmShowing) : renderFilm(arrFilmNotShowing)}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListFilms;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={`${className}`} style={{ ...style, display: "block" }} onClick={onClick}>
      <i className="fas fa-chevron-right fa-2x"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={`${className}`} style={{ ...style, display: "block" }} onClick={onClick}>
      <i className="fas fa-chevron-left fa-2x"></i>
    </div>
  );
}
