import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./cardFilm.module.scss";

const styleCss = {
  display: "-webkit-box",
  height: "1.6rem",
  fontSize: "1rem",
  lineHeight: "1.8",
  WebkitLineClamp: "1",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

function CardFilm({ film, getFilmTrailer }) {
  const navigate = useNavigate();

  return (
    <div className={styles.cardFilm}>
      <div className={`max-w-xs p-3 rounded-md shadow-md bg-coolGray-50 text-coolGray-900`}>
        <div className={` relative`}>
          <div
            className={`openTrailer bg-gradient-to-t from-gray-800  inset-0`}
            onClick={() => getFilmTrailer({ ...film, randomNumber: Math.random() })}
          >
            <div className="w-10 h-10 rounded-full border-solid border-2 border-white text-white flex items-center justify-center">
              <i className="fas fa-play"></i>
            </div>
          </div>
          <img
            src={film.hinhAnh}
            alt="1"
            className="object-cover object-center w-full rounded-md h-72 bg-coolGray-500"
          />
        </div>
        <div className="mt-6 mb-2 flex align-items-center relative">
          <div
            onClick={() => navigate(`/detail/${film.maPhim}`)}
            className={`ticketBooking  py-3 font-semibold rounded bg-[#fb4226] inset-0`}
          >
            <div>ĐẶT VÉ</div>
          </div>
          <span className="p-1 font-semibold rounded bg-[#fb4226] text-white mr-1">C18</span>
          <span className="font-semibold" style={{ ...styleCss }}>
            {film.tenPhim}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardFilm;
