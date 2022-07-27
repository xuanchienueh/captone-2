import { useState, useEffect } from "react";
import {manageFilmServices} from "../../services/manageFilmServices";
import { useParams } from "react-router-dom";
import styles from "./FilmDetail.module.css"
import FilmSchedule from "../../components/filmSchedule/FilmSchedule"

const FilmDetail = function () {
    // [bien, ham set value cho bien] = useState(gia tri ban dau cua bien)
    const [film, setFilm] = useState(null);
    let { id } = useParams();
    const loadData = async function() {
        const result = await manageFilmServices.getFilmScheduleService(id);
        console.log(film);
        setFilm(result.data.content)
    }

    useEffect(() => {
      loadData();
    }, [])
    

    if (film === null) {
        return "Không Tìm Thấy Phim";
    } else {
        return (
            <div className={styles.detail} >
                <div>
                    <img className={styles.photo} src={film.hinhAnh} alt="" height={500} width={500}/>
                    <div className={styles.trailer}>
                        <h1>{film.trailer}</h1>
                    </div>
                </div>
                <div>
                    <div className={styles.content}>
                        <h1>{film.tenPhim}</h1>
                        <h2>{film.ngayKhoiChieu}</h2>
                        <h3>Điểm : {film.danhGia}</h3>
                        <p>{film.moTa}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default FilmDetail;
