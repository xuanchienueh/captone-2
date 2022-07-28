import { useEffect } from "react";
import { useState } from "react";
import {manageFilmServices} from "../../services/manageFilmServices";
import { useParams } from "react-router-dom";


const CheckOut = function () {
    const [seatList, setSeatList] = useState([]);
    const [checkOutInfo, setCheckOutInfo] = useState(null);
    let { id } = useParams();    
    const loadData = async function() {
        const result = await manageFilmServices.getCheckOutInfo(id);
        setSeatList(result.data.content.danhSachGhe);
        setCheckOutInfo(result.data.content.thongTinPhim);
    }

    useEffect(() => {
        loadData();
      }, [])

    
    return <div>
      <div className="seats">
        <img src="" alt="manhinh"/>
        <div>{seatList.map(function(item){
            console.log(item);
            return <>
                <button className={`${item.loaiGhe}`}>{item.taiKhoanNguoiDat === "string" ? item.stt : "X" }</button>
                </>
        })}
        </div>
      </div>
      <div className="checkOutInfo">
            <h1>{checkOutInfo.maLichChieu}</h1>
      </div>
      <div className="legend">
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
      </div>
    </div>

}

export default CheckOut;