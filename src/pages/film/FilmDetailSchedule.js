import { useState } from "react";
import styles from "./FilmDetailSchedule.module.css";

const FilmDetailSchedule = function (props) {
    console.log("props", props);
    const [activeBrand, setActiveBrand] = useState (props.film.heThongRapChieu[0]);
    const [activeBranch, setActiveBranch] = useState (null);
    console.log('activeBrand', activeBrand);
    console.log('activeBranch', activeBranch);

    return <div className={`${styles.detailSchedule}`}>
        <div className={`${styles.container}`}>
            <div className={`${styles.logo}`}>
                {
                    props.film.heThongRapChieu.map(
                            (item) => <div className={`${styles.brand} ${activeBrand && activeBrand.maHeThongRap === item.maHeThongRap ? styles.activeBrand : ''}`}>
                                <img src={item.logo}  alt="logo" onClick={() => setActiveBrand(item)} />
                            </div>
                        )
                }
            </div>
            <div className={`${styles.schedule}`}>
                {
                    activeBrand ? activeBrand.cumRapChieu.map(function (cumRap) {
                        return <div className={`${styles.cumRap}` }>
                            <div className={`${styles.content}`}>
                                <img src={cumRap.hinhAnh} alt="hethongrap" onClick={() => setActiveBranch(cumRap)}/>
                                <div className={`${styles.info}`}>
                                    <h1>{cumRap.tenCumRap}</h1>
                                    <h2>{cumRap.diaChi}</h2>
                                </div>
                            </div>
                            <div className={`${styles.time}`}>
                                {
                                    cumRap.lichChieuPhim.map(function (lichChieu) {
                                        return <div >
                                            <button className={`${styles.button}`}><a href={"/ticketroom/" + lichChieu.maLichChieu}>{(new Date(lichChieu.ngayChieuGioChieu).toLocaleTimeString("vi-VI"))}</a></button>
                                            
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    })
                    :
                    ''
                }
            </div>    
        </div>

    </div>
        
}

export default FilmDetailSchedule;