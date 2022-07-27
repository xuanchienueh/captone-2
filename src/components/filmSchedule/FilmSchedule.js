import {useState, useEffect} from "react";
import {manageFilmServices} from "../../services/manageFilmServices";
import BrandTheaterList from "./BrandTheaterList";
import styles from "./index.module.css"

const FilmSchedule = function() {
    const [BrandList, setBrandList] = useState([]);
    const [activeBrand, setActiveBrand] = useState([]);
    const loadData = async function() {
        const result = await manageFilmServices.getFilmScheduleService();
        setBrandList(result.data.content)
    }

    useEffect(() => {
        loadData();
      }, [])
      
  
    return (

        <div className={styles.myContainer}>
            <div className={styles.theaterList}>
                <div className={styles.theaterListLogo}>
                    {
                        BrandList.map(function(item) {
                            return <div onClick={() => setActiveBrand(item.maHeThongRap)} className={styles.BrandTheater} >
                                        <BrandTheaterList activeBrand={activeBrand} brand={item} />
                                   </div>
                        })
                    }
                </div>    
            </div>
        </div>    
    )   
}

export default FilmSchedule;
    