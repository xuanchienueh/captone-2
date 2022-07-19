import React, { useEffect, useState, useId } from "react";
import { manageFilmServices } from "../../services/manageFilmServices";
import styles from "./banner.module.scss";

function Banner() {
  const [banners, setBanners] = useState([]);
  let id = useId();
  useEffect(() => {
    manageFilmServices
      .getListBannerService()
      .then((result) => {
        setBanners(result.data.content);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.banner}>
      <div id="banner" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          {banners?.map((_, index) => (
            <li
              key={index}
              data-target="#banner"
              data-slide-to={index}
              className={index === 0 ? "active" : ""}
            />
          ))}
        </ul>

        <div className="carousel-inner">
          {banners?.map((banner, index) => (
            <div
              style={{ backgroundImage: ` url(${banner.hinhAnh})` }}
              key={index}
              className={`carousel-item  ${index === 0 ? "active" : ""}`}
            ></div>
          ))}
        </div>

        <a className="carousel-control-prev" href="#banner" data-slide="prev">
          <span className="carousel-control-prev-icon" />
        </a>
        <a className="carousel-control-next" href="#banner" data-slide="next">
          <span className="carousel-control-next-icon" />
        </a>
      </div>
    </div>
  );
}

export default Banner;
