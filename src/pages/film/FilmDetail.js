import { useState, useEffect } from "react";
import {manageFilmServices} from "../../services/manageFilmServices";
import { useParams } from "react-router-dom";
import styles from "./FilmDetail.module.css";
import FilmDetailSchedule from "./FilmDetailSchedule";

const FilmDetail = function () {
    // [bien, ham set value cho bien] = useState(gia tri ban dau cua bien)
    const [film, setFilm] = useState(null);
    let { id } = useParams();
    const loadData = async function() {
        const result = await manageFilmServices.getFilmScheduleService(id);
        setFilm(result.data.content)
        console.log("result", result.data.content);
    }

    useEffect(() => {
      loadData();
    }, [])
    

    if (film === null) {
        console.log("Không Tìm Thấy Phim");
        return "Không Tìm Thấy Phim";
    } else {
        console.log("Tìm Thấy Phim");
        return (
            <>
            <div className={`${styles.filmDetail}`}>
                <div className={`${styles.detailInfo}`}>
                    <div className={`${styles.detailLeft}`}>
                        <img className={`${styles.photo}`} src={film.hinhAnh} alt="" height={500} width={500}/>
                        <div className={`${styles.trailer}`}>
                        </div>
                    </div>
                    <div className={`${styles.detailRight}`}>
                        <div className={`${styles.content}`}>
                            <h1>{film.tenPhim}</h1>
                            <h2>Điểm : {film.danhGia} ★ </h2>
                            <p>{film.moTa}</p>
                            <span><a href={film.trailer}>Link Film : {film.trailer}</a></span>
                        </div>
                    </div>
                </div>
                <FilmDetailSchedule film={film}/>
            </div>
            </>
        )
    }
}

export default FilmDetail;
