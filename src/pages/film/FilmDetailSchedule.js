import { useState } from "react";
import styles from "./FilmDetailSchedule.module.css";

const BrandLogoList = function (props) { 
    const handleOnClick = function(item) {
        props.activeGiumTao(item)
    }
    
    return props.brands.map((item) => <img src={item.logo}  alt="logo" onClick={() => handleOnClick(item)} />)
}



const FilmDetailSchedule = function (props) {
    console.log("props", props);
    const [activeBrand, setActiveBrand] = useState (null);
    const [activeBranch, setActiveBranch] = useState (null);
    console.log('activeBrand', activeBrand);
    console.log('activeBranch', activeBranch);

    return <>
        <div className={`${styles.container}`}>
            <div><BrandLogoList brands={props.film.heThongRapChieu} activeGiumTao={setActiveBrand} /></div>
            <div>
                {
                    activeBrand ?
                    activeBrand.cumRapChieu.map(function (cumRap) {
                        return <div>
                            <img src={cumRap.hinhAnh} alt="hethongrap" onClick={() => setActiveBranch(cumRap)}/>
                            <h1>{cumRap.tenCumRap}</h1>
                            <h2>{cumRap.diaChi}</h2>
                        </div>
                    })
                    :
                    ''
                }
            </div>
            <div>
                {
                    activeBranch ? 
                    activeBranch.lichChieuPhim.map(function (lichChieu) {
                        return <div>
                            <button>{lichChieu.ngayChieuGioChieu}</button>
                        </div>
                    })
                    : 
                    ``
                }
            </div>
        </div>

    </>
        
}

export default FilmDetailSchedule;