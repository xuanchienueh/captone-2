import {useState, useEffect} from "react";
import {manageFilmServices} from "../../services/manageFilmServices";
import BrandTheaterList from "./BrandTheaterList";
import styles from "./index.module.css"

const FilmSchedule = function() {
    const [BrandList, setBrandList] = useState([]);
    const [activeBrand, setActiveBrand] = useState(null);
    const [activeBranch, setActiveBranch] = useState(null);
    const loadData = async function() {
        const result = await manageFilmServices.getFilmScheduleService();
        setBrandList(result.data.content)
    }

    useEffect(() => {
        loadData();
      }, [])


      useEffect(() => {
        console.log('activeBrand', activeBrand)
      })
      
    
    return (

        <div className={`${styles.myContainer}`}>
            
            <div>
            {
                BrandList.map(function(item) {
                    return <div  className={`${styles.logo} ${activeBrand && activeBrand.maHeThongRap === item.maHeThongRap ? styles.logo_active : ''}`}>
                    <img src={item.logo} alt="logo" onClick={() => setActiveBrand(item)} />
                    </div>
                })
            }
            </div>

            <div className={`${styles.brandList}`}>
                {
                    activeBrand ?
                    (
                        <ul>
                            {
                                activeBrand.lstCumRap.map(function (branchTheater) {
                                    return (<li onClick={()=> setActiveBranch(branchTheater)}>
                                        <div className={`${styles.cumRap} ${activeBranch && activeBranch.danhSachPhim === branchTheater.danhSachPhim ? styles.cumRap_active : ''}`}>
                                            <img src={branchTheater.hinhAnh} alt={branchTheater.tenCumRap}/>
                                            <div className={`${styles.info}`}>
                                                <h1>{branchTheater.tenCumRap}</h1>
                                                <h1>{branchTheater.diaChi}</h1>
                                            </div>
                                        </div>
                                    </li>)
                                })
                            }
                                
                        </ul>
                    )
                    :
                    (
                        ''
                    )
                }
            </div>

            <div className={`${styles.movieContainer}`}>
                {
                    activeBranch ?
                    (
                        activeBranch.danhSachPhim
                        .map(function (theaterFilm) {
                            console.log("theaterFilm", theaterFilm);
                            return  (<div className={`${styles.movie}`}>
                                <div className={`${styles.title}`}>
                                    <img src={theaterFilm.hinhAnh} alt="hinhphim"/>
                                    <div className={`${styles.title_info}`}>
                                        <h1>{theaterFilm.tenPhim}</h1>
                                        <h2>{activeBranch.diaChi}</h2>
                                    </div>
                                </div>
                                <div className={`${styles.time}`}>
                                    {
                                        theaterFilm.lstLichChieuTheoPhim.map(function (filmSchedule) {
                                            console.log('filmSchedule', filmSchedule);
                                            return (
                                                
                                                    <button className={`${styles.btn}`}><a href={"/detail/" + theaterFilm.maPhim}>{(new Date(filmSchedule.ngayChieuGioChieu).toLocaleTimeString("vi-VI"))}</a> </button>
                                                
                                            )
                                        })
                                    }
                                </div>
                            </div>)
                        })
                    )
                    :
                    ''
                }
            </div>
        </div>    
    )   
}

export default FilmSchedule;
    